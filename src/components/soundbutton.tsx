import { SoundType } from "../App";
import useSound from "use-sound";
import test from "../assets/boom.wav"

type SoundButtonType = {
 data: SoundType
}
const SoundButton = ({data}: SoundButtonType) => {
  const [play] = useSound(data.sound)

    return(
        <div className='key cursor-pointer ' onClick={() =>{
          console.log("first")
          // console.log(play)
          play()
        }}>
        <p>{data.letter}</p>
        <span className='sound'>{data.name}</span>
      </div>
    )
    
  }
  
export default SoundButton;