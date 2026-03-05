CREATE TABLE IF NOT EXISTS page_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_slug TEXT NOT NULL,
    section_key TEXT NOT NULL,
    title TEXT,
    subtitle TEXT,
    body TEXT,
    image_url TEXT,
    extra_data JSONB DEFAULT '{}',
    sort_order INTEGER DEFAULT 0,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(page_slug, section_key)
);

CREATE INDEX idx_page_sections_slug ON page_sections(page_slug);
CREATE INDEX idx_page_sections_published ON page_sections(published);

CREATE TRIGGER page_sections_updated_at
    BEFORE UPDATE ON page_sections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
