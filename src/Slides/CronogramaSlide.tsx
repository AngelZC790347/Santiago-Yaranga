import React from "react";
import { Series, useVideoConfig } from "remotion";
import { Cronograma1 } from "./Cronograma1";
import { Cronograma2 } from "./Cronograma2";


export const CronogramaSlide: React.FC = () => {
    const { durationInFrames } = useVideoConfig();
    const total = durationInFrames;
    const q = total / 4;

    return (
        <Series>
            <Series.Sequence durationInFrames={q}>
                <Cronograma1 variant="still" frames={q} />
            </Series.Sequence>

            <Series.Sequence durationInFrames={q}>
                <Cronograma1 variant="exit" frames={q} />
            </Series.Sequence>

            <Series.Sequence durationInFrames={q}>
                <Cronograma2 variant="enter" frames={q} />
            </Series.Sequence>

            <Series.Sequence durationInFrames={q}>
                <Cronograma2 variant="still" frames={q} />
            </Series.Sequence>
        </Series>
    );
};
