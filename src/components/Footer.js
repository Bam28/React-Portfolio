import githubImage from '../assets/images/GitHub-Mark-64px.png'
import linkedInImage from '../assets/images/LI-In-Bug.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <li><a href="https://github.com/Bam28" target='_blank' rel="noopener noreferrer"><img src={githubImage} alt='Github'/></a></li>
        <li><a href="https://www.linkedin.com/in/luis-jimenez-092281244/" target='_blank' rel="noopener noreferrer"><img src={linkedInImage} alt='LinkedIn'/></a></li>
      </ul>
    </footer>
  )
};