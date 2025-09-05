export const languageOptions = [  
  { value: "CHS", label: "Simplified Chinese" },  
  { value: "CHT", label: "Traditional Chinese" },  
  { value: "CSY", label: "Czech" },  
  { value: "NLD", label: "Dutch" },  
  { value: "ENG", label: "English" },  
  { value: "FRA", label: "French" },  
  { value: "DEU", label: "German" },  
  { value: "HUN", label: "Hungarian" },  
  { value: "ITA", label: "Italian" },  
  { value: "JPN", label: "Japanese" },  
  { value: "KOR", label: "Korean" },  
  { value: "POL", label: "Polish" },  
  { value: "PTB", label: "Portuguese" },  
  { value: "ROM", label: "Romanian" },  
  { value: "RUS", label: "Russian" },  
  { value: "ESP", label: "Spanish" },  
  { value: "TRK", label: "Turkish" },  
  { value: "UKR", label: "Ukrainian" },  
  { value: "VIN", label: "Vietnamese" },  
  { value: "ARA", label: "Arabic" },  
  { value: "CNR", label: "Montenegrin" },  
  { value: "SRP", label: "Serbian" },  
  { value: "HRV", label: "Croatian" },  
  { value: "THA", label: "Thai" },  
  { value: "IND", label: "Indonesian" },  
  { value: "FIL", label: "Filipino" }  
];  

export const detectionResolutions = [1024, 1536, 2048, 2560];

export const inpaintingSizes = [516, 1024, 2048, 2560];

export const textDetectorOptions = [
  { value: "default", label: "Default" },
  { value: "ctd", label: "CTD" },
  { value: "paddle", label: "Paddle" },
];

export const inpainterOptions = [
  { value: "default", label: "Default" },
  { value: "lama_large", label: "Lama Large" },
  { value: "lama_mpe", label: "Lama MPE" },
  { value: "sd", label: "SD" },
  { value: "none", label: "None" },
  { value: "original", label: "Original" },
];

export const upscalerOptions = [
  { value: "esrgan", label: "ESRGAN" },
  { value: "waifu2x", label: "Waifu2x" },
  { value: "4xultrasharp", label: "4x Ultra Sharp" },
  { value: "none", label: "None" },
];

export const colorizerOptions = [
  { value: "none", label: "None" },
  { value: "mc2", label: "MC2" },
];

export const upscaleRatios = [2, 4, 8];

export const imageMimeTypes = [
  "image/png",
  "image/jpeg",
  "image/bmp",
  "image/webp",
];
