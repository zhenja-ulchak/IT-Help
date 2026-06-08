

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqItems = [
  {
    question: 'Які IT-послуги ви надаєте?',
    answer: 'Ми займаємося налаштуванням та обслуговуванням комп’ютерів, ноутбуків, серверів, локальних мереж, Wi-Fi, NAS-сховищ, резервного копіювання даних, а також надаємо віддалену технічну підтримку для бізнесу та приватних клієнтів.'
  },
  {
    question: 'Чи працюєте ви з малим бізнесом?',
    answer: 'Так. Ми обслуговуємо офіси, магазини, кафе, виробничі підприємства та інші організації, яким потрібна стабільна робота IT-інфраструктури без утримання штатного системного адміністратора.'
  },
  {
    question: 'Чи можливий виїзд до клієнта?',
    answer: 'Так, ми здійснюємо виїзд по Ужгороду та Закарпатській області. Для багатьох задач також доступна віддалена підтримка, що дозволяє швидше вирішити проблему.'
  },
  {
    question: 'Чи можна отримати допомогу віддалено?',
    answer: 'Так. Більшість проблем із програмним забезпеченням, мережами, серверами та налаштуванням користувачів можна вирішити дистанційно через захищене підключення.'
  },
  {
    question: 'Чи налаштовуєте Linux сервери?',
    answer: 'Так. Ми встановлюємо та адмініструємо Linux сервери, налаштовуємо файлові сервіси, VPN, веб-сервери, резервне копіювання та системи моніторингу.'
  },
  {
    question: 'Що таке NAS і навіщо він потрібен?',
    answer: 'NAS — це мережеве сховище даних для централізованого зберігання файлів та резервних копій. Воно дозволяє захистити важливі документи компанії та забезпечує швидкий доступ до них з різних пристроїв.'
  },
  {
    question: 'Чи займаєтесь резервним копіюванням даних?',
    answer: 'Так. Ми налаштовуємо автоматичне резервне копіювання на NAS, зовнішні носії або хмарні сервіси, що дозволяє мінімізувати ризик втрати важливої інформації.'
  },
  {
    question: 'Скільки коштують ваші послуги?',
    answer: 'Вартість залежить від складності завдання. Разові роботи оцінюються індивідуально, а для бізнесу доступне абонентське обслуговування з фіксованою щомісячною оплатою.'
  },
  {
    question: 'Чи працюєте офіційно?',
    answer: 'Так. Робота можлива через ФОП з наданням необхідних документів для юридичних осіб та підприємців.'
  },
  {
    question: 'Як швидко можна отримати допомогу?',
    answer: 'У більшості випадків ми відповідаємо протягом дня. Термінові питання можемо розпочати вирішувати одразу після звернення.'
  },
]


export default function FAQ() {
  return (
    <Container sx={{ py: 10 }}  id="faq">
      <Typography variant="h4" align="center" mb={6} sx={{ fontWeight: 700 }}>
        Питання та відповіді
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: 'all 0.3s',
              '&:hover': { boxShadow: 6, transform: 'scale(1.02)' },
              overflow: 'hidden',
              bgcolor: 'background.paper',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ fontSize: 30 }} />}
              sx={{
                minHeight: 70,
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                },
          
                px: 3,
                py: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, py: 2 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  )
}
