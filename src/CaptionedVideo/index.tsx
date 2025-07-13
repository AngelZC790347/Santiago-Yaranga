import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  cancelRender,
  continueRender,
  delayRender,
  getStaticFiles,
  Img,
  OffthreadVideo,
  Sequence,
  staticFile,
  useVideoConfig,
  Audio,
  watchStaticFile,
} from "remotion";
import { z } from "zod";
import SubtitlePage from "./SubtitlePage";
import { getVideoMetadata } from "@remotion/media-utils";
import { loadFont } from "../load-font";
import { NoCaptionFile } from "./NoCaptionFile";
import { Caption, createTikTokStyleCaptions } from "@remotion/captions";
import { TransitionSeries, linearTiming } from "@remotion/transitions"
import { flip } from "@remotion/transitions/flip"
import { Caratula } from "../Slides/Caratula";
import { Lugar } from "../Slides/Lugar";
import { Artistas } from "../Slides/Artistas";
import { Programa } from "../Slides/Programa";
export type SubtitleProp = {
  startInSeconds: number;
  text: string;
};

export const captionedVideoSchema = z.object({
  src: z.string(),
});

export const calculateCaptionedVideoMetadata: CalculateMetadataFunction<
  z.infer<typeof captionedVideoSchema>
> = async ({ props }) => {
  const fps = 30;
  return {
    fps,
    durationInFrames: 1300,
  };
};

const getFileExists = (file: string) => {
  const files = getStaticFiles();
  const fileExists = files.find((f) => {
    return f.src === file;
  });
  return Boolean(fileExists);
};

// How many captions should be displayed at a time?
// Try out:
// - 1500 to display a lot of words at a time
// - 200 to only display 1 word at a time
const SWITCH_CAPTIONS_EVERY_MS = 1200;

export const CaptionedVideo: React.FC<{}> = () => {
  const [subtitles, setSubtitles] = useState<Caption[]>([]);

  const { fps } = useVideoConfig();



  return (
    <AbsoluteFill style={{ background: "#fafafa" }}>
      <AbsoluteFill>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={350}>
            <AbsoluteFill style={{ backgroundImage: `url(${staticFile('fondo.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '-80px center' }}>
              <Caratula />
            </AbsoluteFill>
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={flip()} timing={linearTiming({ durationInFrames: 30 })} />
          <TransitionSeries.Sequence durationInFrames={350}>
            <AbsoluteFill style={{ backgroundImage: `url(${staticFile('fondo.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '-80px center' }}>
              <Lugar />
            </AbsoluteFill>
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={flip()} timing={linearTiming({ durationInFrames: 30 })} />
          <TransitionSeries.Sequence durationInFrames={350}>
            <AbsoluteFill style={{ backgroundImage: `url(${staticFile('fondo.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '-80px center' }}>
              <Artistas />
            </AbsoluteFill>
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={flip()} timing={linearTiming({ durationInFrames: 30 })} />
          <TransitionSeries.Sequence durationInFrames={350}>
            <AbsoluteFill style={{ backgroundImage: `url(${staticFile('fondo.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '-80px center' }}>
              <Programa />
            </AbsoluteFill>
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={flip()} timing={linearTiming({ durationInFrames: 30 })} />
        </TransitionSeries>
      </AbsoluteFill>
      <AbsoluteFill>
        <Audio src={staticFile('tono.mp3')} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
