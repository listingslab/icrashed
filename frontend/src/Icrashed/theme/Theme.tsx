import React from 'react'
import { config } from '../config'
import { ThemeShape } from '../types'
import { createTheme, ThemeProvider } from '@mui/material'
import { makeTheme } from '../theme/makeTheme'

export default function Theme({ children }) {
  const { theme, darkmode } = config
  // @ts-ignore
  const { primaryColor, secondaryColor } = theme
  const thisTheme: ThemeShape = {
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
