export type Spec = {
  label: string;
  value: string;
};

export type SizeSpec = {
  key: string;
  name: string;
  width: number;
  height: number;
  aspectRatio: string;
  maxFileSizeMB: number;
  formats: string[];
  notes?: string[];
  safeZone?: { top: number; bottom: number; sides: number };
};

export const IG_SPECS: Record<string, SizeSpec> = {
  post_square: {
    key: "post_square",
    name: "Feed post — square",
    width: 1080,
    height: 1080,
    aspectRatio: "1:1",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG"],
    notes: ["Instagram compresses anything wider than 1080px on export."],
  },
  post_portrait: {
    key: "post_portrait",
    name: "Feed post — portrait",
    width: 1080,
    height: 1350,
    aspectRatio: "4:5",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG"],
    notes: ["Portrait posts take up the most vertical space in the feed."],
  },
  post_landscape: {
    key: "post_landscape",
    name: "Feed post — landscape",
    width: 1080,
    height: 566,
    aspectRatio: "1.91:1",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG"],
  },
  carousel: {
    key: "carousel",
    name: "Carousel slide",
    width: 1080,
    height: 1350,
    aspectRatio: "4:5 (recommended, must match across all slides)",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG"],
    notes: [
      "All slides in one carousel must share the same aspect ratio.",
      "Up to 20 slides (10 for older accounts) per carousel.",
    ],
  },
  story: {
    key: "story",
    name: "Story",
    width: 1080,
    height: 1920,
    aspectRatio: "9:16",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG", "MP4"],
    safeZone: { top: 250, bottom: 340, sides: 60 },
    notes: ["Keep text and logos inside the safe zone so the UI never covers them."],
  },
  reel: {
    key: "reel",
    name: "Reel",
    width: 1080,
    height: 1920,
    aspectRatio: "9:16",
    maxFileSizeMB: 4000,
    formats: ["MP4", "MOV"],
    safeZone: { top: 220, bottom: 340, sides: 60 },
    notes: [
      "Max length 90 seconds for most placements.",
      "Frame rate 30fps recommended.",
    ],
  },
  reel_cover: {
    key: "reel_cover",
    name: "Reel cover",
    width: 1080,
    height: 1920,
    aspectRatio: "9:16",
    maxFileSizeMB: 30,
    formats: ["JPG", "PNG"],
    notes: ["The cover crops to a 3:4 thumbnail on your grid — keep subjects centred."],
  },
  profile_picture: {
    key: "profile_picture",
    name: "Profile picture",
    width: 320,
    height: 320,
    aspectRatio: "1:1",
    maxFileSizeMB: 10,
    formats: ["JPG", "PNG"],
    notes: ["Displayed as a circle — keep important detail away from the corners."],
  },
};

export const CHAR_LIMITS = {
  caption: 2200,
  captionVisibleBeforeMore: 125,
  bio: 150,
  hashtagsPerPost: 30,
  username: 30,
  displayName: 30,
  altText: 100,
};
