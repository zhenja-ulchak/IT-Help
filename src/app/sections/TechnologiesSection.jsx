
'use client'

import { Box, Typography } from '@mui/material'
import {
  SiNextdotjs,
  SiNestjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiWordpress,
  SiWoocommerce,
  SiDocker,
  SiNginx,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiCloudflare,
  SiGit,
} from 'react-icons/si'

const technologies = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiNestjs, name: 'NestJS' },
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiWordpress, name: 'WordPress' },
  { icon: SiWoocommerce, name: 'WooCommerce' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiNginx, name: 'Nginx' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiLinux, name: 'Linux' },
  { icon: SiCloudflare, name: 'Cloudflare' },
  { icon: SiGit, name: 'Git' },
]

export default function TechnologiesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight={800}
        sx={{
          mb: 2,
          color: '#fff',
          fontSize: {
            xs: '1.8rem',
            md: '3rem',
          },
        }}
      >
        Розробка та підтримка сайтів
      </Typography>

      <Typography
        align="center"
        sx={{
          color: '#c8a46b',
          maxWidth: 900,
          mx: 'auto',
          mb: 8,
          px: 2,
        }}
      >
        Створюємо сучасні сайти, інтернет-магазини та веб-додатки.
        Забезпечуємо технічну підтримку, оновлення, резервне копіювання,
        оптимізацію та захист веб-проєктів.
      </Typography>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Box
          className="slider-track"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: 'max-content',
            animation: 'scroll 30s linear infinite',

            '@keyframes scroll': {
              from: {
                transform: 'translateX(0)',
              },
              to: {
                transform: 'translateX(-50%)',
              },
            },
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon

            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: 120,
                }}
              >
                <Icon size={60} color="#c8a46b" />

                <Typography
                  sx={{
                    mt: 1,
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
          px: 2,
        }}
      >
        {[
          'Створення сайтів',
          'Інтернет-магазини',
          'Підтримка сайтів',
          'SEO-оптимізація',
          'Хостинг',
          'Захист даних',
          'Резервне копіювання',
          'Адміністрування серверів',
        ].map((item) => (
          <Box
            key={item}
            sx={{
              px: 3,
              py: 1,
              border: '1px solid #c8a46b',
              borderRadius: '30px',
              color: '#fff',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

