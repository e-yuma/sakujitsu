export const SOCIAL_ACCOUNTS = {
  x: {
    username: 'saku_jitsu_',
    url: 'https://x.com/saku_jitsu_',
    displayName: 'X (Twitter)',
    icon: '🐦',
  },
  instagram: {
    username: 'sakujitsu_',
    url: 'https://www.instagram.com/sakujitsu_/',
    displayName: 'Instagram',
    icon: '📷',
  },
  tiktok: {
    username: 'sakujitu',
    url: 'https://www.tiktok.com/@sakujitu',
    displayName: 'TikTok',
    icon: '🎵',
  },
} as const;

export type SocialPlatform = keyof typeof SOCIAL_ACCOUNTS;

export const getSocialUrl = (platform: SocialPlatform): string => {
  return SOCIAL_ACCOUNTS[platform].url;
};

export const getSocialUsername = (platform: SocialPlatform): string => {
  return SOCIAL_ACCOUNTS[platform].username;
};

export const getSocialDisplayName = (platform: SocialPlatform): string => {
  return SOCIAL_ACCOUNTS[platform].displayName;
}; 