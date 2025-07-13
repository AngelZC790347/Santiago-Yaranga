import React, { useLayoutEffect, useRef } from "react";
import { loadFont } from "@remotion/google-fonts/Inter";
import gsap from "gsap";
import { useCurrentFrame, useVideoConfig } from "remotion";

type Variant = "still" | "enter";
interface Props { variant?: Variant; frames?: number; }
export const Cronograma2: React.FC<Props> = ({ variant = "still", frames }) => {
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

        if (variant === "enter") {
            gsap.set(".item", { y: 120, opacity: 0 });
            gsap.set(".char", {
                y: (i: number) => (i % 2 === 0 ? -100 : 100),
                opacity: 0,
            });

            tl.to(
                ".item",
                { y: 0, opacity: 1, stagger: 2, duration: 0.5, ease: "power2.out" },
                "enter"
            );
            tl.to(
                ".char",
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.02,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "enter"
            );
        }

        (ref.current as any).tl = tl;
    }, [variant]);

    useLayoutEffect(() => {
        const tl = (ref.current as any)?.tl as gsap.core.Timeline;
        if (!tl) return;
        if (variant === "still") {
            tl.progress(0);
            return;
        }
        const totalFrames = frames ?? fps;
        tl.progress(Math.min(frame / totalFrames, 1));
    }, [frame, fps, variant, frames]);

    return (
        <div
            ref={ref}
            className="flex flex-col gap-20 text-5xl w-5/6 px-10 mx-auto"
            style={{ fontFamily }}
        >

            <div className="flex justify-between item">
                <span className="font-semibold split">5:00 – 6:00&nbsp;pm</span>
                <span className="font-semibold w-3/4 split">
                    Concurso de Danzas Típicas
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">6:00 – 7:00&nbsp;pm</span>
                <span className="font-semibold w-3/4 split">
                    Premiación a los Ganadores
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">7:00 – 9:00&nbsp;pm</span>
                <span className="font-semibold w-3/4 split">
                    Serenata y Show Musical
                </span>
            </div>
            <div className="flex justify-between item">
                <span className="font-semibold split">9:00 – 11:00&nbsp;pm</span>
                <span className="font-semibold w-3/4 split">Gran Baile de Clausura</span>
            </div>
        </div>
    );
};
