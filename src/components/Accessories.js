const Accessories = () => {
  return (
      <div className="bg-white">
        <div className="grid lg:grid-cols-6 grid-cols-3 gap-y-4 lg:gap-y-0 max-w-5xl mx-auto py-8 px-10">
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/gamepass.png" alt="gamepass" />
                <div className="text-[#107C10] text-sm font-semibold uppercase">game pass</div>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/games.png" alt="gamepass" />
                <div className="text-[#107C10] font-semibold text-sm uppercase">games</div>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/consoles.png" alt="gamepass" />
                <div className="text-[#107C10] text-sm font-semibold uppercase">consoles</div>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/accessories.png" alt="gamepass" />
                <div className="text-[#107C10] text-sm font-semibold uppercase">accessories</div>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/play.png" alt="gamepass" />
                <div className="text-[#107C10] text-sm font-semibold uppercase">play</div>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
                <img className="w-10 md:w-16" src="/images/signin.png" alt="gamepass" />
                <div className="text-[#107C10] text-sm font-semibold uppercase">sign in</div>
            </div>
        </div>
      </div>
  )
}

export default Accessories
