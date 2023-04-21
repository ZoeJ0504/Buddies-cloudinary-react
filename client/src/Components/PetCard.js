import React, { useState } from "react"
import styled from "styled-components";
import moment from 'moment'
import UpdatePet from "./UpdatePet";
import UploadWidget from "./UploadWidget";

function PetCard({ pet, handlePatchPets, handleDeleteClick }) {
    const [isVisible, setIsVisible] = useState(false)
    const [style, setStyle] = useState({ display: 'none' });

    // const [petImage, setPetImage] = useState()



    // Old way of posting images
    // const onImageChange = (event) => {
    //     setPetImage({ pet_image: event.target.files[0] })
    // }

    return (
        <PetCardDiv>
            <PetCardP>{pet.name}</PetCardP>
            {/* <div
                onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                onMouseLeave={e => {
                    setStyle({ display: 'none' })
                }}
            > */}
            <PetImage src={`https://res.cloudinary.com/dlewu2m7d/image/upload/v1681428108/${pet.cloudinary_tag}.jpg`} alt={pet.name} />
            {/* </div> */}

            <PetCardP>{moment.utc(pet.birthday).format('MM-DD-YYYY')}</PetCardP>
            <PetCardP>{pet.animal_type}</PetCardP>
            <PetCardP>{pet.breed}</PetCardP>
            <PetCardButton onClick={() => setIsVisible(!isVisible)}>Edit Pet Info</PetCardButton>
            {isVisible === true && <UpdatePet pet={pet} handlePatchPets={handlePatchPets} />}
            <PetCardButton onClick={() => { handleDeleteClick(pet) }}>Delete</PetCardButton>
        </PetCardDiv>
    )
}

export default PetCard;

const PetCardDiv = styled.div`
background-color: white; 
width: auto;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
gap: 5px;
margin: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const PetImage = styled.img`
width: 300px;
height: 300px;
display:flex;
align-self: center;
`

const PetCardButton = styled.button`
display: flex;
align-self: center;
width: auto;
padding: 10px;
height: auto;
`

const PetCardP = styled.p`
margin: 10px; 
padding: 5px;
font-size: 25px;
`