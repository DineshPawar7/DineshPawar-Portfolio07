export function countGraphemes(text: string): number {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(seg.segment(text)).length;
  }
  return Array.from(text).length;
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function extractHashtags(text: string): string[] {
  const matches = text.match(new RegExp("#[\\p{L}\\p{N}_]+", "gu"));
  return matches ? matches : [];
}

export function extractMentions(text: string): string[] {
  const matches = text.match(/@[A-Za-z0-9_.]+/g);
  return matches ? matches : [];
}

// Invisible / zero-width characters commonly used to fake blank IG bio lines
export const INVISIBLE_CHARS = {
  zeroWidthSpace: "\u200B",
  zeroWidthNonJoiner: "\u200C",
  hangulFiller: "\u3164",
  brailleBlank: "\u2800",
  ideographicSpace: "\u3000",
};

export function repeatInvisible(char: string, count: number): string {
  const safeCount = Math.max(1, Math.min(count, 200));
  return char.repeat(safeCount);
}

export function insertLineBreaks(lines: string[]): string {
  // Instagram strips plain newlines pasted from most editors; joining with
  // the hangul filler on its own line preserves blank rows in captions/bio.
  return lines.join("\n" + INVISIBLE_CHARS.hangulFiller + "\n");
}

export function splitPreservingBreaks(text: string): string[] {
  return text.split(/\r?\n/);
}
