"use client";

import { useMemo, useRef, useState } from "react";
import type { ToolConfig } from "@/data/tools";
import {
  countGraphemes,
  countWords,
  extractHashtags,
  INVISIBLE_CHARS,
  repeatInvisible,
  insertLineBreaks,
  splitPreservingBreaks,
} from "@/lib/textUtils";
import { CHAR_LIMITS, IG_SPECS } from "@/lib/instagramSpecs";
import {
  engagementRate,
  reelEngagementRate,
  followerGrowthRate,
  postingFrequency,
  influencerRateEstimate,
  sponsoredPostValue,
} from "@/lib/calculators";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-[var(--ink-soft)]">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "border border-[var(--line)] bg-[var(--paper)] rounded-sm px-3 py-2 text-sm focus:border-[var(--ink)] outline-none";

function Readout({ label, value, unit }: { label: string; value: string | number; unit?: string }) {
  return (
    <div className="device-readout px-4 py-3 flex flex-col gap-0.5 min-w-[120px]">
      <span className="text-[10px] uppercase tracking-wide opacity-70">{label}</span>
      <span className="text-2xl">
        {value}
        {unit && <span className="text-sm ml-1 opacity-70">{unit}</span>}
      </span>
    </div>
  );
}

/* ---------------------------- Counter widget ---------------------------- */
function CounterWidget({ mode }: { mode: "caption" | "bio" | "hashtag" }) {
  const [text, setText] = useState("");
  const limit =
    mode === "caption" ? CHAR_LIMITS.caption : mode === "bio" ? CHAR_LIMITS.bio : CHAR_LIMITS.hashtagsPerPost;
  const chars = countGraphemes(text);
  const words = countWords(text);
  const hashtags = extractHashtags(text);
  const overLimit = mode === "hashtag" ? hashtags.length > limit : chars > limit;

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={
          mode === "caption"
            ? "Paste your caption here..."
            : mode === "bio"
            ? "Paste your bio here..."
            : "Paste your caption or hashtag block here..."
        }
        rows={6}
        className={`${inputCls} resize-y font-body`}
      />
      <div className="flex flex-wrap gap-3">
        {mode !== "hashtag" && (
          <Readout
            label={mode === "caption" ? "characters / 2,200" : "characters / 150"}
            value={chars}
          />
        )}
        {mode === "caption" && (
          <Readout label="visible before 'more'" value={Math.min(chars, 125)} unit="/ 125" />
        )}
        {mode !== "hashtag" && <Readout label="words" value={words} />}
        {mode === "hashtag" && <Readout label="hashtags / 30" value={hashtags.length} />}
      </div>
      {overLimit && (
        <p className="text-sm text-[var(--signal-ink)] font-medium">
          You&apos;re over the limit — trim it down before posting.
        </p>
      )}
      {mode === "hashtag" && hashtags.length > 0 && (
        <div className="device-panel p-4 flex flex-wrap gap-2">
          {hashtags.map((h, i) => (
            <span key={i} className="text-xs font-mono-data bg-[var(--paper)] border border-[var(--line)] rounded-sm px-2 py-1">
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* --------------------------- Invisible widget ---------------------------- */
function InvisibleWidget() {
  const [count, setCount] = useState(1);
  const [charKey, setCharKey] = useState<keyof typeof INVISIBLE_CHARS>("hangulFiller");
  const output = repeatInvisible(INVISIBLE_CHARS[charKey], count);
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Field label="invisible character type">
          <select
            className={inputCls}
            value={charKey}
            onChange={(e) => setCharKey(e.target.value as keyof typeof INVISIBLE_CHARS)}
          >
            <option value="hangulFiller">Hangul filler (most reliable)</option>
            <option value="zeroWidthSpace">Zero-width space</option>
            <option value="brailleBlank">Braille blank</option>
            <option value="ideographicSpace">Ideographic space</option>
          </select>
        </Field>
        <Field label="how many">
          <input
            type="number"
            min={1}
            max={200}
            value={count}
            onChange={(e) => setCount(Number(e.target.value) || 1)}
            className={inputCls}
          />
        </Field>
      </div>
      <div className="device-panel p-4 flex items-center justify-between gap-3">
        <code className="text-xs text-[var(--ink-faint)]">
          {output.length} invisible character{output.length > 1 ? "s" : ""} generated — looks blank below:
        </code>
      </div>
      <div className="border border-dashed border-[var(--line-strong)] rounded-sm p-4 min-h-[48px]">{output}</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(output);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="self-start rounded-sm bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm hover:bg-[var(--signal)] transition-colors"
      >
        {copied ? "Copied!" : "Copy invisible text"}
      </button>
    </div>
  );
}

/* -------------------------- Line break widget ---------------------------- */
function LineBreakWidget() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const formatted = useMemo(() => insertLineBreaks(splitPreservingBreaks(text)), [text]);

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Line one\nLine two\nLine three"}
        rows={5}
        className={`${inputCls} resize-y`}
      />
      <div>
        <p className="text-xs text-[var(--ink-soft)] mb-1">Paste-safe formatted output</p>
        <textarea readOnly value={formatted} rows={5} className={`${inputCls} resize-y font-mono-data text-xs`} />
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(formatted);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="self-start rounded-sm bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm hover:bg-[var(--signal)] transition-colors"
      >
        {copied ? "Copied!" : "Copy formatted text"}
      </button>
    </div>
  );
}

/* ---------------------------- Size check widget --------------------------- */
function SizeCheckWidget({ spec }: { spec: string }) {
  const target = IG_SPECS[spec] ?? IG_SPECS.post_square;
  const [dims, setDims] = useState<{ w: number; h: number; name: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const url = URL.createObjectURL(file);
    if (file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        setDims({ w: video.videoWidth, h: video.videoHeight, name: file.name });
        URL.revokeObjectURL(url);
      };
      video.src = url;
    } else {
      const img = new Image();
      img.onload = () => {
        setDims({ w: img.width, h: img.height, name: file.name });
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  }

  const ratio = dims ? (dims.w / dims.h).toFixed(3) : null;
  const targetRatio = (target.width / target.height).toFixed(3);
  const matches = ratio === targetRatio;

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const f = e.dataTransfer.files?.[0];
          if (f) handleFile(f);
        }}
        className="device-panel border-dashed cursor-pointer p-8 text-center text-sm text-[var(--ink-soft)] hover:border-[var(--signal)] transition-colors"
      >
        Click or drop an image/video here — checked locally, never uploaded
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="device-panel p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--ink-faint)] mb-2">Your file</p>
          {dims ? (
            <div className="font-mono-data text-sm space-y-1">
              <p>{dims.w} × {dims.h}px</p>
              <p>ratio {ratio}</p>
              <p className="truncate text-[var(--ink-faint)]">{dims.name}</p>
            </div>
          ) : (
            <p className="text-sm text-[var(--ink-faint)]">No file checked yet</p>
          )}
        </div>
        <div className="device-panel p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--ink-faint)] mb-2">Instagram target — {target.name}</p>
          <div className="font-mono-data text-sm space-y-1">
            <p>{target.width} × {target.height}px</p>
            <p>ratio {targetRatio} ({target.aspectRatio})</p>
            <p className="text-[var(--ink-faint)]">Max {target.maxFileSizeMB}MB · {target.formats.join(", ")}</p>
          </div>
        </div>
      </div>

      {dims && (
        <p className={`text-sm font-medium ${matches ? "text-[var(--ok)]" : "text-[var(--signal-ink)]"}`}>
          {matches
            ? "Matches Instagram's recommended ratio — you're good to upload."
            : "Ratio doesn't match — Instagram will crop or letterbox this file."}
        </p>
      )}

      {target.notes && (
        <ul className="text-sm text-[var(--ink-soft)] list-disc pl-5 space-y-1">
          {target.notes.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------------------------- Safe zone widget ---------------------------- */
function SafeZoneWidget({ spec }: { spec: string }) {
  const target = IG_SPECS[spec] ?? IG_SPECS.reel;
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sz = target.safeZone ?? { top: 220, bottom: 340, sides: 60 };
  const topPct = (sz.top / target.height) * 100;
  const bottomPct = (sz.bottom / target.height) * 100;
  const sidePct = (sz.sides / target.width) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => inputRef.current?.click()}
        className="device-panel border-dashed cursor-pointer p-6 text-center text-sm text-[var(--ink-soft)] hover:border-[var(--signal)] transition-colors"
      >
        Click to upload a cover frame or still image to preview the safe zone
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setImgUrl(URL.createObjectURL(f));
          }}
        />
      </div>

      <div
        className="relative mx-auto w-full max-w-[220px] aspect-[9/16] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--ink)] bg-cover bg-center"
        style={imgUrl ? { backgroundImage: `url(${imgUrl})` } : undefined}
      >
        <div
          className="absolute left-0 right-0 top-0 bg-black/55"
          style={{ height: `${topPct}%` }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 bg-black/55"
          style={{ height: `${bottomPct}%` }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 bg-black/40"
          style={{ width: `${sidePct}%` }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 bg-black/40"
          style={{ width: `${sidePct}%` }}
        />
        <div className="absolute inset-0 border-2 border-dashed border-[var(--calibrate)]" style={{
          top: `${topPct}%`, bottom: `${bottomPct}%`, left: `${sidePct}%`, right: `${sidePct}%`,
        }} />
      </div>
      <p className="text-xs text-center text-[var(--ink-faint)]">
        Shaded area = covered by Instagram&apos;s UI · dashed box = safe zone
      </p>
    </div>
  );
}

/* ------------------------- Aspect ratio calculator ------------------------ */
function AspectRatioWidget() {
  const ratios: Record<string, number> = {
    "1:1 (square)": 1,
    "4:5 (portrait)": 4 / 5,
    "1.91:1 (landscape)": 1.91,
    "9:16 (story/reel)": 9 / 16,
  };
  const [known, setKnown] = useState<"width" | "height">("width");
  const [value, setValue] = useState(1080);
  const [ratioKey, setRatioKey] = useState(Object.keys(ratios)[0]);
  const r = ratios[ratioKey];
  const result = known === "width" ? Math.round(value / r) : Math.round(value * r);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="I know the">
          <select className={inputCls} value={known} onChange={(e) => setKnown(e.target.value as "width" | "height")}>
            <option value="width">Width</option>
            <option value="height">Height</option>
          </select>
        </Field>
        <Field label="value (px)">
          <input type="number" className={inputCls} value={value} onChange={(e) => setValue(Number(e.target.value) || 0)} />
        </Field>
        <Field label="target ratio">
          <select className={inputCls} value={ratioKey} onChange={(e) => setRatioKey(e.target.value)}>
            {Object.keys(ratios).map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </Field>
      </div>
      <Readout label={known === "width" ? "matching height" : "matching width"} value={result} unit="px" />
    </div>
  );
}

/* ----------------------------- Crop calculator ----------------------------- */
function CropCalcWidget() {
  const targets: Record<string, number> = {
    "Square (1:1)": 1,
    "Portrait (4:5)": 4 / 5,
    "Landscape (1.91:1)": 1.91,
    "Story/Reel (9:16)": 9 / 16,
  };
  const [w, setW] = useState(1600);
  const [h, setH] = useState(1200);
  const [targetKey, setTargetKey] = useState(Object.keys(targets)[0]);
  const targetRatio = targets[targetKey];
  const currentRatio = w / h;

  let cropW = w;
  let cropH = h;
  if (currentRatio > targetRatio) {
    cropW = Math.round(h * targetRatio);
  } else {
    cropH = Math.round(w / targetRatio);
  }
  const trimmedW = w - cropW;
  const trimmedH = h - cropH;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="original width (px)">
          <input type="number" className={inputCls} value={w} onChange={(e) => setW(Number(e.target.value) || 1)} />
        </Field>
        <Field label="original height (px)">
          <input type="number" className={inputCls} value={h} onChange={(e) => setH(Number(e.target.value) || 1)} />
        </Field>
        <Field label="target ratio">
          <select className={inputCls} value={targetKey} onChange={(e) => setTargetKey(e.target.value)}>
            {Object.keys(targets).map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="flex flex-wrap gap-3">
        <Readout label="cropped size" value={`${cropW} × ${cropH}`} unit="px" />
        <Readout label="trimmed from sides" value={trimmedW} unit="px" />
        <Readout label="trimmed top/bottom" value={trimmedH} unit="px" />
      </div>
    </div>
  );
}

/* ---------------------------- Image compressor ----------------------------- */
function CompressorWidget() {
  const [original, setOriginal] = useState<{ url: string; size: number } | null>(null);
  const [compressed, setCompressed] = useState<{ url: string; size: number } | null>(null);
  const [quality, setQuality] = useState(0.75);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<File | null>(null);

  function compress(file: File, q: number) {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const outUrl = URL.createObjectURL(blob);
          setCompressed({ url: outUrl, size: blob.size });
        },
        "image/jpeg",
        q
      );
    };
    img.src = url;
  }

  function handleFile(file: File) {
    fileRef.current = file;
    setOriginal({ url: URL.createObjectURL(file), size: file.size });
    compress(file, quality);
  }

  function handleQuality(q: number) {
    setQuality(q);
    if (fileRef.current) compress(fileRef.current, q);
  }

  const kb = (n: number) => `${(n / 1024).toFixed(0)} KB`;

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => inputRef.current?.click()}
        className="device-panel border-dashed cursor-pointer p-6 text-center text-sm text-[var(--ink-soft)] hover:border-[var(--signal)] transition-colors"
      >
        Click to choose an image — compressed entirely in your browser
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>

      {original && (
        <>
          <Field label={`quality: ${Math.round(quality * 100)}%`}>
            <input
              type="range"
              min={0.2}
              max={0.95}
              step={0.05}
              value={quality}
              onChange={(e) => handleQuality(Number(e.target.value))}
            />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Readout label="original size" value={kb(original.size)} />
            {compressed && <Readout label="compressed size" value={kb(compressed.size)} />}
          </div>
          {compressed && (
            <a
              href={compressed.url}
              download="compressed-instagram-image.jpg"
              className="self-start rounded-sm bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm hover:bg-[var(--signal)] transition-colors"
            >
              Download compressed image
            </a>
          )}
        </>
      )}
    </div>
  );
}

/* ------------------------------ Engagement -------------------------------- */
function EngagementWidget() {
  const [followers, setFollowers] = useState(10000);
  const [likes, setLikes] = useState(400);
  const [comments, setComments] = useState(20);
  const [saves, setSaves] = useState(0);
  const [shares, setShares] = useState(0);
  const rate = engagementRate(likes, comments, followers, saves, shares);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="followers"><input type="number" className={inputCls} value={followers} onChange={(e) => setFollowers(Number(e.target.value) || 0)} /></Field>
        <Field label="likes"><input type="number" className={inputCls} value={likes} onChange={(e) => setLikes(Number(e.target.value) || 0)} /></Field>
        <Field label="comments"><input type="number" className={inputCls} value={comments} onChange={(e) => setComments(Number(e.target.value) || 0)} /></Field>
        <Field label="saves (optional)"><input type="number" className={inputCls} value={saves} onChange={(e) => setSaves(Number(e.target.value) || 0)} /></Field>
        <Field label="shares (optional)"><input type="number" className={inputCls} value={shares} onChange={(e) => setShares(Number(e.target.value) || 0)} /></Field>
      </div>
      <Readout label="engagement rate" value={rate.toFixed(2)} unit="%" />
    </div>
  );
}

function ReelEngagementWidget() {
  const [plays, setPlays] = useState(20000);
  const [likes, setLikes] = useState(900);
  const [comments, setComments] = useState(30);
  const [shares, setShares] = useState(50);
  const rate = reelEngagementRate(likes, comments, plays, shares);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="plays / views"><input type="number" className={inputCls} value={plays} onChange={(e) => setPlays(Number(e.target.value) || 0)} /></Field>
        <Field label="likes"><input type="number" className={inputCls} value={likes} onChange={(e) => setLikes(Number(e.target.value) || 0)} /></Field>
        <Field label="comments"><input type="number" className={inputCls} value={comments} onChange={(e) => setComments(Number(e.target.value) || 0)} /></Field>
        <Field label="shares"><input type="number" className={inputCls} value={shares} onChange={(e) => setShares(Number(e.target.value) || 0)} /></Field>
      </div>
      <Readout label="engagement rate per play" value={rate.toFixed(2)} unit="%" />
    </div>
  );
}

function GrowthWidget() {
  const [start, setStart] = useState(5000);
  const [end, setEnd] = useState(5600);
  const { absolute, percent } = followerGrowthRate(start, end);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="starting followers"><input type="number" className={inputCls} value={start} onChange={(e) => setStart(Number(e.target.value) || 0)} /></Field>
        <Field label="current followers"><input type="number" className={inputCls} value={end} onChange={(e) => setEnd(Number(e.target.value) || 0)} /></Field>
      </div>
      <div className="flex flex-wrap gap-3">
        <Readout label="followers gained" value={absolute} />
        <Readout label="growth rate" value={percent.toFixed(2)} unit="%" />
      </div>
    </div>
  );
}

function FrequencyWidget() {
  const [perWeek, setPerWeek] = useState(4);
  const [days, setDays] = useState(30);
  const { postsInPeriod, daysBetweenPosts } = postingFrequency(perWeek, days);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="posts per week"><input type="number" className={inputCls} value={perWeek} onChange={(e) => setPerWeek(Number(e.target.value) || 0)} /></Field>
        <Field label="period (days)"><input type="number" className={inputCls} value={days} onChange={(e) => setDays(Number(e.target.value) || 1)} /></Field>
      </div>
      <div className="flex flex-wrap gap-3">
        <Readout label={`posts in ${days} days`} value={postsInPeriod.toFixed(1)} />
        <Readout label="days between posts" value={daysBetweenPosts.toFixed(1)} />
      </div>
    </div>
  );
}

function RateWidget() {
  const [followers, setFollowers] = useState(15000);
  const [engagement, setEngagement] = useState(3);
  const [niche, setNiche] = useState<"budget" | "standard" | "premium">("standard");
  const est = influencerRateEstimate(followers, engagement, niche);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="followers"><input type="number" className={inputCls} value={followers} onChange={(e) => setFollowers(Number(e.target.value) || 0)} /></Field>
        <Field label="avg engagement rate (%)"><input type="number" step="0.1" className={inputCls} value={engagement} onChange={(e) => setEngagement(Number(e.target.value) || 0)} /></Field>
        <Field label="niche tier">
          <select className={inputCls} value={niche} onChange={(e) => setNiche(e.target.value as typeof niche)}>
            <option value="budget">Budget</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </Field>
      </div>
      <div className="flex flex-wrap gap-3">
        <Readout label="est. per post" value={`$${est.perPost}`} />
        <Readout label="est. per story" value={`$${est.perStory}`} />
        <Readout label="est. per reel" value={`$${est.perReel}`} />
      </div>
    </div>
  );
}

function SponsoredWidget() {
  const [followers, setFollowers] = useState(15000);
  const [engagement, setEngagement] = useState(3);
  const [cpm, setCpm] = useState(10);
  const value = sponsoredPostValue(followers, engagement, cpm);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="followers"><input type="number" className={inputCls} value={followers} onChange={(e) => setFollowers(Number(e.target.value) || 0)} /></Field>
        <Field label="avg engagement rate (%)"><input type="number" step="0.1" className={inputCls} value={engagement} onChange={(e) => setEngagement(Number(e.target.value) || 0)} /></Field>
        <Field label="target CPM ($)"><input type="number" className={inputCls} value={cpm} onChange={(e) => setCpm(Number(e.target.value) || 0)} /></Field>
      </div>
      <Readout label="estimated post value" value={`$${value}`} />
    </div>
  );
}

/* ----------------------------- Media kit ----------------------------------- */
function MediaKitWidget() {
  const [handle, setHandle] = useState("@yourhandle");
  const [followers, setFollowers] = useState("15,000");
  const [engagement, setEngagement] = useState("3.2%");
  const [pillars, setPillars] = useState("Fitness, meal prep, motivation");
  const [reach, setReach] = useState("40,000 avg Reel plays");
  const [copied, setCopied] = useState(false);

  const summary = `${handle} — Instagram Media Kit
Followers: ${followers}
Average engagement rate: ${engagement}
Average Reel reach: ${reach}
Content pillars: ${pillars}

Generated with the Instagram Media Kit Generator — grohubz.com`;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="handle"><input className={inputCls} value={handle} onChange={(e) => setHandle(e.target.value)} /></Field>
        <Field label="followers"><input className={inputCls} value={followers} onChange={(e) => setFollowers(e.target.value)} /></Field>
        <Field label="avg engagement rate"><input className={inputCls} value={engagement} onChange={(e) => setEngagement(e.target.value)} /></Field>
        <Field label="avg reel reach"><input className={inputCls} value={reach} onChange={(e) => setReach(e.target.value)} /></Field>
      </div>
      <Field label="content pillars">
        <input className={inputCls} value={pillars} onChange={(e) => setPillars(e.target.value)} />
      </Field>
      <pre className="device-panel p-4 text-sm whitespace-pre-wrap font-mono-data">{summary}</pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(summary);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="self-start rounded-sm bg-[var(--ink)] text-[var(--paper)] px-4 py-2 text-sm hover:bg-[var(--signal)] transition-colors"
      >
        {copied ? "Copied!" : "Copy media kit"}
      </button>
    </div>
  );
}

/* ---------------------------- Bio previewer --------------------------------- */
function BioPreviewWidget() {
  const [name, setName] = useState("Your Display Name");
  const [username, setUsername] = useState("yourusername");
  const [bio, setBio] = useState("Helping creators grow on Instagram 🚀\nLinks below 👇");

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="flex flex-col gap-3">
        <Field label="display name"><input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} /></Field>
        <Field label="username"><input className={inputCls} value={username} onChange={(e) => setUsername(e.target.value)} /></Field>
        <Field label="bio">
          <textarea className={`${inputCls} resize-y`} rows={4} value={bio} onChange={(e) => setBio(e.target.value)} />
        </Field>
      </div>
      <div className="device-panel p-5 flex flex-col items-center gap-2 max-w-xs mx-auto">
        <div className="w-20 h-20 rounded-full bg-[var(--line)]" />
        <p className="font-semibold text-sm">{username}</p>
        <p className="text-sm text-center whitespace-pre-wrap">{name}{"\n"}{bio}</p>
      </div>
    </div>
  );
}

/* -------------------------- Carousel previewer ------------------------------ */
function CarouselPreviewWidget() {
  const [images, setImages] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList) {
    const urls = Array.from(files).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls]);
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        onClick={() => inputRef.current?.click()}
        className="device-panel border-dashed cursor-pointer p-4 text-center text-sm text-[var(--ink-soft)] w-full max-w-xs hover:border-[var(--signal)] transition-colors"
      >
        Click to add slides
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>
      {images.length > 0 && (
        <>
          <div className="relative w-full max-w-xs aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] bg-cover bg-center" style={{ backgroundImage: `url(${images[idx]})` }}>
            <span className="absolute top-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">
              {idx + 1}/{images.length}
            </span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIdx((i) => Math.max(0, i - 1))} className="px-3 py-1.5 text-sm border border-[var(--line)] rounded-sm">← Prev</button>
            <button onClick={() => setIdx((i) => Math.min(images.length - 1, i + 1))} className="px-3 py-1.5 text-sm border border-[var(--line)] rounded-sm">Next →</button>
          </div>
        </>
      )}
    </div>
  );
}

/* ------------------------------ QR code widget ------------------------------ */
function QrCodeWidget({ mode }: { mode: "profile" | "reel" }) {
  const [value, setValue] = useState("");
  const url =
    mode === "profile"
      ? value
        ? `https://instagram.com/${value.replace(/^@/, "")}`
        : ""
      : value;
  const qrSrc = url
    ? `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(url)}`
    : null;

  return (
    <div className="flex flex-col gap-4 items-start">
      <Field label={mode === "profile" ? "your instagram username" : "reel share link"}>
        <input
          className={inputCls + " w-full sm:w-96"}
          placeholder={mode === "profile" ? "yourusername" : "https://www.instagram.com/reel/..."}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Field>
      {qrSrc && (
        <div className="device-panel p-4 flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qrSrc} alt="Generated QR code" width={200} height={200} />
          <a href={qrSrc} download="instagram-qr-code.png" className="text-sm underline-signal">
            Download QR code
          </a>
        </div>
      )}
    </div>
  );
}

/* --------------------------------- Dispatcher -------------------------------- */
export default function ToolWidget({ tool }: { tool: ToolConfig }) {
  const props = tool.widgetProps ?? {};
  switch (tool.widget) {
    case "counter":
      return <CounterWidget mode={(props.mode as "caption" | "bio" | "hashtag") ?? "caption"} />;
    case "invisible":
      return <InvisibleWidget />;
    case "linebreak":
      return <LineBreakWidget />;
    case "sizecheck":
      return <SizeCheckWidget spec={props.spec ?? "post_square"} />;
    case "safezone":
      return <SafeZoneWidget spec={props.spec ?? "reel"} />;
    case "aspectratio":
      return <AspectRatioWidget />;
    case "cropcalc":
      return <CropCalcWidget />;
    case "compressor":
      return <CompressorWidget />;
    case "engagement":
      return <EngagementWidget />;
    case "reelengagement":
      return <ReelEngagementWidget />;
    case "growth":
      return <GrowthWidget />;
    case "frequency":
      return <FrequencyWidget />;
    case "rate":
      return <RateWidget />;
    case "sponsored":
      return <SponsoredWidget />;
    case "mediakit":
      return <MediaKitWidget />;
    case "biopreview":
      return <BioPreviewWidget />;
    case "carouselpreview":
      return <CarouselPreviewWidget />;
    case "qrcode":
      return <QrCodeWidget mode={(props.mode as "profile" | "reel") ?? "profile"} />;
    default:
      return null;
  }
}
