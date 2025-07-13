import { loadFont } from "@remotion/google-fonts/DancingScript"
import { AbsoluteFill, Img, staticFile } from "remotion"
import { Cronograma1 } from "./Cronograma1"
import { CronogramaSlide } from "./CronogramaSlide"
export const Programa: React.FC<{}> = () => {
    const { fontFamily } = loadFont()

    return (
        <AbsoluteFill className="top-2/12 flex flex- col gap-40">
            <header style={{ fontFamily }}>
                <div className="flex items-center mx-auto w-fit gap-10">
                    <h1
                        className="text-center santiago-heading  text-[#DD4C8C] text-9xl uppercase normal-case">
                        Programa
                    </h1>
                </div>
            </header>
            <div className="relative flex flex-col gap-16">
                <div className=" h-1/2">
                    <CronogramaSlide />
                </div>
                <aside className=" grid grid-cols-2 place-items-center content-center  translate-y-160 w-3/5 mx-auto">
                    <div className="flex flex-col gap-4" >
                        <Img width={200} height={200} className="object-contain" src={staticFile('sombrero.jpg')} />
                        <p style={{ fontFamily }} className="text-center text-6xl font-bold">Hombres</p>
                    </div>
                    <div className="flex flex-col gap-10" >
                        <Img width={200} height={200} className="object-contain" src={staticFile('pollera.jpeg')} />
                        <p style={{ fontFamily }} className="text-center text-6xl font-bold">Mujeres</p>
                    </div>
                </aside>
            </div>
        </AbsoluteFill>
    )
}