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
  backgroundBlur: boolean
  language: string
  autoDetectLanguage: boolean
  fontSize: number
  showTitleBar: boolean
  showTraficLights: boolean
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
      backgroundBlur: true,
      showTitleBar: true,
      showTraficLights: true,
      language: 'plaintext',
      autoDetectLanguage: false,
      fontSize: 18,
      fontStyle: 'jetBrainsMono',
      padding: 24,
    }),
    {
      name: 'user-preferences',
    }
  )
)
export default useStore
