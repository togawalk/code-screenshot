export interface Theme {
  background: string
  name: string
  theme: string
}

export const themes: Record<string, Theme> = {
  atomOneDark: {
    background: '',
    name: 'Atom One Dark',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css',
  },
  materialDarker: {
    background: '',
    name: 'Material Darker',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/material-darker.min.css',
  },
  chalk: {
    background: '',
    name: 'Chalk',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/chalk.min.css',
  },
  githubDark: {
    background: '',
    name: 'Github Dark',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css',
  },
  monokaiSublime: {
    background: '',
    name: 'Monokai Sublime',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai-sublime.min.css',
  },
  tokyoNightDark: {
    background: '',
    name: 'Tokyo Night Dark',
    theme:
      'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css',
  },
}
