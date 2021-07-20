import React from 'react';
import MyButton from '../utils/myButton';
import { Zoom } from 'react-awesome-reveal';

const Pricing = () => {
    const priceState = {
        prices: [100, 150, 200],
        position: ['Balcony', 'Medium', 'Star'],
        description: [
            'By default, the terminal will open at the folder that is opened in the Explorer',
            'By default, the terminal will open at the folder that is opened in the Explorer',
            'By default, the terminal will open at the folder that is opened in the Explorer'
        ],
        linkTo: ['https://google.com','https://google.com','https://google.com'],
        delay: [500, 0, 500]
    }

    const showBoxes = () => {
        return(
            priceState.prices.map((box, i) => (
                <Zoom 
                key={i} 
                className='pricing_item' 
                delay={priceState.delay[i]}>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${box}</span>
                            <span>{priceState.position[i]}</span>
                        </div>
                        <div className='pricing_description'>
                            {priceState.description[i]}
                        </div>
                        <div className='pricing_button'>
                            <MyButton
                                text='Purchase'
                                style={{
                                    background: '#8e8e8e',
                                    color: '#fff'
                                }}
                                linkto={priceState.prices[i]}
                            />
                        </div>
                    </div>
                </Zoom>
            ))
        )
    }

    return(
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>
                <div className='pricing_wrapper'>
                    { showBoxes() }
                </div>
            </div>
        </div>
    )
}

export default Pricing;