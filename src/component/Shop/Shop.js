import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const addEvent = props.addEvent;
    return (
        <div className='shop-main'>
            <div className='course-name'>
                <h4>COURSE NAME : {props.data.course_name} by "{props.data.course_instructor}"</h4>
                <h6>DESCRIPTION : {props.data.course_description}</h6>
            </div>
            <div className='course-details'>
                <h3>COURSE DETAILS</h3>
                <h5>COURSE DURATION : {props.data.course_duration} month .</h5>
                <h5>LANGUAGE : {props.data.course_language} .</h5>
                <h5>PRICE : {props.data.course_price} $ .</h5>
                <button className='button' onClick={() => addEvent(props)}>ENROLE NOW</button>
            </div>
        </div>
    );
};

export default Shop;