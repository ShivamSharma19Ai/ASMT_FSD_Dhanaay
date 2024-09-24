
import React, { useState, useEffect } from 'react';
import "../styles/feedbackhistory.css";

const FeedbackHistory = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/feedback/history')
            .then((response) => response.json())
            .then((data) => setFeedbackList(data))
            .catch((error) => console.log('Error fetching feedback history:', error));
    }, []);

    return (
        <div className='Feedback-history-div'>
            <h2 className='feedback-history-title'>Feedback History</h2>
            <ul>
                {feedbackList.map((feedback) => (
                    <li className='feedback-history-li' key={feedback._id}>
                    Product: {feedback.product ? feedback.product.name : 'Unknown'}, Rating: {feedback.rating}, Comment: {feedback.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackHistory;
