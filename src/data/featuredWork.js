export const featuredWork = [
  {
    id: '001',
    title: 'Paint Artist Gallery',
    type: 'Website - Vintage OS Simulation',
    url: 'https://gabriel-garcia.netlify.app/',
    repo: 'https://github.com/brunellaa/paint-portfolio',
    description: [
      'Website for Gabriel García Párraga that features his work. Gabriel does car drawings with paint, the site replicates a classic operating system like windows 96.',
      'The website features drag and drop elements, screen animations like flicker and noise to resemble a vintage monitor.',
    ],
    stack: ['React (CRA)', 'styled-components', 'react-draggable'],
    picture: require('../assets/images/001.png'),
  },
  {
    id: '002',
    title: 'Game giveaway tracker',
    type: 'Website - Track PC game giveaways',
    url: 'https://game-giveaway-tracker.vercel.app/',
    repo: 'https://github.com/brunellaa/game-giveaway-tracker',
    description: [
      'Nextjs Website using the GamerPower API that tracks and sorts free game giveaways and provides links, description and search functionality',
    ],
    stack: ['Next.js', 'Chakra-UI', 'GamerPower API'],
    picture: require('../assets/images/002.png'),
  },
]
