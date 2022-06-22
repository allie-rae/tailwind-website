import { useRef, useState } from "react";
import JTPLogo from './JTP_logo.png';
import JonTheBuilderLogo from './white_logo.png';

const handleScroll = (event, refr, setIsMobileMenuOpen) => {
  event.preventDefault();
  window.scrollTo({
    top: refr.current?.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
  setIsMobileMenuOpen(false);
}

export const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
        <div className={`${isMobileMenuOpen ? "" : "hidden"} flex flex-col justify-center fixed top-0 left-0 right-0 bottom-0 bg-slate-900/90 backdrop-blur-sm`}>
          <FakeLink name="About" refr={aboutRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Services" refr={servicesRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Gallery" refr={galleryRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Contact" refr={contactRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      <div className="sticky top-0 left-0 bg-blend-normal shadow-md bg-slate-900/75 text-slate-300 h-14 flex items-center justify-between backdrop-blur-sm border-b border-slate-50/[0.06]">
        <img src={JTPLogo} className="h-14 opacity-95" ref={homeRef} onClick={(e) => handleScroll(e, homeRef)} />
        <div className="h-full hidden md:flex">
          <FakeLink name="About" refr={aboutRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Services" refr={servicesRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Gallery" refr={galleryRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <FakeLink name="Contact" refr={contactRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
        <div className="flex flex-col justify-center h-full md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
          <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
          <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
        </div>
      </div>
      <div className="w-full h-screen -mt-14 bg-[url('wood_planks.jpg')]">
        <div className="w-full h-screen -mt-14 text-white flex flex-col items-center justify-center bg-slate-900/75">
          <img src={JonTheBuilderLogo} className="w-full pb-3 pl-1 pr-1 md:p-0 md:w-3/6 md:-mt-24" />
          <button className="bg-red-700 hover:bg-red-600 uppercase text-lg font-semibold tracking-widest py-4 px-8 rounded transition duration-300 hover:scale-110 ease-out">
            Get a Free Quote
          </button>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export const FakeLink = ({ name, refr, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const FAKE_LINK_STYLES = isMobileMenuOpen 
    ? "flex justify-center text-slate-300 text-lg m-6 font-medium" 
    : "pl-6 pr-6 flex items-center h-full transition duration-300 ease-out hover:text-slate-100 hover:bg-slate-300/10 font-medium";
  return (
    <div className={FAKE_LINK_STYLES} onClick={(event) => handleScroll(event, refr, setIsMobileMenuOpen)}>
      {name}
    </div>
  )
}

export default App;
