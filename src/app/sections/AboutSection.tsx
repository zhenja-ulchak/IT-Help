import { Box, Grid, Typography } from '@mui/material'
import GavelIcon from '@mui/icons-material/Gavel'
import BalanceIcon from '@mui/icons-material/Balance'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WifiIcon from '@mui/icons-material/Wifi'
import DnsIcon from '@mui/icons-material/Dns'
import ResponsiveDialog from '../components/modal'

export default function AboutSection() {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle at top, #2d258bbe, #031622c2)',
        color: '#fff',
        py: { xs: 6, sm: 8, md: 10 },     // ⬅️ ще /2
        mt: { xs: 10, md: 14 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 0.75, md: 1 }}    // ⬅️ мінімум
        alignItems="center"
      >
        {/* LEFT — images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: 'relative', maxWidth: 620, mx: 'auto' }}>
            <Box
              component="img"
              src="/row-of-three-computer-monitors-with-coded-data-on-2026-03-24-13-04-47-utc.jpg"
              alt=""
              sx={{
                width: '100%',
                borderRadius: 1.5,
                boxShadow: '0 8px 16px rgba(0,0,0,0.45)',
              }}
            />

            <Box
              component="img"
              src="/close-up-of-businesswoman-hand-presenting-digital-2026-04-13-23-41-44-utc.jpg"
              alt="Справедливість"
              sx={{
                position: 'absolute',
                bottom: -4,
                right: -4,
                width: '58%',
                borderRadius: 1.5,
                border: '1px solid #c8a46b',
                boxShadow: '0 6px 12px rgba(0,0,0,0.55)',

              }}
            />
          </Box>
        </Grid>

        {/* RIGHT — text */}
        <Grid size={{ xs: 12, md: 6 }} sx={{
          ml: { xs: "15%", md: 0 }
          , mt: { xs: 6, md: 0 }
        }}>
          <Typography
            variant="h3"
            fontWeight={900}

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
            Надійні IT-рішення для <br /> <Box component="span" sx={{ color: '#c8a46b' }}> мереж та серверів </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 10.5, sm: 16 },
              color: '#e0e0e0',
              maxWidth: { xs: 300, md: 440 },
              mb: 5,
            }}
          >
            Ми допомагаємо компаніям та приватним клієнтам забезпечити стабільну роботу комп’ютерної техніки, мереж і серверної інфраструктури. Налаштовуємо локальні мережі, Wi-Fi, сервери, NAS-сховища та системи резервного копіювання для безперервної роботи вашого бізнесу. </Typography>

          {/* ICON FEATURES */}
          <Grid container spacing={0.75} mb={5}>
            {[{
              icon: <WifiIcon />,
              text: 'Налаштування мереж та Wi-Fi',
            },
            {
              icon: <DnsIcon />,
              text: 'Сервери та хмарні рішення',
            },].map((item, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={i}>
                <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: 1,
                      backgroundColor: '#c8a46b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a1a',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography fontWeight={500} sx={{ fontSize: { xs: 10.5, sm: 16 }, }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* LIST */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
            {['Проєктування та обслуговування локальних мереж', 'Встановлення та адміністрування Linux і Windows серверів', 'Резервне копіювання, NAS та захист даних',].map((text, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 4 }}>
                <CheckCircleIcon sx={{ color: '#c8a46b', fontSize: 14 }} />
                <Typography sx={{ color: '#e0e0e0', fontSize: { xs: 10.5, sm: 16 }, }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'left', // завжди по центру
              transform: {
                xs: 'scale(0.7)', // дуже маленькі екрани
                sm: 'scale(0.75)', // телефони середні
                md: 'scale(0.7)', // планшети і більше
              },
              transformOrigin: 'center center', // центр для масштабу
            }}
          >
            <ResponsiveDialog />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
