export const Hamburger = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <div
      className="flex flex-col justify-center h-full md:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
      <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
      <i className="bg-slate-300 w-6 h-0.5 mx-4 my-0.5" />
    </div>
  )
}
