import { codeSnippets, fonts } from '@/config'
import hljs from 'highlight.js'
import Editor from 'react-simple-code-editor'
import { useStore } from '@/store'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import flourite from 'flourite'

export default function CodeEditor() {
  const store = useStore()

  useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    useStore.setState(randomSnippet)
  }, [])

  useEffect(() => {
    if (store.autoDetectLanguage) {
      const { language } = flourite(store.code, { noUnknown: true })
      useStore.setState({
        language: language.toLowerCase() || 'plaintext',
      })
    }
  }, [store.autoDetectLanguage, store.code])

  return (
    <div className='min-w-[400px] border-2 rounded-[17px] shadow-2xl border-gray-600/40 relative'>
      <div className='absolute opacity-100 hljs inset-0 rounded-[15px]'></div>
      <header className='grid grid-cols-6 gap-3 items-center px-4 pb-2 relative'>
        <div className='flex gap-1.5'>
          <div className='rounded-full h-3 w-3 bg-gray-500/50 cursor-pointer' />
          <div className='rounded-full h-3 w-3 bg-gray-500/50 cursor-pointer' />
          <div className='rounded-full h-3 w-3 bg-gray-500/50 cursor-pointer' />
        </div>
        <div className='flex col-span-4 justify-center relative group bg-black/20 rounded-b-xl mx-4'>
          <input
            className='bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none py-2 w-full absolute'
            type='text'
            value={store.title}
            onChange={(e) => useStore.setState({ title: e.target.value })}
            spellCheck={false}
          />
          <span
            className={cn(
              'text-center text-gray-400 text-sm font-medium focus:outline-none py-2 w-full group-focus-within:invisible',
              store.title ? 'invisible' : ''
            )}
          >
            Untitled
          </span>
        </div>
      </header>
      <div className='px-4 pb-4'>
        <Editor
          value={store.code}
          onValueChange={(code) => useStore.setState({ code })}
          padding={10}
          highlight={(code) =>
            hljs.highlight(code, {
              language: store.language || 'plaintext',
            }).value
          }
          style={{
            fontFamily: fonts[store.fontStyle].name,
            fontSize: store.fontSize,
          }}
          className='editor'
          textareaId='codeArea'
        />
      </div>
    </div>
  )
}
