import React from 'react'
import Counter from './components/counter'
import Input from './components/Input'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

      <nav className="bg-gray-900 text-white py-5 shadow-lg">
        <h1 className="text-3xl font-bold text-center">
          React Practice 🚀
        </h1>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">

        <Counter />

        <Input />

      </div>

    </div>
  )
}

export default App