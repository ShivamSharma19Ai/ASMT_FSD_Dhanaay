import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to={"/"}>Feedback Form</Link></li>
                <li><Link to={"/history"}>Submission History</Link></li>
                <li><Link to={"/productfeedback"}>Product Feedback</Link></li>
                <li><Link to={"/averagerating"}>Average Rating</Link></li>
            </ul>
        </div>
    )
}

export default Nav;