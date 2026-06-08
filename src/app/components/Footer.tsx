'use client'

import { Box, Container, Typography, IconButton, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Footer() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#1a1a1a', color: '#fff' }}>
      <Container>
        {/* Логотип і назва */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}> Свій ITшник </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          mb={4}
        >
          {/* Контакти */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography> <LocationOnIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} /> м. Ужгород, Закарпатська область, 88005 </Typography> <Typography> <LocalPhoneIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} /> +38 (066) 840-55-01 </Typography> <Typography> <EmailIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} /> info@svoitshnyk.com </Typography>
          </Box>

          {/* Соцмережі */}
          {/* <Box sx={{ textAlign: 'center' }}>
            <Typography mb={1}>Ми в соцмережах:</Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: '#fff' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: '#fff' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box> */}
        </Stack>

        {/* Права */}
<Typography variant="body2" align="center" sx={{ borderTop: '1px solid #444', pt: 2, mt: 2 }} > © {new Date().getFullYear()} Свій ITшник. IT-підтримка для дому та бізнесу. </Typography>
      </Container>
    </Box>
  )
}
