

import { Container, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import GavelIcon from '@mui/icons-material/Gavel'
import BalanceIcon from '@mui/icons-material/Balance'
import DescriptionIcon from '@mui/icons-material/Description'
import SecurityIcon from '@mui/icons-material/Security'
import VerifiedIcon from '@mui/icons-material/Verified'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const benefits = [
  {
    icon: <GavelIcon sx={{ fontSize: 60, color: '#6d4c41' }} />,
    title: 'Швидкий виїзд',
    description: 'Оперативне вирішення IT-проблем в офісі або на об’єкті клієнта.',
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 60, color: '#6d4c41' }} />,
    title: 'Мережі та Wi-Fi',
    description: 'Налаштування роутерів, локальних мереж, VPN та бездротових систем.',
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 60, color: '#6d4c41' }} />,
    title: 'Серверні рішення',
    description: 'Встановлення та адміністрування Linux і Windows серверів.',
  },
]

const benefits2 = [
  {
    icon: <SecurityIcon sx={{ fontSize: 80, color: '#6d4c41' }} />,
    title: 'Захист даних',
    description: 'Резервне копіювання, NAS-системи та відновлення важливої інформації.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 80, color: '#6d4c41' }} />,
    title: 'Надійність',
    description: 'Стабільна робота техніки та профілактика можливих збоїв.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 80, color: '#6d4c41' }} />,
    title: 'Постійна підтримка',
    description: 'Віддалена та виїзна технічна підтримка для дому та бізнесу.',
  },
]

export default function Benefits() {
  return (
    <>

      <Typography
        variant="h3"
        fontWeight={900}
        align="center"
        id="benefits"
        sx={{
          fontSize: {
            xs: '1.5rem', // маленькі телефони
            sm: '2rem',   // телефони
            md: '2.5rem', // планшети
            lg: '3rem',   // ноутбуки
            xl: '3.5rem', // великі екрани
          },
          mt: {
            xs: 4,  // 4*8px = 32px
            sm: 5,  // 40px
            md: 6,  // 48px
            lg: 8,  // 64px
            xl: 10, // 80px
          },
          mb: {
            xs: 4,  // 32px
            sm: 5,  // 40px
            md: 6,  // 48px
            lg: 8,  // 64px
            xl: 10, // 80px
          },
        }}
      >
       Чому обирають нас
      </Typography>


      <Grid container spacing={4} justifyContent="center">
        {benefits.map((item, index) => (
          //@ts-ignore
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: 3,
                border: '1px solid #d7ccc8',
                minHeight: 220,
                minWidth: "300px",
                width: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6,
                  borderColor: '#6d4c41',
                },
              }}

            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {benefits2.map((item, index) => (
          //@ts-ignore
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: 3,
                border: '1px solid #d7ccc8',
                minHeight: 220,
                minWidth: "300px",
                width: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6,
                  borderColor: '#6d4c41',
                },
              }}

            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </>
  )
}
