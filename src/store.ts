import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface BearState {
  code: string
  title: string
  theme:
    | 'atomOneDark'
    | 'materialDarker'
    | 'chalk'
    | 'githubDark'
    | 'monokaiSublime'
    | 'tokyoNightDark'
  showBackground: boolean
  language: string
  autoDetectLanguage: boolean
  fontSize: number
  fontStyle: string
  padding: number
}

export const useStore = create(
  persist<BearState>(
    () => ({
      code: '',
      title: '',
      theme: 'materialDarker',
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
