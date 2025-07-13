import { loadFont } from "@remotion/google-fonts/DancingScript"
import { AbsoluteFill, Img, staticFile } from "remotion"

export const Artistas:React.FC<{}> = () => {
    const {fontFamily} = loadFont()
    return(
        <AbsoluteFill
        className="top-1/8 flex flex- col gap-20"
        >
            <header  style={{fontFamily}}>
                <div className="flex items-center mx-auto w-fit gap-10">
                  <h1                    
                    className="text-center santiago-heading  text-[#DD4C8C] text-9xl uppercase normal-case">
                        Artistas
                    </h1>                   
                </div>                
                </header>
                <main className="grid grid-rows-2 gap-50 w-5/6 mx-auto h-1/2">
                    <div className="flex flex-col gap-10 ">
                        <Img className="w-full h-full object-contain" src={staticFile('nueva-sociedad.jpg')}></Img>
                        <p style={{fontFamily}} className="text-center text-6xl font-bold">Nueva Sociedad</p>                        
                    </div>
                    <div className="flex flex-col gap-10">
                        <Img className="w-full h-full object-contain" src={staticFile('ideales.jpg')}></Img>
                        <p style={{fontFamily}} className="text-center text-6xl font-bold">Super Ideales Del Folklore</p>                        
                    </div>
                </main>
        </AbsoluteFill>
    )
}