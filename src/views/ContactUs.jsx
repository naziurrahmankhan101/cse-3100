import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message || !formData.phone) {
            setFormStatus('Please fill out all fields.');
            return;
        }
        setFormStatus('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div style={{ backgroundColor: '#E9F7EF', padding: '50px', borderRadius: '10px' }}>
            <div className="contact-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '2.5rem', color: '#2C3E50' }}>Let's Chat</h2>
                <p style={{ color: '#7D8799' }}>Reach out to us for any questions or assistance.</p>
            </div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-control"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #D5DDE5',
                            borderRadius: '5px',
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="form-control"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #D5DDE5',
                            borderRadius: '5px',
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        className="form-control"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #D5DDE5',
                            borderRadius: '5px',
                        }}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="form-control"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #D5DDE5',
                            borderRadius: '5px',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#2C3E50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Send Message
                </button>
            </form>
            {formStatus && (
                <p style={{ textAlign: 'center', marginTop: '20px', color: '#28A745' }}>
                    {formStatus}
                </p>
            )}
        </div>
    );
}

export default ContactUs;
