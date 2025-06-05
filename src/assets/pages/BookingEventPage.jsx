import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id,
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        postalCode: '',
        city: '',
        ticketQuantity: 1
    })

    const getEvent = async () => {
        const res = await fetch(`https://microservices-assignment-eventservice-fag9hfbhg0e5dcb2.swedencentral-01.azurewebsites.net/api/events/${id}`)
        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://microservices-assignment-bookingservice-fch2enbgefchgaa8.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (!res.ok) {
                console.error("Booking failed")
            } else {
                console.log("Booking successful")
                navigate('/')
            }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <div className="booking-wrapper">
            <div className="booking-card">
                <h1 className="booking-title">Book Event - {event.title}</h1>
                <form onSubmit={handleSubmit} className="booking-form" noValidate>
                    <div className="form-group">
                        <label>First name</label>
                        <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Street name</label>
                        <input name="streetName" type="text" value={formData.streetName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Postal Code</label>
                        <input name="postalCode" type="text" value={formData.postalCode} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input name="city" type="text" value={formData.city} onChange={handleChange} />
                    </div>
                    <button type="submit" className="booking-button">Book now</button>
                </form>
            </div>
        </div>
    )
}

export default BookingEventPage
