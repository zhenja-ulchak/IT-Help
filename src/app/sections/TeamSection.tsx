import { Box, Grid, Typography, IconButton } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';



const teamMembers = [
    {
        name: 'Серверні рішення',
        role: 'Встановлення та адміністрування Linux і Windows серверів',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
    {
        name: 'Мережі та Wi-Fi',
        role: 'Налаштування роутерів, VPN, локальних мереж та Wi-Fi систем',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    },
    {
        name: 'NAS та резервні копії',
        role: 'Захист даних, автоматичні бекапи та відновлення інформації',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    },
];


export default function TeamSection() {
    return (
        <Box sx={{ py: { xs: 8, md: 14 } }}>


            <Typography
                variant="h3"
                sx={{ color: '#fff', textAlign: 'center', fontWeight: 700, mb: 2 }}
            >
                Консультації з нашими  <Box component="span" sx={{
                    color: '#c8a46b', fontSize: {
                        xs: '2rem',   // телефони
                        sm: '2.5rem', // планшети
                        md: '3rem',   // ноутбуки
                    }
                }}>професіоналами</Box>
            </Typography>
            <Typography
                variant="h5"
                sx={{ color: '#c8a46b', display: 'block', textAlign: 'center', mb: 8 }}
            >
                Комплексні IT-рішення для бізнесу та дому
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Card sx={{ maxWidth: 545 }}>
                        <CardMedia
                            sx={{ height: 440, width: '100%' }}
                            image={`${member.img}`}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {member.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {member.role}
                            </Typography>
                        </CardContent>

                    </Card>
                ))}
            </Grid>
        </Box>
    )
}
