export function engagementRate(
  likes: number,
  comments: number,
  followers: number,
  saves = 0,
  shares = 0
): number {
  if (!followers) return 0;
  return ((likes + comments + saves + shares) / followers) * 100;
}

export function reelEngagementRate(
  likes: number,
  comments: number,
  plays: number,
  shares = 0
): number {
  if (!plays) return 0;
  return ((likes + comments + shares) / plays) * 100;
}

export function followerGrowthRate(
  startFollowers: number,
  endFollowers: number
): { absolute: number; percent: number } {
  const absolute = endFollowers - startFollowers;
  const percent = startFollowers ? (absolute / startFollowers) * 100 : 0;
  return { absolute, percent };
}

export function postingFrequency(
  postsPerWeek: number,
  daysInPeriod = 30
): { postsInPeriod: number; daysBetweenPosts: number } {
  const postsInPeriod = (postsPerWeek / 7) * daysInPeriod;
  const daysBetweenPosts = postsPerWeek ? 7 / postsPerWeek : 0;
  return { postsInPeriod, daysBetweenPosts };
}

export function influencerRateEstimate(
  followers: number,
  engagementRatePct: number,
  niche: "standard" | "premium" | "budget" = "standard"
): { perPost: number; perStory: number; perReel: number } {
  const multiplier = niche === "premium" ? 1.5 : niche === "budget" ? 0.6 : 1;
  const base = (followers / 1000) * 10 * multiplier;
  const engagementFactor = Math.max(0.5, Math.min(3, engagementRatePct / 2));
  const perPost = base * engagementFactor;
  return {
    perPost: Math.round(perPost),
    perStory: Math.round(perPost * 0.4),
    perReel: Math.round(perPost * 1.3),
  };
}

export function sponsoredPostValue(
  followers: number,
  avgEngagementPct: number,
  cpm = 10
): number {
  const impressionsEstimate = followers * (0.3 + avgEngagementPct / 100);
  return Math.round((impressionsEstimate / 1000) * cpm);
}
