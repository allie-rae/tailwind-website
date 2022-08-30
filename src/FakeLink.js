import { handleScroll } from './handleScroll'

export const FakeLink = ({
  name,
  refr,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const FAKE_LINK_STYLES = isMobileMenuOpen
    ? 'flex justify-center text-slate-300 text-lg m-6 font-medium'
    : 'pl-6 pr-6 flex items-center h-full transition duration-300 ease-out hover:text-slate-100 hover:bg-slate-300/10 font-medium'
  return (
    <div
      className={FAKE_LINK_STYLES}
      onClick={event => handleScroll(event, refr, setIsMobileMenuOpen)}
    >
      {name}
    </div>
  )
}
