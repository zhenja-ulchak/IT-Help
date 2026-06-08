'use client'

import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'

export default function Header({ toggleTheme }: { toggleTheme?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isSmall = useMediaQuery('(max-width:1300px)') // кастомний брейкпоінт 1300px

  const menuItems = [
    { text: 'Послуги', href: '#benefits' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Контакти', href: '#contact' },
  ]

  return (
    <>
      <AppBar position="sticky" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        
        <Toolbar sx={{ position: 'relative', minHeight: { xs: 60, sm: 65, md: 70 }, flexWrap: 'wrap' }}>
          {/* Логотип */}
          {/* <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mr: { xs: 1, sm: 2, md: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.3rem', xl: '1.4rem' },
            }}
          >

          </Typography> */}
                 <Box
            component="img"
            src="/U.png"
            alt="Logo"
            sx={{
              height: { xs: 30, sm: 35, md: 40, lg: 45, xl: 50 },
              mr: { xs: 1, sm: 2, md: 3 },
            }}
          >

            
           </Box>

            
          {/* Меню по центру - десктоп, сховане при <=1300 */}
          {!isSmall && (
            <Box
              sx={{
                display: 'flex',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                gap: { xs: 1, sm: 2, md: 3, lg: 3, xl: 4 },
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  href={item.href}
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.05rem', xl: '1.1rem' },
                    textTransform: 'none',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Бургер-меню для мобільних <=1300px */}
          {isSmall && (
            <IconButton sx={{ ml: 'auto' }} aria-label="menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: '#fff', fontSize: { xs: 20, sm: 22, md: 24 } }} />
            </IconButton>
          )}

          {/* Контакти та соцмережі */}
          <Stack
            direction="row"
            spacing={{ xs: 0.5, sm: 1, md: 1.5 }}
            alignItems="center"
            sx={{
              ml: { xs: 0, md: 'auto' },
              mt: { xs: 0, md: 0 },
            }}
          >
            <IconButton onClick={toggleTheme} sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}>
              <LightModeIcon />
            </IconButton>

            {!isSmall && (
              <>
                <IconButton
                  aria-label="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                  sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="WhatsApp"
                  href="https://wa.me/380668405501"
                  target="_blank"
                  sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
                >
                  <WhatsAppIcon />
                </IconButton>

                <Button
                  color="inherit"
                
                  startIcon={<LocalPhoneIcon />}
                  sx={{
                    textTransform: 'none',
                    fontSize: { sm: '0.9rem', md: '1rem', lg: '1.05rem' },
                  }}
                >
                 +380668405501
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer для мобільного меню */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <IconButton
            aria-label="Facebook"
            href="https://facebook.com"
            target="_blank"
            sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="WhatsApp"
            href="https://wa.me/380668405501"
            target="_blank"
            sx={{ color: '#fff', fontSize: { xs: 18, sm: 20 } }}
          >
            <WhatsAppIcon />
          </IconButton>

          

        </Box>
        <Button
            color="inherit"
            href="tel:+380668405501"
            startIcon={<LocalPhoneIcon />}
            sx={{
              textTransform: 'none',
              fontSize: { sm: '0.9rem', md: '1rem', lg: '1.05rem' },
            }}
          >
            +38 066 840 55 01
          </Button>
      </Drawer>
    </>
  )
}
