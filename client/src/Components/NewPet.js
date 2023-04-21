import React, { useEffect, useState } from "react";
import UploadWidget from "./UploadWidget";

function NewPet({ loggedInUser, handlePetPost, setFormVisible }) {

    const [userId, setUserId] = useState(0)
    const [newPet, setNewPet] = useState({})
    const [cloudinaryImageTag, setCloudinaryImageTag] = useState("")


    useEffect(() => setUserId(loggedInUser?.id), [loggedInUser])
    useEffect(() => {setNewPet({...newPet, cloudinary_tag: cloudinaryImageTag})}, [cloudinaryImageTag])

    const handleChange = (event) => {
        setNewPet({ ...newPet, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('user_id', userId)
        Object.keys(newPet).forEach(key => formData.append(key, newPet[key]))
        setFormVisible(false)

        handlePetPost(formData)
    }
console.log(cloudinaryImageTag)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="name" name="name" />
                <input onChange={handleChange} type="text" placeholder="animal_type" name="animal_type" />
                <input onChange={handleChange} type="text" placeholder="breed" name="breed" />
                <input onChange={handleChange} type="date" name="birthday" />
                <UploadWidget setCloudinaryImageTag={setCloudinaryImageTag}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPet