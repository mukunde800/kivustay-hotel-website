function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Hello, Tailwind! 👋
        </h1>
        <p className="text-slate-600 mb-6">
          React + Tailwind CSS v4 is up and running.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App