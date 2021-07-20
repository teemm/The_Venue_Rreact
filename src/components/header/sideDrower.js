import React from 'react';
import { Drawer, List, ListItem} from '@material-ui/core';
import {scroller} from 'react-scroll';

const SideDrawer = (props) => {
    const links = [
        {where: 'featured', value: 'To top'},
        {where: 'venueinfo', value: 'Venue NFO'},
        {where: 'highlights', value: 'Higlights'},
        {where: 'pricing', value: 'Pricing'},
        {where: 'location', value: 'Location'},
    ];

    const scrollToElement = (where) => {
        console.log(where)
        scroller.scrollTo(where, {
            duration: 1500,
            delay: 300,
            smooth: true,
            sffset: -150
        })
    }

    const renderItem = (item) => {
        return(
            <ListItem button onClick={() => scrollToElement(item.where)} key={item.where}>
                {item.value}
            </ListItem>
        )
    }

    return(
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                {links.map((item) => renderItem(item) )}
            </List>
        </Drawer>
    )

}

export default SideDrawer;