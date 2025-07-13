import { AbsoluteFill, Img, staticFile } from "remotion"
import {loadFont} from '@remotion/google-fonts/DancingScript'

export const Lugar:React.FC<{}> = () =>{
    const {fontFamily} = loadFont()
    return (
        <AbsoluteFill className="top-1/8 flex flex- col gap-20">
            <header  style={{fontFamily }}>
                <div className="flex items-center mx-auto w-fit gap-10">
                  <h1                    
                    className="text-center santiago-heading border-b-solid border-b-8 text-[#DD4C8C] text-9xl uppercase normal-case ">
                        Lugar  
                    </h1>
                   <Img width={80} src={staticFile('google-maps.svg')}/>
                </div>
            </header>
            <main className="text-6xl flex flex-col gap-10 w-5/6 px-10 mx-auto">
                <p className="font-bold text-center">Huancayo - Chilca</p>
                <p><strong>Lugar: </strong> Av. General Córdova 452</p>
                <p><strong>Referencia: </strong>Altura de local mil maravillas de Auray</p>
                <p>
                    <Img src={staticFile('casa.png')}/>
                </p>
            </main>
        </AbsoluteFill>
    )
}