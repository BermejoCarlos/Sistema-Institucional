import React from 'react'

export default function H2({ category, title }) {
    return (
        <div className="w-11/12 bg-white p-10 rounded-xl">
            <span className="text-xl text-gray-400 font-medium">{category}</span>
            <h2 className="text-2xl text-blue-500 tracking-tight">{title}</h2>
        </div>
    )
}
