import React, { useState } from 'react'

const Form = () => {
    // 1. State management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // 2. Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your API submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full outline-none border focus-within:border-(--accent-color) border-gray-300 py-2 px-4 transition-colors placeholder-gray-500"
                        required
                    />
                </div>
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full outline-none border focus-within:border-(--accent-color) border-gray-300 py-2 px-4 transition-colors placeholder-gray-500"
                        required
                    />
                </div>
            </div>
            {/* Row 2: Subject */}
            <div>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full outline-none border focus-within:border-(--accent-color) border-gray-300 py-2 px-4 transition-colors placeholder-gray-500"
                    required
                />
            </div>
            {/* Row 3: Message */}
            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Messages"
                    rows="6"
                    className="w-full outline-none border focus-within:border-(--accent-color) border-gray-300 py-2 px-4 transition-colors placeholder-gray-500 resize-none"
                    required
                ></textarea>
            </div>
            {/* Submit Button */}
            <button
                type="submit"
                className="bg-[#6b363f] hover:bg-[#552b32] text-white font-bold py-3 px-8 uppercase tracking-wider transition duration-200"
            >
                Get A Quote
            </button>
        </form>
    )
}

export default Form