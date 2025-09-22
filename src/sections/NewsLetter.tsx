import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        // for processing and storage.  This is a placeholder.
        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage('Thank you for subscribing!');
            setEmail(''); // Clear the form
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setMessage('There was an error subscribing. Please try again.');
        }
    };

    return (
        <div className="newsletter-section">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay up to date with our latest news and updates!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewsLetter;