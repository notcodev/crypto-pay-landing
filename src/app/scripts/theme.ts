export const themeScript = `document.documentElement.dataset.theme = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches
  ? 'dark'
  : 'light'
`
