import { AbsoluteFill, Img, staticFile } from "remotion"
import {loadFont} from "@remotion/google-fonts/DancingScript"
export const Caratula:React.FC<{}> = () =>{
    const {fontFamily} = loadFont()
    return(
        <AbsoluteFill className="top-3/20 flex flex-col gap-10">
            <header className="flex flex-col mx-auto w-3/4 gap-10">
                <div style={{fontFamily}}  className="mx-auto w-fit flex flex-col gap-10">
                    <h1 
                    
                    className="text-center mx-auto santiago-heading text-[#DD4C8C] text-9xl uppercase normal-case ">
                        Gran Fiesta Santiaguera Edición <br/> 2025
                    </h1>
                    <span className="block text-center text-6xl text-[#8B008B] mt-2 font-bold tracking-wide">
                    Familia : Cano Yaranga
                    </span>                 
                </div>
                   <span className="block text-center text-3xl text-[#5E2B74] mt-1 tracking-wider italic">
                    Fecha   : Sábado 02 de Agosto
                    </span>
            </header>   
            <main className="relative h-1/3 w-3/4 mx-auto z-10">
                <Img className="absolute top-0 w-3/5" src={staticFile('santiago1.jpg')}/>
                <Img className="absolute bottom-0 w-3/5 right-0" src={staticFile('santiago2.jpg')}/>
            </main>         
        </AbsoluteFill>
    )
}