export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed';

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    body: string | null;
    image_url: string | null;
    category: string;
    published: boolean;
    featured: boolean;
    created_at: string;
    updated_at: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
    sort_order: number;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Review {
    id: string;
    author_name: string;
    location: string | null;
    review_text: string;
    rating: number;
    color_theme: string;
    featured: boolean;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Service {
    id: string;
    name: string;
    slug: string;
    short_description: string | null;
    long_description: string | null;
    icon_name: string | null;
    image_url: string | null;
    sort_order: number;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface OfficeLocation {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string | null;
    email: string | null;
    lat: number | null;
    lng: number | null;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    zip_code: string | null;
    care_type: string;
    person_needing_care: string | null;
    heard_about_us: string | null;
    is_cell_phone: boolean | null;
    status: LeadStatus;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

export interface NewsletterSubscriber {
    id: string;
    email: string;
    subscribed: boolean;
    created_at: string;
}

export interface SiteSetting {
    id: string;
    key: string;
    value: string | null;
    type: string;
    group_name: string;
    label: string | null;
    created_at: string;
    updated_at: string;
}

export interface PageSection {
    id: string;
    page_slug: string;
    section_key: string;
    title: string | null;
    subtitle: string | null;
    body: string | null;
    image_url: string | null;
    extra_data: Record<string, unknown>;
    sort_order: number;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface NavigationItem {
    id: string;
    menu_group: string;
    label: string;
    href: string;
    sort_order: number;
    parent_id: string | null;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Media {
    id: string;
    filename: string;
    url: string;
    alt_text: string | null;
    mime_type: string | null;
    size_bytes: number | null;
    uploaded_at: string;
}

export interface AdminActivityLog {
    id: string;
    admin_user_id: string;
    action: string;
    entity_type: string;
    entity_id: string | null;
    details: Record<string, unknown>;
    created_at: string;
}

export interface Staff {
    id: string;
    staff_id: string;
    first_name: string;
    last_name: string;
    role: string;
    department: string | null;
    phone: string | null;
    email: string | null;
    avatar_url: string | null;
    status: 'active' | 'inactive' | 'on_leave';
    start_date: string | null;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface DashboardStats {
    total_leads: number;
    new_leads: number;
    total_articles: number;
    published_articles: number;
    total_subscribers: number;
    total_reviews: number;
    total_services: number;
    total_offices: number;
}
