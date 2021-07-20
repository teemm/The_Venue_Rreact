import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from './sideDrower';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHederShow] = useState(false);

    const toggleDrawer = (val) => {
        setDrawerOpen(val);
    }

    const hiandleScroll = () => {
        if(window.scrollY > 0){
            setHederShow(true)
        }else{
            setHederShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hiandleScroll);
    }, [])

    return(
        <AppBar 
        position='fixed'
        style={{
            backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
            boxShadow: 'none',
            padding: '10px 10px',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Toolbar>
                <div className='header_logo'>
                   <div className='front_righteous header_logo_venue'>The Venue</div>
                   <div className='header_logo_title'>Musical Events</div>  
                </div>
            </Toolbar>

            <IconButton
            aria-label='Menu' 
            color='inherit'
            onClick={() => toggleDrawer(true)}>
                <MenuIcon/>
            </IconButton>

            <SideDrawer
                open={drawerOpen}
                onClose={(val) => toggleDrawer(val)}
            />
        </AppBar>
    )
}

export default Header;