import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import {Link} from 'react-router-dom'


const WhatsApp = () => {
    return (
        <div className="whatsapp-button">
            <Link to='https://wa.me/+917251070111' target='_blank'><FaWhatsapp className="whatsapp-icon" /></Link>
        </div>
    )
}

export default WhatsApp