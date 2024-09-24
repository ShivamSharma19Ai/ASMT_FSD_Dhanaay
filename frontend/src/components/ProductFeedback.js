import React, { useState } from 'react';

const ProductFeedback = () => {
    const [productId, setProductId] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedback = () => {
        fetch(`http://localhost:5000/api/feedback/product/${productId}`)
            .then((response) => response.json())
            .then((data) => setFeedbackList(data))
            .catch((error) => console.log('Error fetching feedback:', error));
    };

    return (
        <div>
            <h2>Feedback for Specific Product</h2>
            <input 
                type="text" 
                placeholder="Enter Product ID" 
                value={productId}
                onChange={(e) => setProductId(e.target.value)} 
            />
            <button onClick={fetchFeedback}>Get Feedback</button>
            <ul>
                {feedbackList.map((feedback) => (
                    <li key={feedback._id}>
                        Product: {feedback.product ? feedback.product.name : 'Unknown'}, 
                        Rating: {feedback.rating}, 
                        Comment: {feedback.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFeedback;
