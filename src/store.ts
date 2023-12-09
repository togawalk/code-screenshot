import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    () => ({
      code: '',
      title: '',
      theme: 'oceanic',
      showBackground: true,
      language: 'plaintext',
      autoDetectLanguage: false,
      fontSize: 18,
      fontStyle: 'jetBrainsMono',
      padding: 64,
    }),
    {
      name: 'user-preferences',
    }
  )
)
export default useStore
