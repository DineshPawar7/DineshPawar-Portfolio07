"use client";

import { useState, useRef, ChangeEvent } from "react";

// Types
interface PhotoState {
  file: File | null;
  preview: string | null;
  width: number;
  height: number;
  compressedSize: number | null;
  originalSize: number | null;
}

export default function PhotoResizer() {
  // State
  const [photo, setPhoto] = useState<PhotoState>({
    file: null,
    preview: null,
    width: 300,
    height: 300,
    compressedSize: null,
    originalSize: null,
  });
  const [targetWidth, setTargetWidth] = useState<number>(300);
  const [targetHeight, setTargetHeight] = useState<number>(300);
  const [quality, setQuality] = useState<number>(80);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string>("processed-photo");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const preview = event.target?.result as string;
      setPhoto({
        file,
        preview,
        width: targetWidth,
        height: targetHeight,
        compressedSize: null,
        originalSize: file.size,
      });
      setProcessedImage(null);
      setDownloadFilename(file.name.replace(/\.[^/.]+$/, "") + "-processed");
    };
    reader.onerror = () => {
      setError("Failed to read file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  // Process image: resize, compress, add white background
  const processImage = async () => {
    if (!photo.preview) {
      setError("Please upload a photo first.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Load image with proper error handling
      const img = await loadImage(photo.preview);
      
      // Create canvas with white background
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Could not get canvas context");
      }

      // Fill white background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, targetWidth, targetHeight);

      // Calculate aspect ratio to fit image within target dimensions
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

      // Draw image with white background
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Convert to JPEG with compression
      const processedDataUrl = canvas.toDataURL("image/jpeg", quality / 100);

      // Calculate compressed size (approximate)
      const compressedSize = Math.round((processedDataUrl.length * 3) / 4);
      setPhoto((prev) => ({
        ...prev,
        width: targetWidth,
        height: targetHeight,
        compressedSize,
      }));

      setProcessedImage(processedDataUrl);

      // Generate download filename
      const baseName = photo.file?.name.replace(/\.[^/.]+$/, "") || "photo";
      setDownloadFilename(`${baseName}-processed`);
    } catch (error) {
      console.error("Error processing image:", error);
      setError(error instanceof Error ? error.message : "Failed to process image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper function to load image with proper error handling
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
      
      // If image is already loaded (cached), onload might not fire
      if (img.complete && img.naturalWidth > 0) {
        resolve(img);
      }
    });
  };

  // Download processed image
  const downloadImage = () => {
    if (!processedImage) {
      setError("Please process an image first.");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = processedImage;
      link.download = `${downloadFilename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setError(null);
    } catch {
      setError("Failed to download image. Please try again.");
    }
  };

  // Reset all states
  const resetAll = () => {
    setPhoto({
      file: null,
      preview: null,
      width: 300,
      height: 300,
      compressedSize: null,
      originalSize: null,
    });
    setTargetWidth(300);
    setTargetHeight(300);
    setQuality(80);
    setProcessedImage(null);
    setDownloadFilename("processed-photo");
    setError(null);
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

  // Calculate compression ratio
  const getCompressionRatio = (): string => {
    if (!photo.originalSize || !photo.compressedSize) return "N/A";
    const ratio = ((photo.originalSize - photo.compressedSize) / photo.originalSize) * 100;
    return ratio > 0 ? `${ratio.toFixed(1)}%` : "0%";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            📸 Photo Resizer & Compressor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resize, compress, and add white background to your photo for exam forms, passports, and more
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
                photo.preview ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-blue-400'
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
              {photo.preview ? (
                <div className="relative w-full max-w-xs mx-auto">
                  <img
                    src={photo.preview}
                    alt="Uploaded photo"
                    className="rounded-lg shadow-md mx-auto object-contain max-h-64"
                    style={{ maxWidth: '100%' }}
                  />
                  <p className="mt-3 text-sm text-gray-500">
                    {photo.file?.name} ({formatFileSize(photo.originalSize)})
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-gray-600 font-medium">Click to upload or drag & drop</p>
                  <p className="text-sm text-gray-400 mt-1">Supports JPG, PNG, WEBP (Max 10MB)</p>
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
                    min="50"
                    max="5000"
                    value={targetWidth}
                    onChange={(e) => setTargetWidth(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height (px)
                  </label>
                  <input
                    type="number"
                    min="50"
                    max="5000"
                    value={targetHeight}
                    onChange={(e) => setTargetHeight(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Smaller file</span>
                  <span>Better quality</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={processImage}
                  disabled={!photo.preview || isProcessing}
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "⏳ Processing..." : "🔄 Process Image"}
                </button>
                <button
                  onClick={resetAll}
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  🔄 Reset
                </button>
              </div>
            </div>

            {/* Info & Stats */}
            {photo.originalSize && photo.compressedSize && (
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Original Size:</span>
                  <span className="font-medium">{formatFileSize(photo.originalSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compressed Size:</span>
                  <span className="font-medium text-green-600">{formatFileSize(photo.compressedSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compression:</span>
                  <span className="font-medium text-blue-600">{getCompressionRatio()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="font-medium">{targetWidth} × {targetHeight} px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">White Background:</span>
                  <span className="font-medium text-green-600">✅ Added</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview & Download */}
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span>✨</span> Processed Result
            </h2>

            <div className="border-2 border-gray-200 rounded-xl p-4 min-h-[300px] flex items-center justify-center">
              {processedImage ? (
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src={processedImage}
                    alt="Processed photo"
                    className="rounded-lg shadow-md mx-auto object-contain max-h-96"
                    style={{ maxWidth: '100%' }}
                  />
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                      ✅ Processed
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full ml-2">
                      {targetWidth} × {targetHeight}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p>Upload and process an image</p>
                  <p className="text-sm">White background will be added automatically</p>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">.jpg will be appended automatically</p>
                </div>

                <button
                  onClick={downloadImage}
                  className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <span>⬇️</span> Download Processed Image
                </button>

                <p className="text-xs text-center text-gray-400">
                  Image will be downloaded as JPG with white background and compressed
                </p>
              </div>
            )}

            {/* Quick Presets */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Quick Presets:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Passport (2×2 in)", w: 600, h: 600 },
                  { label: "ID Photo", w: 300, h: 300 },
                  { label: "Visa Photo", w: 500, h: 500 },
                  { label: "Exam Form", w: 400, h: 400 },
                  { label: "Social Media", w: 1080, h: 1080 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setTargetWidth(preset.w);
                      setTargetHeight(preset.h);
                    }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">🖼️</span>
            <p className="font-medium">Resize Any Photo</p>
            <p className="text-xs">Custom dimensions for any requirement</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">⚡</span>
            <p className="font-medium">Compress Efficiently</p>
            <p className="text-xs">Reduce file size without losing quality</p>
          </div>
          <div className="bg-white/50 backdrop-blur rounded-xl p-4">
            <span className="text-2xl block mb-1">⬜</span>
            <p className="font-medium">White Background</p>
            <p className="text-xs">Perfect for official documents & forms</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All processing is done locally in your browser. No images are uploaded to any server.
        </p>
      </div>
    </div>
  );
}
