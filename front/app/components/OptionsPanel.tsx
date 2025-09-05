import React from "react";
import type { TranslatorKey } from "@/types";
import { validTranslators } from "@/types";
import { getTranslatorName } from "@/utils/getTranslatorName";
import {
  languageOptions,
  detectionResolutions,
  textDetectorOptions,
  inpaintingSizes,
  inpainterOptions,
  upscalerOptions,
  colorizerOptions,
  upscaleRatios,
} from "@/config";
import { LabeledInput } from "@/components/LabeledInput";
import { LabeledSelect } from "@/components/LabeledSelect";

type Props = {
  detectionResolution: string;
  textDetector: string;
  renderTextDirection: string;
  translator: TranslatorKey;
  targetLanguage: string;
  inpaintingSize: string;
  customUnclipRatio: number;
  customBoxThreshold: number;
  maskDilationOffset: number;
  inpainter: string;
  upscaler: string;
  upscaleRatio: string;
  colorizer: string;

  setDetectionResolution: (val: string) => void;
  setTextDetector: (val: string) => void;
  setRenderTextDirection: (val: string) => void;
  setTranslator: (val: TranslatorKey) => void;
  setTargetLanguage: (val: string) => void;
  setInpaintingSize: (val: string) => void;
  setCustomUnclipRatio: (val: number) => void;
  setCustomBoxThreshold: (val: number) => void;
  setMaskDilationOffset: (val: number) => void;
  setInpainter: (val: string) => void;
  setUpscaler: (val: string) => void;
  setUpscaleRatio: (val: string) => void;
  setColorizer: (val: string) => void;
};

export const OptionsPanel: React.FC<Props> = ({
  detectionResolution,
  textDetector,
  renderTextDirection,
  translator,
  targetLanguage,
  inpaintingSize,
  customUnclipRatio,
  customBoxThreshold,
  maskDilationOffset,
  inpainter,
  upscaler,
  upscaleRatio,
  colorizer,
  setDetectionResolution,
  setTextDetector,
  setRenderTextDirection,
  setTranslator,
  setTargetLanguage,
  setInpaintingSize,
  setCustomUnclipRatio,
  setCustomBoxThreshold,
  setMaskDilationOffset,
  setInpainter,
  setUpscaler,
  setUpscaleRatio,
  setColorizer,
}) => {
  return (
    <>
      {/* 1段目のセクション */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Detection Resolution */}
        <LabeledSelect
          id="detectionResolution"
          label="Detection Resolution"
          icon="carbon:fit-to-screen"
          title="Detection resolution"
          value={detectionResolution}
          onChange={setDetectionResolution}
          options={detectionResolutions.map((res) => ({
            label: `${res}px`,
            value: String(res),
          }))}
        />

        {/* Text Detector */}
        <LabeledSelect
          id="textDetector"
          label="Text Detector"
          icon="carbon:search-locate"
          title="Text detector"
          value={textDetector}
          onChange={setTextDetector}
          options={textDetectorOptions}
        />

        {/* Render text direction */}
        <LabeledSelect
          id="renderTextDirection"
          label="Render Direction"
          icon="carbon:text-align-left"
          title="Render text orientation"
          value={renderTextDirection}
          onChange={setRenderTextDirection}
          options={[
            { value: "auto", label: "Auto" },
            { value: "horizontal", label: "Horizontal" },
            { value: "vertical", label: "Vertical" },
          ]}
        />

        {/* Translator */}
        <LabeledSelect
          id="translator"
          label="Translator"
          icon="carbon:operations-record"
          title="Translator"
          value={translator}
          onChange={(val) => setTranslator(val as TranslatorKey)}
          options={validTranslators.map((key) => ({
            value: key,
            label: getTranslatorName(key),
          }))}
        />

        {/* Target Language */}
        <LabeledSelect
          id="targetLanguage"
          label="Target Language"
          icon="carbon:language"
          title="Target language"
          value={targetLanguage}
          onChange={setTargetLanguage}
          options={languageOptions}
        />
      </div>

      {/* 2段目のセクション */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {/* Inpainting Size */}
        <LabeledSelect
          id="inpaintingSize"
          label="Inpainting Size"
          icon="carbon:paint-brush"
          title="Inpainting size"
          value={inpaintingSize}
          onChange={setInpaintingSize}
          options={inpaintingSizes.map((size) => ({
            label: `${size}px`,
            value: String(size),
          }))}
        />

        {/* Unclip Ratio */}
        <LabeledInput
          id="unclipRatio"
          label="Unclip Ratio"
          icon="weui:max-window-filled"
          title="Unclip ratio"
          step={0.01}
          value={customUnclipRatio}
          onChange={setCustomUnclipRatio}
        />

        {/* Box Threshold */}
        <LabeledInput
          id="boxThreshold"
          label="Box Threshold"
          icon="weui:photo-wall-outlined"
          title="Box threshold"
          step={0.01}
          value={customBoxThreshold}
          onChange={setCustomBoxThreshold}
        />

        {/* Mask Dilation Offset */}
        <LabeledInput
          id="maskDilationOffset"
          label="Mask Dilation Offset"
          icon="material-symbols:adjust-outline"
          title="Mask dilation offset"
          step={1}
          value={maskDilationOffset}
          onChange={setMaskDilationOffset}
        />

        {/* Inpainter */}
        <LabeledSelect
          id="inpainter"
          label="Inpainter"
          icon="carbon:paint-brush"
          title="Inpainter"
          value={inpainter}
          onChange={setInpainter}
          options={inpainterOptions}
        />
      </div>

      {/* 3段目のセクション - Upscaling and Colorization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {/* Upscaler */}
        <LabeledSelect
          id="upscaler"
          label="Upscaler"
          icon="carbon:zoom-in"
          title="Upscaler"
          value={upscaler}
          onChange={setUpscaler}
          options={upscalerOptions}
        />

        {/* Upscale Ratio */}
        <LabeledSelect
          id="upscaleRatio"
          label="Upscale Ratio"
          icon="carbon:fit-to-screen"
          title="Upscale ratio"
          value={upscaleRatio}
          onChange={setUpscaleRatio}
          options={[
            { value: "", label: "None" },
            ...upscaleRatios.map((ratio) => ({
              label: `${ratio}x`,
              value: String(ratio),
            })),
          ]}
        />

        {/* Colorizer */}
        <LabeledSelect
          id="colorizer"
          label="Colorizer"
          icon="carbon:color-palette"
          title="Colorizer"
          value={colorizer}
          onChange={setColorizer}
          options={colorizerOptions}
        />
      </div>
    </>
  );
};
