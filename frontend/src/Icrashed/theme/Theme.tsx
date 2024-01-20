import React from 'react'
import { config } from '../config'
// import { ThemeShape } from '../types'
import { createTheme, ThemeProvider } from '@mui/material'
import { makeTheme } from '../theme/makeTheme'
// @ts-ignore
export default function Theme({ children }) {
  const { theme, darkmode } = config
  // @ts-ignore
  const { primaryColor, secondaryColor } = theme
  const thisTheme: any = {
    primaryColor,
    secondaryColor,
  }
  const customTheme = makeTheme(
    darkmode ? 'dark' : 'light',
    thisTheme.primaryColor,
    thisTheme.secondaryColor
  )
  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>{children}</ThemeProvider>
    </>
  )
}
