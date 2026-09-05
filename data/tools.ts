export type WidgetType =
  | "counter"
  | "invisible"
  | "linebreak"
  | "sizecheck"
  | "safezone"
  | "aspectratio"
  | "cropcalc"
  | "compressor"
  | "engagement"
  | "reelengagement"
  | "growth"
  | "frequency"
  | "rate"
  | "sponsored"
  | "mediakit"
  | "biopreview"
  | "carouselpreview"
  | "qrcode";

export type ToolCategory =
  | "Text & Captions"
  | "Sizes & Dimensions"
  | "Growth & Money"
  | "Preview & Generate";

export type ToolConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ToolCategory;
  widget: WidgetType;
  widgetProps?: Record<string, string>;
  description: string;
  keyword: string;
  intro: string;
  steps: string[];
  tips: string[];
  faqs: { q: string; a: string }[];
};

export const TOOLS: ToolConfig[] = [
  {
    slug: "Instagram-Caption-Character-Counter",
    title: "Instagram Caption Character Counter",
    shortTitle: "Caption Character Counter",
    category: "Text & Captions",
    widget: "counter",
    widgetProps: { mode: "caption" },
    keyword: "instagram caption character counter",
    description:
      "Count characters, words and hashtags in your Instagram caption before you post, with a live view of the 125-character cut-off.",
    intro:
      "Instagram allows up to 2,200 characters in a caption, but only shows the first 125 before folding the rest behind \"more\". This counter shows both numbers live so you never get cut off mid-sentence.",
    steps: [
      "Paste or type your caption into the box above.",
      "Watch the live character, word and hashtag counts update as you type.",
      "Check the 125-character marker to see exactly what shows before the \"more\" fold.",
      "Trim or rewrite until the counter turns green.",
    ],
    tips: [
      "Put your strongest line — the hook or the call-to-action — inside the first 125 characters.",
      "Emoji and accented characters can count as more than one character each; the live counter accounts for this automatically.",
      "Save your favourite caption formats as templates so you're not rewriting a hook from scratch every time.",
    ],
    faqs: [
      {
        q: "How many characters can an Instagram caption have?",
        a: "Instagram's hard limit is 2,200 characters, including spaces, emoji and hashtags.",
      },
      {
        q: "How much of my caption shows before \"more\"?",
        a: "On most devices only the first 125 characters (roughly two short lines) show before Instagram folds the rest.",
      },
      {
        q: "Do hashtags count toward the caption limit?",
        a: "Yes. Hashtags placed in the caption itself count toward the same 2,200-character limit as the rest of your text.",
      },
    ],
  },
  {
    slug: "Instagram-Bio-Character-Counter",
    title: "Instagram Bio Character Counter",
    shortTitle: "Bio Character Counter",
    category: "Text & Captions",
    widget: "counter",
    widgetProps: { mode: "bio" },
    keyword: "instagram bio character counter",
    description:
      "Check your Instagram bio against the 150-character limit in real time, with a breakdown of lines and emoji.",
    intro:
      "Your Instagram bio has a strict 150-character ceiling — line breaks, emoji and links all eat into that budget. This counter keeps a live tally so your bio never gets silently truncated when you hit save.",
    steps: [
      "Type or paste your draft bio into the box.",
      "Watch the character count against the 150-character limit.",
      "Use the line count to see how it will wrap on a profile.",
      "Copy the final version once it fits.",
    ],
    tips: [
      "Front-load who you help and how in the first line — most visitors decide to follow within seconds.",
      "A bio link tool (like the one in your Instagram settings) doesn't count against your 150 characters, but any text you write around it does.",
      "Use line breaks sparingly; each one still 'costs' a character.",
    ],
    faqs: [
      {
        q: "What is the Instagram bio character limit?",
        a: "150 characters, including spaces, emoji and line breaks.",
      },
      {
        q: "Do emoji take up more than one character in a bio?",
        a: "Many emoji count as two characters because of how they're encoded. The live counter reflects this so your number matches what Instagram will show.",
      },
      {
        q: "Can I use line breaks in my Instagram bio?",
        a: "Yes — Instagram's own bio field supports real line breaks, unlike captions and comments which usually strip them when pasted from other apps.",
      },
    ],
  },
  {
    slug: "Instagram-Hashtag-Counter",
    title: "Instagram Hashtag Counter",
    shortTitle: "Hashtag Counter",
    category: "Text & Captions",
    widget: "counter",
    widgetProps: { mode: "hashtag" },
    keyword: "instagram hashtag counter",
    description:
      "Count and list every hashtag in your caption or comment, and check it against Instagram's 30-hashtag limit.",
    intro:
      "Instagram caps you at 30 hashtags per post, whether they sit in the caption or the first comment. Go over that and Instagram will reject the whole comment. This tool counts, lists and de-duplicates your hashtags instantly.",
    steps: [
      "Paste your caption or hashtag block into the box.",
      "Review the extracted hashtag list and total count.",
      "Remove duplicates or overly broad tags flagged in the list.",
      "Copy the cleaned-up hashtag set back into Instagram.",
    ],
    tips: [
      "Mixing hashtag sizes (some with millions of posts, some niche) tends to outperform 30 identical mega-tags.",
      "Duplicate hashtags across every post can look spammy to the algorithm — rotate a few sets.",
      "Posting hashtags in the first comment keeps the caption itself clean and readable.",
    ],
    faqs: [
      {
        q: "How many hashtags can I use on Instagram?",
        a: "Up to 30 per post or reel, combined across the caption and first comment.",
      },
      {
        q: "Do hashtags in comments still help reach?",
        a: "Yes, hashtags added in the first comment are treated the same as hashtags in the caption for discovery purposes.",
      },
      {
        q: "Does using fewer hashtags hurt reach?",
        a: "No — using a smaller number of well-targeted hashtags usually performs better than stuffing all 30 slots.",
      },
    ],
  },
  {
    slug: "Instagram-Invisible-Character-Generator",
    title: "Instagram Invisible Character Generator",
    shortTitle: "Invisible Character Generator",
    category: "Text & Captions",
    widget: "invisible",
    keyword: "instagram invisible character generator",
    description:
      "Generate invisible / blank characters to create empty lines in your Instagram bio, captions and comments.",
    intro:
      "Instagram strips plain blank lines from bios and often from pasted captions. An invisible character — a character that renders as blank but isn't actually empty — lets you force real spacing in your layout.",
    steps: [
      "Choose how many invisible characters you need.",
      "Click generate and copy the output.",
      "Paste it into your Instagram bio or caption wherever you need a blank line.",
      "Preview the result before publishing.",
    ],
    tips: [
      "Use one invisible line between paragraphs in a caption to improve readability without looking cluttered.",
      "Some invisible characters render differently across devices — test on both iOS and Android if your layout needs to be pixel-perfect.",
      "Don't overuse blank lines in a bio; you only have 150 characters total.",
    ],
    faqs: [
      {
        q: "Why does Instagram remove my blank lines?",
        a: "Instagram's text fields often collapse consecutive plain line breaks. An invisible character keeps the line 'non-empty' so the break survives.",
      },
      {
        q: "Is using invisible characters against Instagram's rules?",
        a: "No, it's a formatting trick, not a policy violation — it's commonly used for bio and caption layout.",
      },
      {
        q: "Will invisible characters show up as boxes or question marks?",
        a: "The characters generated here are chosen specifically because they render as blank space across current iOS, Android and web versions of Instagram.",
      },
    ],
  },
  {
    slug: "Instagram-Line-Break-Generator",
    title: "Instagram Line Break Generator",
    shortTitle: "Line Break Generator",
    category: "Text & Captions",
    widget: "linebreak",
    keyword: "instagram line break generator",
    description:
      "Format multi-line captions and bios so line breaks survive when pasted into Instagram.",
    intro:
      "Type or paste your text with normal line breaks, and this tool converts it into a version that keeps every blank line intact once pasted into Instagram's caption or bio field.",
    steps: [
      "Write your caption or bio in the box, one idea per line.",
      "Click format to convert it into a paste-safe version.",
      "Copy the formatted text.",
      "Paste directly into Instagram — the spacing will hold.",
    ],
    tips: [
      "Short lines with a blank row between them are far easier to skim on mobile than one dense paragraph.",
      "Save a formatted caption template for recurring post types like weekly tips or product drops.",
      "Test the pasted result in the Instagram app before publishing, since formatting can vary between the app and web composer.",
    ],
    faqs: [
      {
        q: "Why do my line breaks disappear when I paste into Instagram?",
        a: "Instagram often collapses multiple consecutive blank lines, especially when text is pasted from Notes, Word or a browser.",
      },
      {
        q: "Does this work for both captions and bios?",
        a: "Yes, the formatted text pastes safely into the caption composer, comments and the bio field.",
      },
      {
        q: "Will this change my wording?",
        a: "No — only the invisible spacing characters are added between lines. Your text stays exactly as written.",
      },
    ],
  },
  {
    slug: "Instagram-Reel-Size-Checker",
    title: "Instagram Reel Size Checker",
    shortTitle: "Reel Size Checker",
    category: "Sizes & Dimensions",
    widget: "sizecheck",
    widgetProps: { spec: "reel" },
    keyword: "instagram reel size checker",
    description:
      "Check whether your video file matches Instagram's recommended 1080×1920 Reel resolution before you upload.",
    intro:
      "Reels are full-screen 9:16 video. Upload something off-ratio and Instagram will crop or letterbox it automatically — usually cutting off exactly the part you wanted visible. Check your file's dimensions here first.",
    steps: [
      "Select your video file (checked locally in your browser — nothing uploads anywhere).",
      "Review the detected width, height and aspect ratio.",
      "Compare it against the 1080×1920 (9:16) recommendation.",
      "Re-export in your editor if the ratio doesn't match.",
    ],
    tips: [
      "Shoot vertically from the start where possible — upscaling a landscape clip to fill 9:16 loses sharpness.",
      "Keep key action centred; Instagram's UI overlays the top and bottom of the frame.",
      "Export at 30fps and H.264 for the most reliable playback quality after Instagram's compression.",
    ],
    faqs: [
      {
        q: "What is the correct Reel resolution?",
        a: "1080×1920 pixels, a 9:16 aspect ratio, is Instagram's recommended Reel size.",
      },
      {
        q: "What happens if my video isn't 9:16?",
        a: "Instagram will letterbox (add bars) or crop the video to fit the 9:16 player, which can cut off subjects near the edges.",
      },
      {
        q: "What's the maximum Reel length?",
        a: "Most accounts can post Reels up to 90 seconds long, though this has expanded over time — check the composer for your account's current limit.",
      },
    ],
  },
  {
    slug: "Instagram-Reel-Safe-Zone-Checker",
    title: "Instagram Reel Safe Zone Checker",
    shortTitle: "Reel Safe Zone Checker",
    category: "Sizes & Dimensions",
    widget: "safezone",
    widgetProps: { spec: "reel" },
    keyword: "instagram reel safe zone checker",
    description:
      "Overlay Instagram's Reel UI safe zone on your cover or frame so captions, profile info and buttons never cover your subject.",
    intro:
      "Instagram's own interface — caption text, profile handle, like and share buttons — sits on top of every Reel. This tool overlays the real safe-zone margins on your image so you can see exactly what the UI will cover.",
    steps: [
      "Upload a still frame or cover image from your Reel.",
      "The safe-zone overlay appears on top automatically.",
      "Check that faces, text and calls-to-action sit inside the clear centre area.",
      "Re-frame or re-edit if anything important falls under the overlay.",
    ],
    tips: [
      "Keep any on-screen text within the middle 60% of the frame vertically.",
      "The right-hand action bar (like, comment, share, save) covers a consistent strip — avoid placing subtitles there.",
      "Test your cover frame specifically, since it's what shows on your profile grid without any UI overlay at all.",
    ],
    faqs: [
      {
        q: "What is the Reel safe zone?",
        a: "The area of the 1080×1920 frame not covered by Instagram's caption text, username or interaction buttons.",
      },
      {
        q: "How much space do the top and bottom UI elements take?",
        a: "Roughly 220px at the top and 340px at the bottom on a 1920px-tall frame, though this can shift slightly by device.",
      },
      {
        q: "Does the safe zone apply to the grid thumbnail too?",
        a: "No — the safe zone only matters while the Reel is playing in the full-screen viewer. The static cover on your profile grid isn't covered by any UI.",
      },
    ],
  },
  {
    slug: "Instagram-Reel-Cover-Size-Checker",
    title: "Instagram Reel Cover Size Checker",
    shortTitle: "Reel Cover Size Checker",
    category: "Sizes & Dimensions",
    widget: "sizecheck",
    widgetProps: { spec: "reel_cover" },
    keyword: "instagram reel cover size checker",
    description:
      "Check a custom Reel cover image against Instagram's recommended dimensions and crop before you upload it.",
    intro:
      "A custom Reel cover shows on your profile grid and in the Reels tab — it's often the deciding factor in whether someone taps play. This tool checks your cover image's size and shows how it will be cropped.",
    steps: [
      "Upload your cover image.",
      "See its exact pixel dimensions and aspect ratio.",
      "Preview the 3:4 grid crop Instagram will apply.",
      "Adjust and re-upload if key details sit outside the crop.",
    ],
    tips: [
      "Design your cover at the full 1080×1920 canvas even though the grid only shows a 3:4 slice — you get more flexibility repositioning later.",
      "Keep a consistent cover style across Reels so your profile grid reads as a cohesive series.",
      "Bright, high-contrast covers stand out more against the white Instagram interface.",
    ],
    faqs: [
      {
        q: "What size should a Reel cover image be?",
        a: "Upload at 1080×1920 pixels — the same canvas as the Reel itself — even though only a 3:4 crop shows on the grid.",
      },
      {
        q: "Can I use a photo instead of a video frame as the cover?",
        a: "Yes, Instagram lets you upload a separate image from your camera roll as the custom cover instead of selecting a frame from the video.",
      },
      {
        q: "Why does my cover look cropped on the profile grid?",
        a: "The grid displays a 3:4 portion of your 9:16 cover image, so anything near the very top or bottom edge gets trimmed from the thumbnail.",
      },
    ],
  },
  {
    slug: "Instagram-Story-Size-Checker",
    title: "Instagram Story Size Checker",
    shortTitle: "Story Size Checker",
    category: "Sizes & Dimensions",
    widget: "sizecheck",
    widgetProps: { spec: "story" },
    keyword: "instagram story size checker",
    description:
      "Verify your Story image or video matches Instagram's 1080×1920 full-screen format before posting.",
    intro:
      "Stories fill the entire phone screen at a 9:16 ratio. Anything off-spec gets padded with blurred bars or cropped at the edges. Check your file here before it goes live for 24 hours.",
    steps: [
      "Upload your Story image or video.",
      "Review the detected resolution and aspect ratio.",
      "Compare against the 1080×1920 target.",
      "Resize in your editor if it doesn't match.",
    ],
    tips: [
      "Design text and stickers within the safe zone — the reply bar and profile tag sit at the very top and bottom.",
      "Vertical video shot in-app avoids sizing issues entirely.",
      "Use consistent Story templates so your highlight covers feel cohesive later.",
    ],
    faqs: [
      {
        q: "What is the correct Instagram Story size?",
        a: "1080×1920 pixels, a 9:16 aspect ratio.",
      },
      {
        q: "What happens if I upload a square photo as a Story?",
        a: "Instagram adds blurred or coloured bars above and below to fill the vertical frame, unless you manually crop or zoom first.",
      },
      {
        q: "Do Story videos have a length limit?",
        a: "Each Story segment can run up to 60 seconds; longer videos are automatically split into multiple segments.",
      },
    ],
  },
  {
    slug: "Instagram-Post-Size-Checker",
    title: "Instagram Post Size Checker",
    shortTitle: "Post Size Checker",
    category: "Sizes & Dimensions",
    widget: "sizecheck",
    widgetProps: { spec: "post_square" },
    keyword: "instagram post size checker",
    description:
      "Check your feed post image against Instagram's square, portrait and landscape size recommendations.",
    intro:
      "Feed posts support three shapes — square, portrait and landscape — each with its own ideal dimensions. Upload your image to see which shape it fits and whether Instagram will crop it before publishing.",
    steps: [
      "Upload the image you plan to post.",
      "Check its detected width, height and aspect ratio.",
      "Compare it against the square (1:1), portrait (4:5) and landscape (1.91:1) targets.",
      "Crop or re-export to match your intended shape exactly.",
    ],
    tips: [
      "Portrait (4:5) posts take up the most vertical space in the feed, which tends to help visibility while scrolling.",
      "Keep subjects away from the extreme edges — Instagram's own crop preview sometimes shifts slightly on different devices.",
      "Export at 1080px on the long edge; anything larger just gets compressed back down by Instagram anyway.",
    ],
    faqs: [
      {
        q: "What is the best Instagram post size in 2026?",
        a: "1080×1350 (4:5 portrait) is generally recommended because it occupies the most feed real estate, while 1080×1080 (1:1 square) remains the safest default.",
      },
      {
        q: "Will Instagram crop my landscape photo?",
        a: "Landscape posts are capped at a 1.91:1 ratio; anything wider gets cropped to fit before it publishes.",
      },
      {
        q: "Does image size affect quality after upload?",
        a: "Instagram compresses every upload, so starting from a sharp, correctly-sized file minimises visible quality loss.",
      },
    ],
  },
  {
    slug: "Instagram-Carousel-Size-Checker",
    title: "Instagram Carousel Size Checker",
    shortTitle: "Carousel Size Checker",
    category: "Sizes & Dimensions",
    widget: "sizecheck",
    widgetProps: { spec: "carousel" },
    keyword: "instagram carousel size checker",
    description:
      "Make sure every slide in your Instagram carousel shares the same aspect ratio before you upload.",
    intro:
      "Instagram forces every slide in a carousel to share one aspect ratio — set by whichever slide you add first. Mixing ratios means later slides get silently cropped. Check each slide here before you build the post.",
    steps: [
      "Upload each slide you plan to include, one at a time.",
      "Compare the detected aspect ratio across all slides.",
      "Flag and fix any slide that doesn't match the rest.",
      "Re-order and upload once every slide lines up.",
    ],
    tips: [
      "Decide your carousel's aspect ratio (square or 4:5) before designing any individual slide.",
      "Design in a single template file with locked canvas dimensions to avoid mismatches later.",
      "Carousels support up to 20 slides — plan a clear narrative arc rather than filling every slot.",
    ],
    faqs: [
      {
        q: "Can carousel slides have different aspect ratios?",
        a: "No — Instagram locks every slide to the aspect ratio of the first slide you upload, cropping any slide that doesn't match.",
      },
      {
        q: "How many slides can a carousel have?",
        a: "Up to 20 slides on most current accounts, including a mix of photos and short videos.",
      },
      {
        q: "What's the best aspect ratio for a carousel?",
        a: "4:5 portrait is popular because it maximises vertical feed space while comfortably fitting text-heavy slide designs.",
      },
    ],
  },
  {
    slug: "Instagram-Image-Aspect-Ratio-Calculator",
    title: "Instagram Image Aspect Ratio Calculator",
    shortTitle: "Aspect Ratio Calculator",
    category: "Sizes & Dimensions",
    widget: "aspectratio",
    keyword: "instagram image aspect ratio calculator",
    description:
      "Calculate the exact width or height needed to hit a target Instagram aspect ratio like 1:1, 4:5 or 9:16.",
    intro:
      "Enter one known dimension and a target ratio, and this calculator works out the matching side — useful when you're setting up a canvas in your design tool before exporting.",
    steps: [
      "Enter your known width or height in pixels.",
      "Choose the target Instagram ratio (1:1, 4:5, 1.91:1 or 9:16).",
      "Read off the calculated matching dimension.",
      "Set your canvas to those exact pixel values.",
    ],
    tips: [
      "Always round to whole pixels — design tools can behave unpredictably with fractional canvas sizes.",
      "1080px is the safe baseline width for square and portrait posts; use it as your known value if you're starting from scratch.",
      "Keep a saved canvas preset per ratio so you're not recalculating for every new post.",
    ],
    faqs: [
      {
        q: "What aspect ratios does Instagram support for feed posts?",
        a: "1:1 (square), 4:5 (portrait) and 1.91:1 (landscape) are the three supported feed ratios.",
      },
      {
        q: "What ratio should Stories and Reels use?",
        a: "9:16, the full-screen vertical ratio, is required for both Stories and Reels.",
      },
      {
        q: "Why does my exported image look stretched?",
        a: "This usually happens when the canvas ratio and the export ratio don't match — recalculate both dimensions from the same target ratio to fix it.",
      },
    ],
  },
  {
    slug: "Instagram-Crop-Calculator",
    title: "Instagram Crop Calculator",
    shortTitle: "Crop Calculator",
    category: "Sizes & Dimensions",
    widget: "cropcalc",
    keyword: "instagram crop calculator",
    description:
      "Work out exactly how much of your original photo Instagram will crop away for a given target ratio.",
    intro:
      "Enter your original image dimensions and a target Instagram ratio, and this calculator shows how much gets trimmed from the sides or top and bottom — so you can reframe before you lose an important detail.",
    steps: [
      "Enter your original image's width and height.",
      "Pick the target ratio you're posting to (square, portrait, landscape or Story).",
      "See the cropped dimensions and how much is trimmed from each side.",
      "Reframe your composition to keep key subjects inside that area.",
    ],
    tips: [
      "Shoot slightly wider than you need so you have room to crop into different ratios later without losing subjects.",
      "For portraits, keep faces in the centre third of the frame — that's the area every common Instagram ratio preserves.",
      "Use the crop preview before exporting rather than discovering the crop after Instagram has already applied it.",
    ],
    faqs: [
      {
        q: "Does Instagram crop my photo automatically?",
        a: "Yes, if your image's ratio doesn't match a supported feed ratio, Instagram crops it to the closest allowed shape during upload.",
      },
      {
        q: "Can I undo an Instagram crop after posting?",
        a: "No — you'd need to delete the post and re-upload a correctly cropped version.",
      },
      {
        q: "What's the safest ratio to shoot in to avoid cropping?",
        a: "Shooting at 4:5 (portrait) covers the most common feed use case without any Instagram-side cropping.",
      },
    ],
  },
  {
    slug: "Instagram-Image-Compressor",
    title: "Instagram Image Compressor",
    shortTitle: "Image Compressor",
    category: "Sizes & Dimensions",
    widget: "compressor",
    keyword: "instagram image compressor",
    description:
      "Compress photos in your browser to Instagram-friendly file sizes without a visible drop in quality.",
    intro:
      "Large, uncompressed files upload slowly and Instagram re-compresses them anyway. This tool shrinks your image locally in the browser — nothing is uploaded to a server — so you keep control over the quality trade-off.",
    steps: [
      "Choose an image file from your device.",
      "Drag the quality slider and watch the estimated file size update.",
      "Compare the before-and-after preview.",
      "Download the compressed file and upload it to Instagram.",
    ],
    tips: [
      "Instagram already re-compresses everything on upload, so there's rarely a reason to keep files above a few megabytes.",
      "Export at 1080px on the long edge before compressing — resizing down and compressing together gives the smallest usable file.",
      "Keep an uncompressed master copy in case you need to re-edit later.",
    ],
    faqs: [
      {
        q: "Does compressing my image before upload hurt quality on Instagram?",
        a: "Not noticeably — Instagram applies its own compression regardless, so a well-compressed source file often looks identical to an uncompressed one after upload.",
      },
      {
        q: "Is my photo uploaded to a server when I use this tool?",
        a: "No — the compression happens entirely inside your browser using your device's own processing.",
      },
      {
        q: "What file size should I aim for?",
        a: "Most well-compressed 1080px JPGs land between 150KB and 500KB while remaining visually sharp.",
      },
    ],
  },
  {
    slug: "Instagram-Engagement-Rate-Calculator",
    title: "Instagram Engagement Rate Calculator",
    shortTitle: "Engagement Rate Calculator",
    category: "Growth & Money",
    widget: "engagement",
    keyword: "instagram engagement rate calculator",
    description:
      "Calculate your Instagram post engagement rate from likes, comments, saves and shares against your follower count.",
    intro:
      "Engagement rate is the single most requested number in influencer outreach and brand deals. Enter your post's likes, comments, saves and shares alongside your follower count to get an instant, comparable percentage.",
    steps: [
      "Enter total followers at the time of posting.",
      "Add likes and comments from the post.",
      "Optionally add saves and shares for a fuller engagement picture.",
      "Read your engagement rate percentage instantly.",
    ],
    tips: [
      "Calculate engagement rate on your last 10-12 posts and average them — a single viral post skews the picture.",
      "Saves and shares are increasingly weighted by the algorithm, so include them when the data's available, not just likes and comments.",
      "Compare your rate to accounts in your own niche and follower bracket rather than to influencers in a completely different category.",
    ],
    faqs: [
      {
        q: "What counts as a good Instagram engagement rate?",
        a: "Rates vary heavily by niche and follower size, but 1-3% is typical for larger accounts, while smaller niche accounts often see 5% or higher.",
      },
      {
        q: "Should I calculate engagement rate per post or as an account average?",
        a: "Both are useful — per-post rate helps judge individual content, while an average across recent posts gives brands a fairer overall picture.",
      },
      {
        q: "Do saves count toward engagement rate?",
        a: "Increasingly yes — many creators and brands now include saves and shares alongside likes and comments for a more complete rate.",
      },
    ],
  },
  {
    slug: "Instagram-Reel-Engagement-Calculator",
    title: "Instagram Reel Engagement Calculator",
    shortTitle: "Reel Engagement Calculator",
    category: "Growth & Money",
    widget: "reelengagement",
    keyword: "instagram reel engagement calculator",
    description:
      "Calculate Reel-specific engagement rate using plays instead of followers, the metric brands actually ask for.",
    intro:
      "Reel performance is judged against plays, not follower count, since Reels are pushed heavily to non-followers. This calculator gives you the plays-based engagement rate that matches how brands and the algorithm actually evaluate Reels.",
    steps: [
      "Enter total plays (or views) on the Reel.",
      "Add likes, comments and shares.",
      "Read the calculated engagement-per-play percentage.",
      "Compare it against your account's other Reels to spot what's actually working.",
    ],
    tips: [
      "A Reel with modest plays but a high engagement-per-play rate is often a stronger signal than one with huge reach and low interaction.",
      "Shares are one of the strongest ranking signals for Reels specifically — weigh them heavily when reviewing performance.",
      "Compare Reels engagement rate against your feed post rate separately; the two audiences and behaviours aren't directly comparable.",
    ],
    faqs: [
      {
        q: "Why use plays instead of followers for Reel engagement?",
        a: "Reels are distributed heavily beyond your existing followers, so plays reflect the actual audience that saw the content.",
      },
      {
        q: "What's a good Reel engagement rate?",
        a: "Anywhere from 3-6% of plays is commonly considered solid, though this varies widely by niche and video length.",
      },
      {
        q: "Do views and plays mean the same thing?",
        a: "Instagram has used both terms over time for the same underlying metric — the number of times your Reel started playing.",
      },
    ],
  },
  {
    slug: "Instagram-Follower-Growth-Calculator",
    title: "Instagram Follower Growth Calculator",
    shortTitle: "Follower Growth Calculator",
    category: "Growth & Money",
    widget: "growth",
    keyword: "instagram follower growth calculator",
    description:
      "Calculate your follower growth rate over any period, in both raw numbers and percentage terms.",
    intro:
      "Enter your follower count at the start and end of a period to see exactly how much you grew, in both absolute followers gained and percentage growth — the number brands and reports usually want.",
    steps: [
      "Enter your starting follower count.",
      "Enter your current (ending) follower count.",
      "See both the absolute change and the percentage growth rate.",
      "Track this monthly to spot trends over time.",
    ],
    tips: [
      "Track growth rate monthly rather than daily — daily follower counts are noisy and don't reflect real trends.",
      "A shrinking percentage growth rate on a larger account is normal; percentage growth naturally slows as the denominator grows.",
      "Pair growth rate with engagement rate — fast follower growth with falling engagement usually signals lower-quality new followers.",
    ],
    faqs: [
      {
        q: "What is a healthy monthly follower growth rate?",
        a: "For established accounts, 1-5% monthly growth is considered healthy; new accounts can see much higher percentage swings early on.",
      },
      {
        q: "Why did my percentage growth drop even though I gained more followers than last month?",
        a: "Percentage growth is relative to your starting total, so the same number of new followers produces a smaller percentage as your account gets bigger.",
      },
      {
        q: "Should I count follower losses separately from gains?",
        a: "The net change (gains minus losses) is what this calculator measures, which is the figure most reporting and brand requests expect.",
      },
    ],
  },
  {
    slug: "Instagram-Posting-Frequency-Calculator",
    title: "Instagram Posting Frequency Calculator",
    shortTitle: "Posting Frequency Calculator",
    category: "Growth & Money",
    widget: "frequency",
    keyword: "instagram posting frequency calculator",
    description:
      "Turn a weekly posting goal into a concrete monthly post count and the exact number of days between posts.",
    intro:
      "Saying 'post more' isn't a plan. Enter how many times a week you want to post and this calculator gives you the exact monthly total and the gap between posts, so you can actually build a content calendar around it.",
    steps: [
      "Enter your target number of posts per week.",
      "Choose the period you're planning for (default 30 days).",
      "See the total posts needed for that period and the days between each.",
      "Block those dates into your content calendar.",
    ],
    tips: [
      "Consistency at a lower frequency usually beats sporadic bursts at a higher one — pick a number you can sustain for months, not days.",
      "Batch-create content in one sitting per week rather than starting from zero each posting day.",
      "Mix formats across your frequency target — not every slot needs to be a fully-produced Reel.",
    ],
    faqs: [
      {
        q: "How often should I post on Instagram?",
        a: "Most active accounts post 3-5 times a week on the feed plus daily Stories, but the sustainable number matters more than hitting a specific figure.",
      },
      {
        q: "Does posting frequency affect the algorithm directly?",
        a: "Consistency and relevance matter more than raw frequency — but posting regularly does give the algorithm more recent content to evaluate and distribute.",
      },
      {
        q: "Is it better to post daily or a few times a week?",
        a: "A few times a week with higher-effort content generally outperforms daily low-effort posting for most accounts.",
      },
    ],
  },
  {
    slug: "Instagram-Influencer-Rate-Calculator",
    title: "Instagram Influencer Rate Calculator",
    shortTitle: "Influencer Rate Calculator",
    category: "Growth & Money",
    widget: "rate",
    keyword: "instagram influencer rate calculator",
    description:
      "Get a starting-point estimate for what to charge (or pay) for an Instagram post, Story or Reel based on followers and engagement.",
    intro:
      "There's no single official rate card for influencer pricing, but follower count and engagement rate are the two biggest inputs brands and creators both use. This calculator gives you a starting negotiation range, not a fixed price.",
    steps: [
      "Enter total followers.",
      "Enter your average engagement rate (use the engagement calculator above if you don't know it).",
      "Choose your niche tier — budget, standard or premium.",
      "See estimated rates for a post, Story and Reel.",
    ],
    tips: [
      "Treat this as a starting point for negotiation, not a fixed invoice — usage rights, exclusivity and production effort all move the real number.",
      "Higher engagement rate at a smaller follower count often out-earns a bigger but less-engaged account per post.",
      "Bundle deliverables (a Reel plus Stories) rather than pricing everything separately — most brands prefer one combined quote.",
    ],
    faqs: [
      {
        q: "How is influencer pricing usually calculated?",
        a: "Most rough estimates start from follower count and engagement rate, then get adjusted for niche, production effort, usage rights and exclusivity.",
      },
      {
        q: "Do micro-influencers charge less per follower?",
        a: "Often the opposite — micro-influencers frequently have higher engagement rates, which can push their effective rate per follower up, not down.",
      },
      {
        q: "Should Reels cost more than static posts?",
        a: "Generally yes, since Reels take more production time and tend to reach a wider audience than a single image post.",
      },
    ],
  },
  {
    slug: "Instagram-Sponsored-Post-Calculator",
    title: "Instagram Sponsored Post Calculator",
    shortTitle: "Sponsored Post Calculator",
    category: "Growth & Money",
    widget: "sponsored",
    keyword: "instagram sponsored post calculator",
    description:
      "Estimate the media value of a sponsored Instagram post from follower count, engagement rate and a target CPM.",
    intro:
      "Brands often think in cost-per-thousand-impressions (CPM). This calculator converts your follower count and engagement rate into an estimated impressions figure, then applies a CPM to give you a comparable media value for a sponsored post.",
    steps: [
      "Enter total followers.",
      "Enter your average engagement rate.",
      "Set a target CPM (cost per 1,000 impressions) — 8 to 15 is a common range.",
      "Read the estimated sponsored post value.",
    ],
    tips: [
      "Use a CPM in line with your industry — beauty and fashion often command higher CPMs than general lifestyle content.",
      "This figure estimates media value only; add a separate line for production time, usage rights and exclusivity.",
      "Track actual impressions after a sponsored post runs and compare them against this estimate to refine your CPM assumption over time.",
    ],
    faqs: [
      {
        q: "What is CPM in influencer marketing?",
        a: "CPM stands for cost per 1,000 impressions — a standard advertising metric used to compare the media value of different placements, including sponsored posts.",
      },
      {
        q: "Is estimated impressions the same as followers?",
        a: "No — this calculator estimates likely reach using both your follower count and engagement rate, since not every follower sees every post.",
      },
      {
        q: "Does this calculator set my final sponsored post price?",
        a: "It gives a media-value estimate as a starting reference point; final pricing should also reflect production effort, usage rights and exclusivity.",
      },
    ],
  },
  {
    slug: "Instagram-Media-Kit-Generator",
    title: "Instagram Media Kit Generator",
    shortTitle: "Media Kit Generator",
    category: "Preview & Generate",
    widget: "mediakit",
    keyword: "instagram media kit generator",
    description:
      "Turn your Instagram stats into a clean, copy-ready media kit summary for brand outreach.",
    intro:
      "A media kit is the one-page summary brands ask for before a deal. Fill in your key stats below and get a clean, ready-to-paste summary you can drop into an email, PDF or pitch deck.",
    steps: [
      "Enter your handle, follower count, average engagement rate and top content pillars.",
      "Add your Reel and Story average reach if you have it.",
      "Generate the formatted summary.",
      "Copy it into your outreach email or design tool.",
    ],
    tips: [
      "Update your media kit numbers monthly — brands notice stale stats.",
      "Include a short line about your audience demographics if you have insights access; brands care about who's watching, not just how many.",
      "Pair your numbers with two or three past brand collaborations if you have them — social proof matters as much as the stats.",
    ],
    faqs: [
      {
        q: "What should an Instagram media kit include?",
        a: "Follower count, engagement rate, audience demographics, content pillars and past brand collaborations are the core elements brands look for.",
      },
      {
        q: "How often should I update my media kit?",
        a: "Monthly is a reasonable cadence — stats that are more than a few months old start to look unreliable to brands.",
      },
      {
        q: "Do I need a designed PDF or is a text summary enough?",
        a: "A clean text summary is enough for a first email; a designed one-pager helps once a brand asks for more detail.",
      },
    ],
  },
  {
    slug: "Instagram-Bio-Previewer",
    title: "Instagram Bio Previewer",
    shortTitle: "Bio Previewer",
    category: "Preview & Generate",
    widget: "biopreview",
    keyword: "instagram bio previewer",
    description:
      "Preview how your bio, name and profile picture will actually look on an Instagram profile before you publish changes.",
    intro:
      "It's hard to judge a bio inside a plain text box. This previewer renders your name, bio text and picture the way they'll actually appear on a live Instagram profile, line breaks and all.",
    steps: [
      "Enter your display name, username and bio text.",
      "Upload or skip a profile picture preview.",
      "See the live rendered profile header.",
      "Adjust wording until it reads cleanly at profile width.",
    ],
    tips: [
      "Check how your bio wraps on a narrow phone screen, not just on your desktop editor.",
      "Keep your most important line first — many visitors don't scroll or expand a long bio.",
      "Match your display name to what people actually search for; it's searchable text, unlike your username alone.",
    ],
    faqs: [
      {
        q: "Is my display name searchable on Instagram?",
        a: "Yes — Instagram search matches both username and display name, so keywords in your display name can help discovery.",
      },
      {
        q: "How many lines does an Instagram bio typically wrap to?",
        a: "Most bios wrap to 3-4 lines on a standard phone screen, depending on line breaks and text length.",
      },
      {
        q: "Does the previewer show my actual live profile?",
        a: "No — it renders a local preview based on what you type, so you can experiment safely before editing your real profile.",
      },
    ],
  },
  {
    slug: "Instagram-Carousel-Previewer",
    title: "Instagram Carousel Previewer",
    shortTitle: "Carousel Previewer",
    category: "Preview & Generate",
    widget: "carouselpreview",
    keyword: "instagram carousel previewer",
    description:
      "Preview your carousel slides in order, with swipe navigation, before you upload the post.",
    intro:
      "Carousels live or die on whether the sequence actually makes sense when swiped through. Upload your slides here to preview them in order exactly as a viewer will swipe through them.",
    steps: [
      "Upload your slides in the order you plan to post them.",
      "Use the swipe arrows to move through the sequence.",
      "Check pacing, text legibility and the story arc slide to slide.",
      "Reorder or replace slides before uploading to Instagram.",
    ],
    tips: [
      "Put your strongest, most attention-grabbing slide first — it decides whether anyone swipes further.",
      "End on a clear call-to-action slide since that's the last thing viewers see before they scroll away.",
      "Keep text minimal on slide one; the caption fold and the slide are competing for attention at the same time.",
    ],
    faqs: [
      {
        q: "How many slides should a carousel have?",
        a: "There's no fixed rule, but 5-8 slides is a common sweet spot that balances depth with completion rate.",
      },
      {
        q: "Does slide order affect performance?",
        a: "Yes — the first slide determines whether people stop scrolling, and a clear arc through the remaining slides affects how many people swipe to the end.",
      },
      {
        q: "Can I include a video slide in a carousel?",
        a: "Yes, Instagram carousels support a mix of photo and short video slides within the same post.",
      },
    ],
  },
  {
    slug: "Instagram-Profile-QR-Code-Generator",
    title: "Instagram Profile QR Code Generator",
    shortTitle: "Profile QR Code Generator",
    category: "Preview & Generate",
    widget: "qrcode",
    widgetProps: { mode: "profile" },
    keyword: "instagram profile qr code generator",
    description:
      "Generate a scannable QR code that opens your Instagram profile directly, ready for print or stories.",
    intro:
      "A QR code turns a physical flyer, packaging or business card into a one-scan follow. Enter your Instagram username to generate a QR code that opens your profile directly in the app.",
    steps: [
      "Enter your Instagram username.",
      "Generate the QR code.",
      "Download it as an image.",
      "Add it to packaging, print materials or a Story sticker.",
    ],
    tips: [
      "Test the QR code with your own phone camera before printing anything at scale.",
      "Leave a quiet white margin around the code — busy backgrounds can stop phone cameras from recognising it.",
      "Print at a minimum of about 2cm across for reliable scanning from a normal arm's length.",
    ],
    faqs: [
      {
        q: "Do Instagram profile QR codes expire?",
        a: "No — a QR code linking to a public profile URL keeps working as long as the username doesn't change.",
      },
      {
        q: "Can I put this QR code on printed packaging?",
        a: "Yes, downloaded QR codes work the same whether they're viewed on screen or printed on physical materials.",
      },
      {
        q: "What happens if I change my username later?",
        a: "The QR code will stop pointing to your profile — generate a new one whenever you change your Instagram username.",
      },
    ],
  },
  {
    slug: "Instagram-Reel-QR-Code-Generator",
    title: "Instagram Reel QR Code Generator",
    shortTitle: "Reel QR Code Generator",
    category: "Preview & Generate",
    widget: "qrcode",
    widgetProps: { mode: "reel" },
    keyword: "instagram reel qr code generator",
    description:
      "Generate a scannable QR code that opens a specific Instagram Reel directly, ideal for cross-promotion.",
    intro:
      "Point people from a physical space, a video description or another platform straight to one specific Reel. Paste the Reel's link to generate a QR code that opens that exact video.",
    steps: [
      "Copy the share link for your specific Reel from Instagram.",
      "Paste it into the box below.",
      "Generate and download the QR code.",
      "Place it anywhere you want a direct scan-to-watch action.",
    ],
    tips: [
      "Use this for time-limited promotions or events where you want people watching one specific Reel, not just your general profile.",
      "Combine the QR code with a short on-screen caption like 'scan to watch' so people know what to expect.",
      "Regenerate the code if you replace or delete the original Reel, since the old link will no longer resolve.",
    ],
    faqs: [
      {
        q: "Where do I find the share link for a Reel?",
        a: "Open the Reel, tap the share icon, and choose 'copy link' — that link is what you paste into this generator.",
      },
      {
        q: "Does this QR code work if the Reel is deleted?",
        a: "No — once the original Reel is removed, the link (and therefore the QR code) stops working.",
      },
      {
        q: "Can I track how many people scanned the code?",
        a: "This generator produces a direct-link QR code without built-in scan tracking; use a link-tracking service first if you need scan analytics.",
      },
    ],
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
