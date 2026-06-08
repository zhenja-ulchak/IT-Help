

import { Box, Typography, Grid, Paper } from '@mui/material'

const pricingOptions = [
  { title: 'Стрижка чоловіча', price: '$20', description: 'Класична та модна стрижка.' },
  { title: 'Стрижка жіноча', price: '$35', description: 'Індивідуальний підхід до стилю.' },
  { title: 'Дитяча стрижка', price: '$15', description: 'Весела та безпечна стрижка для дітей.' },
  { title: 'Фарбування волосся', price: '$50', description: 'Яскраві та натуральні кольори.' },
  { title: 'Мелірування', price: '$40', description: 'Підкресліть природний колір волосся.' },
  { title: 'Стрижка + укладка', price: '$45', description: 'Повний догляд і стильна укладка.' },
]

export default function Pricing() {
  return (
    <Box
      id="pricing"
      sx={{
        py: 10,
        backgroundImage: 'url(1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <Grid container spacing={4} justifyContent="center">
        {pricingOptions.map((option, index) => (
          //@ts-ignore
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3,
                boxShadow: 3,
                minHeight: { xs: 200, sm: 220 }, // менша висота на мобільних
                width: '100%', // адаптивна ширина
                maxWidth: 400, // обмежує дуже широкі блоки
                mx: 'auto', // центруємо на мобільних
              }}
            >
              <Typography variant="h5">{option.title}</Typography>
              <Typography variant="h3" my={2}>
                {option.price}
              </Typography>
              <Typography mb={4}>{option.description}</Typography>
              {/* <Button variant="contained" size="large" href="#cta">
                Замовити
              </Button> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
