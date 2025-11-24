import React from 'react'
import QuoteBlock from './QuoteBlock'
import config from "../config/index.json"

const Testimonials = () => {
    return (
        <div className="relative z-50 px-4 bg-[url('/meeting.jpg')] bg-cover bg-center py-10">
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-50 max-w-[90vw] lg:w-[70vw] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8">

                {/* Text Section */}
                <div className="flex-1 text-white">
                    <div className="mb-4">
                        <h3 className="uppercase font-medium text-sm md:text-base">Testimonials</h3>
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug">
                            Don’t Belive Us, Check Our Client Feedback
                        </h1>
                    </div>

                    {/* Quote Block */}
                    {/* TODO: FIX THE CAROUSEL */}
                    {
                        config.quotes.map((quoteItem, index) => (
                            <QuoteBlock
                                key={index}
                                quote={quoteItem.quote}
                                name={quoteItem.name}
                                designation={quoteItem.designation}
                            />
                        ))
                    }
                </div>

                {/* Image */}
                <div className="hidden lg:block w-[40%] aspect-square overflow-hidden shadow-md bg-[url('/person.png')] bg-contain bg-center">
                </div>

            </div>
        </div>
    )
}

export default Testimonials
