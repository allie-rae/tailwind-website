import JonTheBuilderLogo from './white_logo.png'

export const Jumbotron = () => {
  const mailInstructions =
    "mailto:jon@jonthebuilderllc.com?subject=Free Quote&body=Hi Jon,%0D%0A%0D%0AI'm interested in getting a free quote."

  return (
    <div className="w-full h-screen -mt-14 bg-[url('wood_planks.jpg')]">
      <div className="w-full h-screen -mt-14 text-white flex flex-col items-center justify-center bg-slate-900/75">
        <img
          src={JonTheBuilderLogo}
          alt="Jon The Builder Logo"
          className="w-full pb-3 pl-1 pr-1 md:p-0 md:w-3/6 md:-mt-2"
        />
        <button
          onClick={e => (window.location.href = mailInstructions)}
          className="bg-red-700 hover:bg-red-600 uppercase text-lg font-semibold tracking-widest py-4 px-8 rounded transition duration-300 hover:scale-110 ease-out"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  )
}
