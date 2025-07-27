import React from "react";
import { SOCIAL_ACCOUNTS } from "../data/social";

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sakujitsu",
    jobTitle: "Creative Frontend Engineer",
    description:
      "Creative Frontend Engineerのポートフォリオサイト。視覚的表現の可能性を探求し、写真・デザイン・アートを通じて物語を紡ぐ。",
    url: "https://sakujitsu.com",
    image: "https://sakujitsu.com/assets/hero.png",
    sameAs: [
      SOCIAL_ACCOUNTS.instagram.url,
      SOCIAL_ACCOUNTS.x.url,
      SOCIAL_ACCOUNTS.tiktok.url,
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Web Development",
      "UI/UX Design",
      "Photography",
      "Creative Design",
      "Frontend Engineering",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Web Development",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Creative Frontend Engineer",
      description:
        "モダンなWeb技術を使用したクリエイティブなフロントエンド開発",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sakujitsu Portfolio",
    url: "https://sakujitsu.com",
    description: "Creative Frontend Engineerのポートフォリオサイト",
    author: {
      "@type": "Person",
      name: "Sakujitsu",
    },
    publisher: {
      "@type": "Person",
      name: "Sakujitsu",
    },
    inLanguage: "ja-JP",
    isAccessibleForFree: true,
  };

  const creativeWorkData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Sakujitsu Portfolio",
    author: {
      "@type": "Person",
      name: "Sakujitsu",
    },
    description: "視覚的表現の可能性を探求するクリエイティブポートフォリオ",
    genre: ["Portfolio", "Creative Work", "Web Design"],
    keywords:
      "Creative Frontend Engineer, ポートフォリオ, Web開発, React, Next.js, TypeScript, デザイン, 写真, アート",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkData),
        }}
      />
    </>
  );
};

export default StructuredData;
