
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'

export default function CTA() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 12 }, // менші відступи для мобільних
        color: 'text.primary',
      }}
    >
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
        Контакти
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 6 }} // менший відступ на мобільних
        justifyContent="center"
        sx={{
          // займає всю висоту вікна
          display: 'flex',          // робимо flex-контейнер
          flexDirection: 'column',  // вертикальне розташування
          justifyContent: 'center', // центр по вертикалі
          alignItems: 'center',     // центр по горизонталі

        }}
        alignItems={{ xs: 'center', md: 'flex-start' }} // центровано на мобільних
      >
        {/* Інформація про салон */}
        <Box sx={{ width: { xs: '100%', md: 'auto' }, maxWidth: 600, textAlign: { xs: 'center', md: 'center' }, }}>

          <Typography variant="h5" mb={2} sx={{ fontWeight: 700 }}>
            IT-Підтримка "Свій ITшник"
          </Typography>



          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            м. Ужгород, Закарпатська область, 88005
          </Typography>



          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            <LocalPhoneIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            <Button
              href="tel:+380668405501"
              sx={{ textTransform: 'none', color: 'inherit', p: 0, fontSize: "22px" }}
            >
              +38 (066) 840-55-01
            </Button>
          </Typography>



          {/* <Typography variant="h5" sx={{ fontWeight: 500 }}>
            <EmailIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            
          </Typography> */}


        </Box>


        {/* Карта */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            height: 700, // фіксована висота
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 3,
            mt: { xs: 4, md: 0 }, // відступ зверху на мобільних
          }}
        >
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d554.5484332680567!2d22.293320972004604!3d48.61191493810808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1780922732673!5m2!1sru!2sua" width="1100" height="650"  loading="lazy" ></iframe>
        </Box>

      </Stack>

    </Box>
  )
}
