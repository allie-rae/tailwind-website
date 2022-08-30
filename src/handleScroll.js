export const handleScroll = (event, refr, setIsMobileMenuOpen) => {
  event.preventDefault()
  window.scrollTo({
    top: refr.current?.offsetTop,
    left: 0,
    behavior: 'smooth'
  })
  setIsMobileMenuOpen(false)
}
