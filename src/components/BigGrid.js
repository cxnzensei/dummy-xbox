import Halo from "./cards/Halo"
import Gamepass from "./cards/Gamepass"
import Tunic from "./cards/Tunic"
import Pastel from "./cards/Pastel"
import NextGen from "./cards/NextGen"
import Player from "./cards/Player"
import Quarry from "./cards/Quarry"
import History from "./cards/History"
import Simulator from "./cards/Simulator"
import Gearshop from "./cards/Gearshop"

const BigGrid = () => {
  return (
    <div className="p-2">
        <div className="lg:grid space-y-2 lg:space-y-0 grid-cols-2 gap-2">
            <Halo />
            <div className="space-y-2 flex flex-col items-center justify-center">
                <Gamepass />
                <Tunic />
            </div>
            <NextGen />
            <Quarry />
            <History />
            <div className="space-y-2 flex flex-col items-center justify-center">
                <Player />
                <Simulator />
            </div>
            <Pastel />
            <Gearshop />
        </div>
    </div>
  )
}

export default BigGrid
