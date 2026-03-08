import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Workers Roster",
    description: "Verify a MidAid staff member by entering their Staff ID or Passport Number. Confirm your caregiver's identity instantly.",
    openGraph: {
        title: "Workers Roster | MidAid",
        description: "Verify a MidAid staff member by entering their Staff ID or Passport Number.",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    },
};

export default function WorkersRosterLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
