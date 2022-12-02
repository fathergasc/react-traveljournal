import React from "react";
import mark from '../img/mark.png'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-left">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="card-right">
                <div className="location-wrap">
                    <img className="mark-icon" src={mark} alt="" />
                    <span className="location">{props.location}</span>
                    <a className="maps-coordinates" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="title">
                    {props.title}
                </div>
                <div className="dates">
                    {props.startDate} - {props.endDate}
                </div>
                <p className="journal-entry">
                    {props.description}
                </p>
            </div>
        </div>
    )
}