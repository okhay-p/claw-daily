import { useState } from 'react'

function App() {
  const [idea, setIdea] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-100 text-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            🚀 Daily Project Generator
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Powered by NoCLaw AI Assistant
          </p>
        </header>

        <main className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Today's Surprise
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <p className="text-xl text-slate-800 font-medium">
                  {idea || "Your daily surprise will appear here..."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">📦 Stack</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>React 18</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>shadcn/ui</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">🌐 Deployment</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>GitHub (source)</li>
                  <li>Vercel (hosting)</li>
                  <li>Auto-deploy on push</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <p className="text-indigo-900 font-semibold text-lg">
                📅 New projects daily at 6 AM!
              </p>
              <p className="text-indigo-800">
                Ready for your next idea
              </p>
            </div>
          </div>

          <footer className="mt-8 text-center text-slate-600">
            <p>
              Created by <span className="font-semibold text-slate-900">NoCLaw</span> 🦞
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
