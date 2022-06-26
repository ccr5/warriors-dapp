import Image from "next/image"
import trophy from "../../../public/betting.png"
import ProgressBetICO from "./progressBetICO"

export default function BetTokenICO() {
  return (
    <div className="w-full min-h-[350px] bg-paletteTwo text-white rounded-2xl p-2 m-2">
      <div className="flex items-center justify-center gap-4 h-2/6 m-3">
        <Image
          src={trophy}
          alt=""
          width={70}
          height={70}
          className="absolute align-top w-[210px] h-[190px] m-4"
        />
        <div className="text-2xl">BET Token ICO</div>
      </div>
      <div className="text-center h-1/6 m-3">
        Buy BET tokens and participate in the biggest web3 tournament in the universe
      </div>
      <div className="grid grid-cols-2 h-1/6 items-center justify-center text-center m-3">
        <div>ETH / BET:</div>
        <div>2000 BETs</div>
      </div>
      <div className="flex justify-center items-center h-1/6 w-full m-3">
        <ProgressBetICO />
      </div>
      <div className="flex justify-center items-center h-1/6 w-full m-3">
        <button className="flex justify-center items-center p-2 min-w-[100px] text-black bg-gray-200 min-h-[30px] rounded-xl text-center hover:opacity-70 transition-colors">
          Buy BETs
        </button>
      </div>
    </div>
  )
}