CREATE TABLE IF NOT EXISTS navigation_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    menu_group TEXT NOT NULL,
    label TEXT NOT NULL,
    href TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    parent_id UUID REFERENCES navigation_items(id) ON DELETE SET NULL,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_nav_menu_group ON navigation_items(menu_group);
CREATE INDEX idx_nav_parent ON navigation_items(parent_id);
CREATE INDEX idx_nav_published ON navigation_items(published);
CREATE INDEX idx_nav_sort_order ON navigation_items(sort_order);

CREATE TRIGGER navigation_items_updated_at
    BEFORE UPDATE ON navigation_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
