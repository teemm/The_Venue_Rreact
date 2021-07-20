import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import icon_calendar from  '../../resources/images/icons/calendar.png';
import icon_location from  '../../resources/images/icons/location.png'

const VenueNFo = () => {
    return (
        <div className='bck_black'>
           <div className='center_wrapper'>
               <div className='vn_wrapper'>
                    <Zoom className='vn_item' triggerOnce>
                        <div>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'></div>
                                    <div className='vn_icon' 
                                    style={{backgroundImage: `url(${icon_calendar})`}}></div>
                                    <div className='vn_title'>event Date & Time</div>
                                    <div className='vn_desc'> Now 10 @ 01:20:00 PM </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom className='vn_item' triggerOnce>
                        <div>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'></div>
                                    <div className='vn_icon' 
                                    style={{backgroundImage: `url(${icon_location})`}}></div>
                                    <div className='vn_title'>Event Location</div>
                                    <div className='vn_desc'>O.Lortkhipanidze str. 2D</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
               </div>
           </div>
        </div>
    )
}

export default VenueNFo;