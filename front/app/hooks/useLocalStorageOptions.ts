import { useState, useEffect } from 'react';
import type { TranslatorKey } from '@/types';

export interface TranslationOptions {
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
}

const STORAGE_KEY = 'manga-translator-options';

const defaultOptions: TranslationOptions = {
  detectionResolution: "1536",
  textDetector: "default",
  renderTextDirection: "auto",
  translator: "youdao",
  targetLanguage: "CHS",
  inpaintingSize: "2048",
  customUnclipRatio: 2.3,
  customBoxThreshold: 0.7,
  maskDilationOffset: 30,
  inpainter: "default",
  upscaler: "esrgan",
  upscaleRatio: "",
  colorizer: "none",
};

export const useLocalStorageOptions = () => {
  // Start with defaults, then load from localStorage
  const [options, setOptions] = useState<TranslationOptions>(defaultOptions);

  // Load options from localStorage after component mounts
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to handle new options
        setOptions(prev => ({ ...prev, ...parsed }));
      }
    } catch (error) {
      console.warn('Failed to load options from localStorage:', error);
    }
  }, []);

  // Save to localStorage whenever options change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
    } catch (error) {
      console.warn('Failed to save options to localStorage:', error);
    }
  }, [options]);

  // Helper functions to update individual options
  const updateOption = <K extends keyof TranslationOptions>(
    key: K,
    value: TranslationOptions[K]
  ) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  return {
    options,
    updateOption,
    // Individual setters for convenience
    setDetectionResolution: (value: string) => updateOption('detectionResolution', value),
    setTextDetector: (value: string) => updateOption('textDetector', value),
    setRenderTextDirection: (value: string) => updateOption('renderTextDirection', value),
    setTranslator: (value: TranslatorKey) => updateOption('translator', value),
    setTargetLanguage: (value: string) => updateOption('targetLanguage', value),
    setInpaintingSize: (value: string) => updateOption('inpaintingSize', value),
    setCustomUnclipRatio: (value: number) => updateOption('customUnclipRatio', value),
    setCustomBoxThreshold: (value: number) => updateOption('customBoxThreshold', value),
    setMaskDilationOffset: (value: number) => updateOption('maskDilationOffset', value),
    setInpainter: (value: string) => updateOption('inpainter', value),
    setUpscaler: (value: string) => updateOption('upscaler', value),
    setUpscaleRatio: (value: string) => updateOption('upscaleRatio', value),
    setColorizer: (value: string) => updateOption('colorizer', value),
  };
};