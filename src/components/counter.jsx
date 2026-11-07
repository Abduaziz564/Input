import React, { useState } from 'react'

const Counter = () => {
  const [count, setBoshish] = useState(0)

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Counter
      </h2>

      <div className="flex items-center justify-center gap-8">

        <button
          onClick={() => setBoshish(count + 2)}
          className="bg-green-500 hover:bg-green-600 text-white text-3xl font-bold w-14 h-14 rounded-xl transition hover:scale-110"
        >
          +
        </button>

        <h2 className="text-4xl font-bold text-blue-600">
          {count}
        </h2>

        <button
          onClick={() => setBoshish(count - 2)}
          className="bg-red-500 hover:bg-red-600 text-white text-3xl font-bold w-14 h-14 rounded-xl transition hover:scale-110"
        >
          -
        </button>

      </div>

      <button
        onClick={() => setBoshish(0)}
        className="mt-7 bg-gray-800 hover:bg-black text-white px-6 py-2 rounded-lg transition"
      >
        Reset
      </button>

    </div>
  )
}

export default Counter