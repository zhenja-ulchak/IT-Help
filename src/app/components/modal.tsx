'use client';
import { Box, Stack, Typography, Link, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Facebook, Instagram, Telegram, WhatsApp, Email, Language, Phone } from '@mui/icons-material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));  // <600px
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-900px

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          backgroundColor: '#2d258bbe',
          color: '#ffffff',
          px: isXs ? 4 : isSm ? 6 : 12,
          py: isXs ? 1.5 : isSm ? 2 : 4,
          borderRadius: 3,
          fontWeight: 700,
          fontSize: isXs ? '1rem' : isSm ? '1.25rem' : '2rem',
          '&:hover': { backgroundColor: '#b08c55' },
        }}
      >
        Отримати консультацію
      </Button>

      <Dialog
        fullScreen={fullScreen}
        fullWidth
        open={open}
        maxWidth={false}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          sx: {
            width: '90%',
            maxWidth: 1200,
            margin: 'auto',
            textAlign: 'center',
            borderRadius: 3,
            px: isXs ? 2 : isSm ? 4 : 6,
            py: isXs ? 2 : isSm ? 4 : 6,
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem', fontWeight: 700 }}>
            Контакти
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Box sx={{ width: '100%' }}>
              <Stack spacing={isXs ? 1.5 : isSm ? 2.5 : 4}>
                {/* Телефон */}
                <Box display="flex" alignItems="center" gap={isXs ? 1 : isSm ? 2 : 3} flexWrap="wrap" justifyContent="center">
                  <Phone sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} color="primary" />
                  <Link href="tel:+380123456789" underline="hover" sx={{ fontSize: isXs ? '1rem' : isSm ? '1.5rem' : '2.5rem' }}>
                    +38 012 345 67 89
                  </Link>
                </Box>

                {/* Email */}
                <Box display="flex" alignItems="center" gap={isXs ? 1 : isSm ? 2 : 3} flexWrap="wrap" justifyContent="center">
                  <Email sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} color="primary" />
                  <Link href="mailto:info@example.com" underline="hover" sx={{ fontSize: isXs ? '1rem' : isSm ? '1.5rem' : '2.5rem' }}>
                    info@example.com
                  </Link>
                </Box>

                {/* Сайт */}
                <Box display="flex" alignItems="center" gap={isXs ? 1 : isSm ? 2 : 3} flexWrap="wrap" justifyContent="center">
                  <Language sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} color="primary" />
                  <Link href="https://example.com" target="_blank" rel="noopener" underline="hover" sx={{ fontSize: isXs ? '1rem' : isSm ? '1.5rem' : '2.5rem' }}>
                    example.com
                  </Link>
                </Box>

                {/* Соцмережі */}
                <Stack direction={isXs ? 'column' : 'row'} spacing={isXs ? 1 : isSm ? 2 : 3} alignItems="center" justifyContent="center">
                  <Typography sx={{ fontSize: isXs ? '1rem' : isSm ? '1.5rem' : '2.5rem' }}>Соцмережі:</Typography>
                  <Stack direction="row" spacing={isXs ? 1 : isSm ? 2 : 3} flexWrap="wrap" justifyContent="center">
                    <IconButton component="a" href="https://facebook.com/example" target="_blank" rel="noopener">
                      <Facebook sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} />
                    </IconButton>
                    <IconButton component="a" href="https://instagram.com/example" target="_blank" rel="noopener">
                      <Instagram sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} />
                    </IconButton>
                    <IconButton component="a" href="https://t.me/example" target="_blank" rel="noopener">
                      <Telegram sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} />
                    </IconButton>
                    <IconButton component="a" href="https://wa.me/380123456789" target="_blank" rel="noopener">
                      <WhatsApp sx={{ fontSize: isXs ? '1.5rem' : isSm ? '2rem' : '3rem' }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} sx={{ fontSize: isXs ? '1rem' : isSm ? '1.5rem' : '2rem', px: isXs ? 3 : isSm ? 4 : 6, py: isXs ? 1.5 : isSm ? 2 : 2.5 }}>
            Закрити
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
