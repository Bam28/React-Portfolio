import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <BrowserRouter>
      <nav>
        <h1 className='name'>Luis Jimenez</h1>
          <section className='nav-list'>
            <NavLink to='' className={'navlink'}>About Me</NavLink>
            <NavLink to='portfolio' className={'navlink'}>Portfolio</NavLink>
            <NavLink to='contact' className={'navlink'}>Contact</NavLink>
            <NavLink to='resume' className={'navlink'}>Resume</NavLink>
          </section>
      </nav>
    
      <Routes>
        <Route path='' element={<AboutMe />} />
        <Route path='Portfolio' element={<Portfolio />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>

  )
};