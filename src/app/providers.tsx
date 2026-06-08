'use client'

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'
import { useState, ReactNode, useMemo } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  // Функція для перемикання теми
  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Тема Material UI
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#8b6825be' },
          secondary: { main: '#8b6825be' },
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Передаємо toggleTheme через пропси */}
      {children && React.Children.map(children, child =>
        React.isValidElement(child)
        // @ts-ignore
          ? React.cloneElement(child, { toggleTheme })
          : child
      )}
    </ThemeProvider>
  )
}
