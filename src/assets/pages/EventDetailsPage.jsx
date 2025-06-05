import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EventDetailsPage = () => {
    const { id } = useParams()
    const [event, setEvent] = useState({})

    const getEvents = async () => {
        const res = await fetch(`https://microservices-assignment-eventservice-fag9hfbhg0e5dcb2.swedencentral-01.azurewebsites.net/api/events/${id}`)

        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div className="portal-wrapper">
            <Nav />
            <Header />
            <div className="event-details-wrapper">
                <div className="event-details-image-placeholder" />
                <div className="event-details-content">
                    <h1 className="event-details-title">{event.title}</h1>
                    <p className="event-details-meta">
                        📅 {new Date(event.eventDate).toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })} <br />
                        📍 {event.location}
                    </p>
                    <div className="event-details-description-block">
                        <h2>About Event</h2>
                        <p>{event.description}</p>
                    </div>
                    <Link className="event-details-book-button" to={`/events/booking/${id}`}>
                        Book Event
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventDetailsPage