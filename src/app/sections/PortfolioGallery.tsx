'use client'

import React from 'react'
import { Box, Card, CardMedia, Typography, Container } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import Image from 'next/image'

// Дані для портфоліо
const images1 = [
  { src: '/2.jpg', height: 500 },
  { src: '/5.jpg', height: 500 },
  { src: '/4.jpg', height: 500 },
  { src: '/7.jpg', height: 500 },
]

const images2 = [
  { src: '/9.jpg', height: 500 },
  { src: '/11.jpg', height: 500 },
]

const images3 = [
  { src: '/5.jpg', height: 500 },
  { src: '/7.jpg', height: 500 },
  { src: '/11.jpg', height: 500 },
  { src: '/4.jpg', height: 500 },
  { src: '/8.jpg', height: 500 },
  { src: '/9.jpg', height: 500 },
]

const images4 = [
  { src: '/5.jpg', height: 500 },
  { src: '/7.jpg', height: 500 },
  { src: '/8.jpg', height: 500 },
  { src: '/9.jpg', height: 500 },
  // { src: '/8.jpg', height: 500 },
  // { src: '/9.jpg', height: 500 },
  // { src: '/11.jpg', height: 500 },
]

// Компонент Masonry з memo
const RenderMasonry = React.memo(
  ({ imgs, columns }: { imgs: typeof images1; columns: { xs: number; sm?: number; md?: number } }) => (
    <Masonry columns={columns} spacing={{ xs: 1, sm: 2, md: 2 }}>
      {imgs.map((img) => (
        <Card
          key={img.src} // стабільний ключ
          sx={{
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: img.height }}>
            <Image
              src={img.src}
              alt={img.src}
              fill
              style={{ objectFit: 'cover' }}
              priority={false} // lazy loading
            />
          </Box>
        </Card>
      ))}
    </Masonry>
  )
)

export default function PortfolioMasonry() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" align="center" mb={6}>
        Портфоліо
      </Typography>

      <RenderMasonry imgs={images1} columns={{ xs: 1, sm: 2, md: 4 }} />
      <Box sx={{ my: 2 }} />
      <RenderMasonry imgs={images2} columns={{ xs: 1, sm: 2, md: 2 }} />
      <Box sx={{ my: 2 }} />
      <RenderMasonry imgs={images3} columns={{ xs: 1, sm: 2, md: 3 }} />
      <Box sx={{ my: 2 }} />
      <RenderMasonry imgs={images4} columns={{ xs: 1, sm: 2, md: 4 }} />
    </Container>
  )
}
