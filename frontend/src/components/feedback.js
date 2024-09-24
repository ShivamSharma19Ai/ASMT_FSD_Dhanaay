import React, { useState, useEffect } from 'react';
import "../styles/feedback.css";

const Feedback = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log('Error fetching products:', error));
    }, []);

    const submitFeedback = (e) => {
        e.preventDefault();

        const feedback = { product: selectedProduct, rating, comment };

        fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => {
                if (response.ok) {
                    setMessage('Feedback submitted successfully');
                    setSelectedProduct('');
                    setRating(0);
                    setComment('');
                } else {
                    setMessage('Error submitting feedback');
                }
            })
            .catch((error) => setMessage('Error: ' + error));
    };

    return (
        <div className='Feedback-form-div'>
            <h2 className='Feedback-form-heading'>Submit Feedback</h2>
            <form onSubmit={submitFeedback} className='Feedback-form'>
                <label>
                    Product:
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name}
                            </option>
                          ))}
                    </select>
                </label>
                <label>
                    Rating:
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" />
                </label>
                <label>
                    Comment:
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
            <p className='Feedback-message'>{message}</p>
        </div>
    );
};

export default Feedback;
