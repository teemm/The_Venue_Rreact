import React from 'react';

const Location = () => {
    return(
        <div className='locaation_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.136096887863!2d44.78282485047135!3d41.71758198332214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d4fa5b02d7%3A0xced15c2c7992ceb5!2sGeoLab!5e0!3m2!1sen!2sge!4v1544182328441" 
            width="100%" 
            height="500px"
            title="title_google_map"
            allowFullScreen></iframe>

            {/* <div className='location_tag'>Location</div> */}
        </div>
    )
}

export default Location;