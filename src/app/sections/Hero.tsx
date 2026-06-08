'use client'

import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ResponsiveDialog from '../components/modal'

export default function Hero() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Box
      sx={{
        minHeight: {
          xs: '85vh',
          sm: '90vh',
          md: '100vh',
          lg: '100vh',
          xl: '100vh',
        },
        backgroundImage: 'url(first.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center', // центр по горизонталі
        alignItems: 'center',     // центр по вертикалі
        position: 'relative',
        color: 'white',
      }}
    >
      {/* overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.63)',
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            transform: animate ? 'translateX(0)' : 'translateX(-80px)',
            opacity: animate ? 1 : 0,
            transition: 'all 1s ease',
            // mt: { xs: 0, md: -120, lg: -150 },
            maxWidth: {
              xs: '100%',
              sm: 680,
              md: 840,
              lg: 960,
              xl: 1040,
            },
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center' },
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: {
                xs: 20,
                sm: 24,
                md: 32,
                lg: 36,
                xl: 40,
              },
              lineHeight: 1.2,
              fontWeight: 800,
              mb: { xs: 2, sm: 4, md: 5 },
            }}
          >
            IT-підтримка для дому та бізнесу в Ужгороді
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              
              fontSize: {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 18,
                xl: 20,
              },
              lineHeight: 1.6,
              color: '#f0f0f0',
              mb: { xs: 2, sm: 4, md: 5 },
            }}
          >
           Налаштування мереж, серверів, робочих станцій та офісної техніки. Швидке вирішення IT-проблем, профілактика збоїв та технічна підтримка для компаній і приватних клієнтів.
          </Typography>

          {/* BUTTON */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // завжди по центру
              transform: {
                xs: 'scale(0.7)', // дуже маленькі екрани
                sm: 'scale(0.75)', // телефони середні
                md: 'scale(0.8)', // планшети і більше
              },
              transformOrigin: 'center center', // центр для масштабу
            }}
          >
            <ResponsiveDialog />
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
