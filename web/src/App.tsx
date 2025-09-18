import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchMessage = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      setMessage('Failed to connect to API')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          React + FastAPI Monorepo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>
                React with Vite, TypeScript, Tailwind CSS, and shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Vite for fast development</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ Tailwind CSS for styling</li>
                <li>✅ shadcn/ui components</li>
                <li>✅ ESLint for code quality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>
                FastAPI with Python for modern API development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ FastAPI framework</li>
                <li>✅ Automatic API documentation</li>
                <li>✅ Type hints</li>
                <li>✅ Hot reload development</li>
                <li>✅ CORS enabled</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>API Connection Test</CardTitle>
            <CardDescription>
              Testing the connection between frontend and backend
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-mono">
                {loading ? 'Loading...' : message || 'No message yet'}
              </p>
            </div>
            <Button onClick={fetchMessage} disabled={loading}>
              {loading ? 'Fetching...' : 'Fetch Message from API'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App