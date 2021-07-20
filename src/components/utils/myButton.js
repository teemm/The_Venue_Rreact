import React from 'react';
import { Button } from '@material-ui/core';
import ticketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) =>{
    return(
        <Button
            variant={props.variant ? props.variant : 'contained'}
            size={props.size ? props.size : 'large'}
            href={props.link}
            style={{
                background: '#8e8e8e',
                color: '#fff',
                ...props.style
            }}>

            {
            props.iconTicket ? 
            <img src={ticketIcon} className='iconImage' alt='icon_button'/>
            : null
            }
            
            {props.text}
        </Button>
    )
}

export default MyButton;