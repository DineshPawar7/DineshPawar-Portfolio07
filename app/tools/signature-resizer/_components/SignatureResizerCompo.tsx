"use client";

import { useState, useRef, ChangeEvent } from "react";

// Types
interface SignatureState {
  file: File | null;
  preview: string | null;
  width: number;
  height: number;
  processedSize: number | null;
  originalSize: number | null;
}

export default function SignatureResizerCompo() {
  // State
  const [signature, setSignature] = useState<SignatureState>({
    file: null,
    preview: null,
    width: 140,
    height: 60,
    processedSize: null,
    originalSize: null,
  });
  const [targetWidth, setTargetWidth] = useState<number>(140);
  const [targetHeight, setTargetHeight] = useState<number>(60);
  const [quality, setQuality] = useState<number>(90);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string>("signature");
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<"png" | "jpg">("png");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [showBgColorPicker, setShowBgColorPicker] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit.");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const preview = event.target?.result as string;
      setSignature({
        file,
        preview,
        width: targetWidth,
        height: targetHeight,
        processedSize: null,
        originalSize: file.size,
      });
      setProcessedImage(null);
      setDownloadFilename(file.name.replace(/\.[^/.]+$/, "") + "-resized");
    };
    reader.onerror = () => {
      setError("Failed to read file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  // Process signature: resize, crop, add background
  const processSignature = async () => {
    if (!signature.preview) {
      setError("Please upload a signature first.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Load image
      const img = await loadImage(signature.preview);
      
      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Could not get canvas context");
      }

      // Fill background
      if (format === "jpg") {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, targetWidth, targetHeight);
      } else {
        // Transparent background for PNG
        ctx.clearRect(0, 0, targetWidth, targetHeight);
      }

      // Calculate aspect ratio to fit signature within target dimensions
      const imgAspect = img.width / img.height;
      const targetAspect = targetWidth / targetHeight;

      let drawWidth: number, drawHeight: number;
      let offsetX: number, offsetY: number;

      if (imgAspect > targetAspect) {
        // Image is wider - fit to width
        drawWidth = targetWidth;
        drawHeight = targetWidth / imgAspect;
        offsetX = 0;
        offsetY = (targetHeight - drawHeight) / 2;
      } else {
        // Image is taller - fit to height
        drawHeight = targetHeight;
        drawWidth = targetHeight * imgAspect;
        offsetX = (targetWidth - drawWidth) / 2;
        offsetY = 0;
      }

      // Draw signature
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Convert to desired format
      let processedDataUrl: string;
      if (format === "png") {
        processedDataUrl = canvas.toDataURL("image/png");
      } else {
        processedDataUrl = canvas.toDataURL("image/jpeg", quality / 100);
      }

      // Calculate processed size
      const processedSize = Math.round((processedDataUrl.length * 3) / 4);
      setSignature((prev) => ({
        ...prev,
        width: targetWidth,
        height: targetHeight,
        processedSize,
      }));

      setProcessedImage(processedDataUrl);

      // Generate download filename
      const baseName = signature.file?.name.replace(/\.[^/.]+$/, "") || "signature";
      setDownloadFilename(`${baseName}-${targetWidth}x${targetHeight}`);
    } catch (error) {
      console.error("Error processing signature:", error);
      setError(error instanceof Error ? error.message : "Failed to process signature. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper function to load image
  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        resolve(img);
      };
      
      img.onerror = () => {
        reject(new Error("Failed to load image. The file might be corrupted or unsupported."));
      };
      
      img.src = src;
      
      // If image is already loaded (cached)
      if (img.complete && img.naturalWidth > 0) {
        resolve(img);
      }
    });
  };

  // Download processed signature
  const downloadSignature = () => {
    if (!processedImage) {
      setError("Please process a signature first.");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = processedImage;
      link.download = `${downloadFilename}.${format === "png" ? "png" : "jpg"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setError(null);
    } catch {
      setError("Failed to download signature. Please try again.");
    }
  };

  // Reset all states
  const resetAll = () => {
    setSignature({
      file: null,
      preview: null,
      width: 140,
      height: 60,
      processedSize: null,
      originalSize: null,
    });
    setTargetWidth(140);
    setTargetHeight(60);
    setQuality(90);
    setProcessedImage(null);
    setDownloadFilename("signature");
    setError(null);
    setFormat("png");
    setBgColor("#FFFFFF");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Format file size
  const formatFileSize = (bytes: number | null): string => {
    if (!bytes) return "N/A";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  // Apply preset dimensions
  const applyPreset = (w: number, h: number) => {
    setTargetWidth(w);
    setTargetHeight(h);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            ✍️ Signature Resizer & Cropper
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resize signature to exact dimensions (140x60 px) with transparent or colored background
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              {error}
            </span>
            <button 
              onClick={() => setError(null)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Upload & Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
            {/* Upload Area */}
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                signature.preview ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-purple-400'
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              {signature.preview ? (
                <div className="relative w-full max-w-xs mx-auto">
                  <img
                    src={signature.preview}
                    alt="Uploaded signature"
                    className="rounded-lg shadow-md mx-auto object-contain max-h-48"
                    style={{ maxWidth: '100%' }}
                  />
                  <p className="mt-3 text-sm text-gray-500">
                    {signature.file?.name} ({formatFileSize(signature.originalSize)})
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-6xl mb-4">✍️</div>
                  <p className="text-gray-600 font-medium">Click to upload your signature</p>
                  <p className="text-sm text-gray-400 mt-1">Supports JPG, PNG, WEBP (Max 5MB)</p>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Width (px)
                  </label>
                  <input
                    type="number"
                    min="20"
                    max="2000"
                    value={targetWidth}
                    onChange={(e) => setTargetWidth(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height (px)
                  </label>
                  <input
                    type="number"
                    min="20"
                    max="2000"
                    value={targetHeight}
                    onChange={(e) => setTargetHeight(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Output Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFormat("png")}
                    className={`py-2 px-4 rounded-lg transition ${
                      format === "png"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    PNG (Transparent)
                  </button>
                  <button
                    onClick={() => setFormat("jpg")}
                    className={`py-2 px-4 rounded-lg transition ${
                      format === "jpg"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    JPG (Colored BG)
                  </button>
                </div>
              </div>

              {format === "jpg" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Background Color
                  </label>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                      style={{ backgroundColor: bgColor }}
                      onClick={() => setShowBgColorPicker(!showBgColorPicker)}
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="#FFFFFF"
                    />
                  </div>
                  {showBgColorPicker && (
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-full h-10 mt-2"
                    />
                  )}
                </div>
              )}

              {format === "jpg" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Compression Quality: {quality}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Smaller file</span>
                    <span>Better quality</span>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={processSignature}
                  disabled={!signature.preview || isProcessing}
                  className="flex-1 bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "⏳ Processing..." : "🔄 Process Signature"}
                </button>
                <button
                  onClick={resetAll}
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  🔄 Reset
                </button>
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Quick Presets:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Standard (140×60)", w: 140, h: 60 },
                  { label: "Small (100×40)", w: 100, h: 40 },
                  { label: "Medium (200×80)", w: 200, h: 80 },
                  { label: "Large (300×120)", w: 300, h: 120 },
                  { label: "Square (150×150)", w: 150, h: 150 },
                  { label: "Wide (250×70)", w: 250, h: 70 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyPreset(preset.w, preset.h)}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Info & Stats */}
            {signature.originalSize && signature.processedSize && (
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Original Size:</span>
                  <span className="font-medium">{formatFileSize(signature.originalSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processed Size:</span>
                  <span className="font-medium text-green-600">{formatFileSize(signature.processedSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="font-medium">{targetWidth} × {targetHeight} px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium uppercase">{format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Background:</span>
                  <span className="font-medium">
                    {format === "png" ? "Transparent" : bgColor}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview & Download */}
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span>✨</span> Processed Result
            </h2>

            <div className="border-2 border-gray-200 rounded-xl p-4 min-h-[250px] flex items-center justify-center">
              {processedImage ? (
                <div className="relative w-full max-w-md mx-auto">
                  <div className={`p-4 rounded-lg ${format === "png" ? "bg-checkerboard" : ""}`}>
                    <img
                      src={processedImage}
                      alt="Processed signature"
                      className="rounded-lg shadow-md mx-auto object-contain max-h-64"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                      ✅ Processed
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                      {targetWidth} × {targetHeight}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                      {format.toUpperCase()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">✍️</div>
                  <p>Upload and process a signature</p>
                  <p className="text-sm">Transparent background for PNG format</p>
                </div>
              )}
            </div>

            {/* Download Section */}
            {processedImage && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filename
                  </label>
                  <input
                    type="text"
                    value={downloadFilename}
                    onChange={(e) => setDownloadFilename(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">.{format === "png" ? "png" : "jpg"} will be appended automatically</p>
                </div>

                <button
                  onClick={downloadSignature}
                  className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <span>⬇️</span> Download Processed Signature
                </button>

                <p className="text-xs text-center text-gray-400">
                  {format === "png" 
                    ? "PNG format with transparent background" 
                    : `JPG format with ${bgColor} background`}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer / Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">📐</span>
            <p className="font-medium">Exact Dimensions</p>
            <p className="text-xs">Perfect for signatures in forms</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">🎨</span>
            <p className="font-medium">Transparent or Colored</p>
            <p className="text-xs">PNG with transparency or JPG with background</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">⚡</span>
            <p className="font-medium">Quick Presets</p>
            <p className="text-xs">One-click dimension presets</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All processing is done locally in your browser. No images are uploaded to any server.
        </p>
      </div>

      <style jsx>{`
        .bg-checkerboard {
          background-image: 
            linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
            linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
            linear-gradient(-45deg, transparent 75%, #e5e5e5 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
    </div>
  );
}
