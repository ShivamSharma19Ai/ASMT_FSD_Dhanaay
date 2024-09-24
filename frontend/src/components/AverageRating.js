import React, { useState } from 'react';

const AverageRating = () => {
    const [productId, setProductId] = useState('');
    const [averageRating, setAverageRating] = useState(null);

    const fetchAverageRating = () => {
        fetch(`http://localhost:5000/api/feedback/average/${productId}`)
            .then((response) => response.json())
            .then((data) => setAverageRating(data.averageRating))
            .catch((error) => console.log('Error fetching average rating:', error));
    };

    return (
        <div>
            <h2>Average Rating for Product</h2>
            <input 
                type="text" 
                placeholder="Enter Product ID" 
                value={productId}
                onChange={(e) => setProductId(e.target.value)} 
            />
            <button onClick={fetchAverageRating}>Get Average Rating</button>
            {averageRating !== null && (
                <p>Average Rating: {averageRating.toFixed(2)}</p>
            )}
        </div>
    );
};

export default AverageRating;
