import React, {useState, useEffect} from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../utils/myButton';

const Discount = () => {
    const [start, setStart] = useState(0);
    const percentage = () => {
        if(start < 30){
            setStart(prevCount => prevCount + 1);
        }
    }

    useEffect(() => {
        if(start > 0 && start < 30){
            setTimeout(() => {
                setStart(prevCount => prevCount + 1);
            }, 30)
        }
    }, [start]);

    return(
        <div className='center_wrapper'>
            <div className='discount_wrapper'>
                <Fade onVisibilityChange={(inView) => {
                    if(inView){
                        percentage()
                    }
                }}>
                    <div className='discount_porcentage'>
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className='discount_description'>
                        <h3>Purces tucjet vefire 20th june</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries</p>
                        <MyButton 
                        link='https://google.com/'
                        size='small'
                        text='Purchase tickets'
                        iconTicket={true}
                        style={{
                            background: '#ffa800',
                            color: '#fff'
                        }}/>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;