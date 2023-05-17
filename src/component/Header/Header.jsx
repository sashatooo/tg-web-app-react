import React from 'react'
import { useTelegram } from "../../hooks/useTelegram.js"
import Button from "../Button/Button.jsx"
import './Header.css'



const Header = (props) => {

    const { user, onClose } = useTelegram()



    return (
        <div className={'header'}>
            <Button onClick={ onClose }>Close</Button>
            <span className={'username'}>
                { user?.username }
            </span>
        </div>
    )
}

export default Header