import React from "react";
import globe from '../img/globe.png'

export default function Header() {
    return (
        <header>
            <img src={globe} alt="" />
            <span>my travel journal</span>
        </header>
    )
}