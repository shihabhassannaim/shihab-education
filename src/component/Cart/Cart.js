import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const prd = props.course;
    let total = 0 ;
    for(let i = 0 ; i < prd.length ; i++){
        const integer = parseFloat(prd.course_price)
        const product = prd[i];
        total = total + integer;
    } 
    return (
        <div>
            <h2>Number of courses : {props.course.length}</h2>
                <h3>Total price : {total}</h3>
                {
                    props.course.map(course => {
                        return(
                           <div className='number-course'>
                             <p>{course.data.course_name} by <h6>{course.data.course_instructor}</h6></p>
                             <span>Price : {course.data.course_price}</span>
                            <br />
                           </div>
                        )
                    })
            }
            </div>
    );
};

export default Cart;