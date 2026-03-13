import { useState, useEffect } from 'react'
import './App.css'
import { ModulaSDK, type SDUIComponent, SDUIRenderer } from 'react-web-sdui'

function App() {
  const [components, setComponents] = useState<SDUIComponent[]>([])
  const [platformName, setPlatformName] = useState('')

  useEffect(() => {
    // Show platform name from SDK
    setPlatformName(ModulaSDK.getPlatformName())

    // Load mock data from our SDK
    const mockComponents = ModulaSDK.getMockComponents()
    setComponents(mockComponents)
  }, [])

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', color: '#000' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Modula SDUI</h1>
        <p style={{ color: '#666', margin: '4px 0 0 0' }}>Rendered natively on {platformName}</p>
      </header>

      <main>
        {components.length > 0 ? (
          <SDUIRenderer components={components} />
        ) : (
          <div style={{ padding: '40px', color: '#999' }}>
            Loading SDUI content...
          </div>
        )}
      </main>
    </div>
  )
}

export default App
