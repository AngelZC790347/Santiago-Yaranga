import React, { useLayoutEffect, useRef } from "react";
import { loadFont } from "@remotion/google-fonts/Inter";
import gsap from "gsap";
import { useCurrentFrame, useVideoConfig } from "remotion";

type Variant = "still" | "exit";
interface Props { variant?: Variant; frames?: number; }
export const Cronograma1: React.FC<Props> = ({ variant = "still", frames }) => {
    const { fontFamily } = loadFont();
    const ref = useRef<HTMLDivElement>(null);
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    useLayoutEffect(() => {
        if (!ref.current) return;
        ref.current.querySelectorAll<HTMLElement>(".split").forEach((el) => {
            el.innerHTML = el.textContent!
                .split("")
                .map((c) => `<span class='char'>${c}</span>`)
                .join("");
        });

        const tl = gsap.timeline({ paused: true });
        tl.to(
            ".item",
            { y: 120, opacity: 0, stagger: 2, duration: 0.5, ease: "power2.in" },
            "exit"
        );
        tl.to(
            ".char",
            {
                y: (i: number) => (i % 2 === 0 ? -100 : 100),
                opacity: 0,
                stagger: 0.02,
                duration: 0.5,
                ease: "power2.in",
            },
            "exit-=0.5"
        );

        (ref.current as any).tl = tl;
    }, []);

    useLayoutEffect(() => {
        const totalFrames = frames ?? fps;
        const tl = (ref.current as any)?.tl as gsap.core.Timeline;
        if (!tl) return;
        if (variant === "still") {
            tl.progress(0);
            return;
        }
        tl.progress(Math.min(frame / totalFrames, 1));
    }, [frame, fps, variant]);

    return (
        <div
            ref={ref}
            className="flex flex-col gap-16 text-5xl w-5/6 px-10 mx-auto"
            style={{ fontFamily }}
        >
            <div className="flex justify-between item">
                <span className="font-semibold split">8:00 – 9:00 am</span>
                <span className="font-semibold w-3/4 split">
                    Desayuno Ofrecido por Jaime Cano
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">10:00 – 12:00 pm</span>
                <span className="font-semibold w-3/4 split">
                    Pasacalle al Ritmo de Orquestas de turno
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">1:00 – 2:00 pm</span>
                <span className="font-semibold w-3/4 split">
                    Delicioso Almuerzo ofrecido por los Organizadores
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">2:00 – 4:00 pm</span>
                <span className="font-semibold w-3/4 split">
                    Entrada de la artista Flor Yauyinita con su marco completo
                </span>
            </div>
        </div>
    );
};

