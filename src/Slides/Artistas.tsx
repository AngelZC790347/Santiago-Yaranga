import { loadFont } from "@remotion/google-fonts/DancingScript"
import { AbsoluteFill, Img, staticFile } from "remotion"

export const Artistas:React.FC<{}> = () => {
    const {fontFamily} = loadFont()
    return(
        <AbsoluteFill
        className="top-1/5 flex flex- col gap-20"
        >
            <header  style={{fontFamily}}>
                <div className="flex items-center mx-auto w-fit gap-10">
                  <h1                    
                    className="text-center santiago-heading  text-[#DD4C8C] text-9xl uppercase normal-case ">
                        Artistas
                    </h1>                   
                </div>
                </header>
        </AbsoluteFill>
    )
}