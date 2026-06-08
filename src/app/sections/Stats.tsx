'use client'

import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')) // <600px
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))

const stats = [
  {
    number: 5,
    suffix: '+',
    label: 'Років досвіду в IT',
  },
  {
    number: 10,
    suffix: '+',
    label: 'Технологій та сервісів',

  },
  {
    number: 100,
    suffix: '%',
    label: 'Індивідуальний підхід',
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Віддалена підтримка',
  },
]

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '200px',
               background: 'radial-gradient(circle at top, #2d258bbe, #031622c2)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        py: isSmallScreen ? 8 : 12,
        px: 2,
      }}
    >
      <Grid container spacing={isSmallScreen ? 4 : 10} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid
     
            key={index}
          
            textAlign="center"
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : '4rem',
              }}
            >
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  suffix={stat.suffix}
                  //@ts-ignore
                  
                />
              ) : (
                0
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: isSmallScreen ? '1rem' : '1.2rem',
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
