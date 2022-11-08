import quizMakerImg from '../assets/images/portfolio/Quiz-maker.png';
import theScrantonGamer from '../assets/images/portfolio/The-Scranton-Gamer.png';
import weatherDashboard from '../assets/images/portfolio/Weather-Dashboard.png'

export default function Portfolio() {
  return (
    <section className='portfolio-section'>
      <a href='https://bam28.github.io/Code-Quiz/' target='_blank' rel="noopener noreferrer"><img src={quizMakerImg} alt='Quiz Maker' className='portfolio-image'/></a>
      <a href='https://that-s-what-she-said.github.io/The-Scranton-Gamer/' target='_blank' rel="noopener noreferrer"><img src={theScrantonGamer} alt='The Scraton Gamer' className='portfolio-image'/></a>
      <a href='https://bam28.github.io/Weather-Dashboard/' target='_blank' rel="noopener noreferrer"><img src={weatherDashboard} alt='Weather Dashboard' className='portfolio-image'/></a>
    </section>
  )
}