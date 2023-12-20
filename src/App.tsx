import { useStore } from '@/store'
import CodeEditor from '@/components/CodeEditor'
import { themes, fonts } from '@/config'
import { cn } from './lib/utils'
import { useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const theme = useStore((state) => state.theme)
  const padding = useStore((state) => state.padding)
  const showBackground = useStore((state) => state.showBackground)
  const fontStyle = useStore((state) => state.fontStyle)

  const editorRef = useRef(null)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    if (queryParams.size === 0) return
    const state = Object.fromEntries(queryParams)

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : '',
      autoDetectLanguage: state.autoDetectLanguage === 'true',
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    })
  }, [])

  return (
    <main className='min-h-screen bg-background text-white'>
      <Sidebar />

      <div className='flex justify-center items-center pl-80 h-screen'>
        <link
          rel='stylesheet'
          href={themes[theme].theme}
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href={fonts[fontStyle].src}
          crossOrigin='anonymous'
        />
        <div
          className={cn(
            'overflow-hidden transition-all ease-out',
            showBackground ? themes[theme].background : 'ring ring-neutral-900'
          )}
          style={{ padding }}
          ref={editorRef}
        >
          <CodeEditor />
        </div>
      </div>
    </main>
  )
}

export default App
