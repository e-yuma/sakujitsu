import React from "react";
import { SOCIAL_ACCOUNTS, SocialPlatform } from "../data/social";

interface SocialLinksProps {
  platforms?: SocialPlatform[];
  className?: string;
  showIcons?: boolean;
  showUsernames?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  platforms = ["instagram", "x", "tiktok"],
  className = "",
  showIcons = true,
  showUsernames = false,
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {platforms.map((platform) => {
        const account = SOCIAL_ACCOUNTS[platform];
        return (
          <a
            key={platform}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            aria-label={`${account.displayName}のプロフィールを開く`}
          >
            {showIcons && <span className="text-lg">{account.icon}</span>}
            {showUsernames && (
              <span className="text-sm font-medium">@{account.username}</span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
