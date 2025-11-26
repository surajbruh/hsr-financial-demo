import React from 'react'
import { Quote } from 'lucide-react'

const QuoteBlock = ({ quote, name, designation }) => {
    return (
        <div className="flex gap-4 md:gap-6 p-2">
            <div className="aspect-square p-4 bg-(--accent-color) flex items-center justify-center rounded-lg">
                <Quote size={24} />
            </div>

            <div>
                <blockquote className="font-medium text-sm md:text-xl mb-3">
                    {quote}
                </blockquote>

                <div className="leading-tight">
                    <h6 className="font-semibold text-lg md:text-xl">{name}</h6>
                    <label className="text-sm md:text-base">{designation}</label>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock
