import React from 'react';
import Form from './Form';

const ContactSection = () => {

    return (
        <div className="flex items-center justify-center p-4">
            <div className="bg-white shadow-xl overflow-hidden w-full max-w-6xl flex flex-col md:flex-row">
                {/* Left Side: Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Office Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                {/* Right Side: Form Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 relative">
                    <h2 className="capitalize text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;