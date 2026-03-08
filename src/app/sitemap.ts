import type { MetadataRoute } from "next";

const BASE_URL = "https://midaid.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    const staticPages = [
        { url: `${BASE_URL}`, changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${BASE_URL}/about-us`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/home-care-services`, changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${BASE_URL}/contact-us`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/articles`, changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${BASE_URL}/employment`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/our-reviews`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/workers-roster`, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${BASE_URL}/how-to-get-started`, changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${BASE_URL}/how-we-assist`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/home-care-costs`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/home-care-faqs`, changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${BASE_URL}/caregivers`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/fall-prevention`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/long-distance-care-giving`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/veterans-benefits`, changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${BASE_URL}/give-us-a-review`, changeFrequency: "monthly" as const, priority: 0.5 },
        { url: `${BASE_URL}/guide-model-program`, changeFrequency: "monthly" as const, priority: 0.5 },
    ];

    const carePages = [
        "alzheimers-care", "dementia-care", "elderly-companion-care",
        "personal-care", "respite-care", "live-in-care", "end-of-life-care",
        "palliative-care", "parkinsons-care", "veterans-care",
        "24-hour-home-care", "transition-home-care",
    ].map((slug) => ({
        url: `${BASE_URL}/${slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...carePages].map((page) => ({
        ...page,
        lastModified: now,
    }));
}
