import React from 'react'
import maplogo from './images/maplogo.png'

export default function Card(props) {
    return (
        <div>
            <div className="container">
                <div className="img-div">
                    <img src={props.imageUrl} alt="img" />
                </div>
                <div className="content">
                    <div className="first">
                        <img src={maplogo} alt="maplogo" />
                        <h3>{props.location}</h3>
                        <a href={props.googleMapsUrl}>View On Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>

                    <p><b>{props.startDate} - {props.endDate}</b></p>

                    <p className='about'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
