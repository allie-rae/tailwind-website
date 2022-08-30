import { useRef, useState } from 'react'
import { ContactForm } from './ContactForm'
import { FakeLink } from './FakeLink'
import { Hamburger } from './Hamburger'
import { handleScroll } from './handleScroll'
import JTPLogo from './JTP_logo.png'
import { Jumbotron } from './Jumbotron'

export const App = () => {
  const homeRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const galleryRef = useRef()
  const contactRef = useRef()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = [
    { name: 'About', refr: aboutRef },
    { name: 'Services', refr: servicesRef },
    { name: 'Gallery', refr: galleryRef },
    { name: 'Contact', refr: contactRef }
  ]
  const linksJsx = links.map(link => {
    return (
      <FakeLink
        name={link.name}
        refr={link.refr}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    )
  })

  return (
    <div>
      {/* mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? '' : 'hidden'
        } z-50 flex flex-col justify-center fixed top-0 left-0 right-0 bottom-0 bg-slate-900/90 backdrop-blur-sm`}
      >
        {linksJsx}
      </div>
      {/* nav bar  */}
      <div className="sticky top-0 left-0 z-50 bg-blend-normal shadow-md bg-slate-900/75 text-slate-300 h-14 flex items-center justify-between backdrop-blur-sm border-b border-slate-50/[0.06]">
        {/* small nav logo  */}
        <img
          src={JTPLogo}
          alt="Jon The Builder Logo"
          className="h-14 opacity-95"
          ref={homeRef}
          onClick={e => handleScroll(e, homeRef)}
        />
        {/* desktop menu  */}
        <div className="h-full hidden md:flex">{linksJsx}</div>
        <Hamburger
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
      <Jumbotron />
      <ContactForm refr={contactRef} />
    </div>
  )
}

export default App
