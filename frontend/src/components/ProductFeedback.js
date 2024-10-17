import React, { useState } from 'react';

const ProductFeedback = () => {
    const [name, setName] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedback = () => {
        fetch(`http://localhost:5000/api/feedback/product/${name}`)
            .then((response) => response.json())
            .then((data) => setFeedbackList(data))
            .catch((error) => console.log('Error fetching feedback:', error));
    };

    return (
        <div>
            <h2>Feedback for Specific Product</h2>
            <input 
                type="text" 
                placeholder="Enter Product Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={fetchFeedback}>Get Feedback</button>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback._id}>
                        Product: {feedback.name}, 
                        Rating: {feedback.rating}, 
                        Comment: {feedback.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFeedback;
