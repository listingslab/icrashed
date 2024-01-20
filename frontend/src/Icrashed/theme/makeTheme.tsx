import { PaletteMode } from '@mui/material'

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string
) {
  return {
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? primary : secondary,
      },
      secondary: {
        main: mode === 'light' ? secondary : primary,
      },
      background: {
        default: mode === 'light' ? primary : secondary,
        paper: mode === 'light' ? 'white' : secondary,
      },
    },
  }
}
