import React, { useEffect, useState } from "react"
import NewEvent from "../Components/NewEvent";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Event from "../Components/Event";

function Profile({ user }) {
    const [isVisible, setIsVisible] = useState(false)
    const [events, setEvents] = useState([])
    const [ownerEvents, setOwnerEvents] = useState([])
    const [petsitterEvents, setPetsitterEvents] = useState([])

    const handleClick = () => setIsVisible(!isVisible)

    useEffect(() => {
        fetch("/events")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    useEffect(() => {
        setOwnerEvents(events.filter(event => event.owner_id === user.id))
    }, [events, user])

    useEffect(() => {
        setPetsitterEvents(events.filter(event => event.petsitter_id === user.id))
    }, [events, user])

    const handleEventPost = (newEvent) => {
        fetch("/newevent", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newEvent)
        })
        setOwnerEvents([...ownerEvents, newEvent])

        setIsVisible(!isVisible)
    }
console.log(user)
    return (
        <PageDiv>
            <Tabs>
                <TabList style={{ backgroundColor: "#8A6447", margin: 0 }}>
                    <Tab style={{ backgroundColor: "#D2B48C", margin: 0, borderColor: "#8A6447", borderRadius: 10 }}>Profile</Tab>
                    <Tab style={{ backgroundColor: "#D2B48C", margin: 0, borderColor: "#8A6447", borderRadius: 10 }}>Event</Tab>
                </TabList>
                <TabPanel>
                    <ProfileDiv>
                        <div>
                            <InfoDiv>{user?.first_name} {user?.last_name}</InfoDiv>
                            <InfoDiv>{user?.city}, {user?.state}</InfoDiv>
                        </div>
                        <div>
                             <ProfileImg src={`https://res.cloudinary.com/dlewu2m7d/image/upload/v1681428108/${user.cloudinary_tag}.jpg`} alt="profile"/>
                        </div>
                    </ProfileDiv>
                </TabPanel>
                <TabPanel>
                    <ProfileDiv>
                        {user?.attribution === "owner" &&
                            <div>
                                <button onClick={handleClick}>Add New Event</button>
                                <EventDiv>
                                    {ownerEvents?.map(ownerEvent => <Event key={ownerEvent.id} event={ownerEvent} />)}
                                </EventDiv>
                            </div>
                        }
                        {petsitterEvents.map(petsitterEvent => <Event key={petsitterEvent} event={petsitterEvent} />)}
                        {isVisible ? <NewEvent user={user.id} handleEventPost={handleEventPost} /> : <div> </div>}
                    </ProfileDiv>
                </TabPanel>
            </Tabs>
        </PageDiv >
    )
}

export default Profile;

const PageDiv = styled.div`
display: flex; 
justify-content: center;
flex-direction: row;
flex-wrap: row;
`

const ProfileDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
background-color: #D2B48C;
border: solid;
border-color: #8A6447;
border-width: 10px;
width: auto;
height: auto;
display: flex;
`

const ProfileImg = styled.img`
display: flex;
width: 270px;
height: 350px;
align-self: flex-start;
padding: 30px;
`

const EventDiv = styled.div`
display: flex;
`
const InfoDiv = styled.div`
display: flex;
justify-content: center;
`