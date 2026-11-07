import React, { useState } from 'react'

function Input() {
  const [input, setInput] = useState('')

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Input Example
      </h2>

      <input
        type="text"
        placeholder="Input ichiga narsa yozing..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />

      <div className="mt-5 bg-blue-50 p-4 rounded-xl">
        <h2 className="text-lg font-semibold text-blue-700">
          Siz yozdingiz:
        </h2>

        <p className="text-gray-700 mt-2 break-words">
          {input || 'Hozircha hech narsa yozilmadi...'}
        </p>
      </div>
    </div>
  )
}

export default Input