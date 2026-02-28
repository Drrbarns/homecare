-- Enable RLS on all tables
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE office_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can read published articles" ON articles
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read published faqs" ON faqs
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read published reviews" ON reviews
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read published services" ON services
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read published offices" ON office_locations
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read site settings" ON site_settings
    FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public can read published page sections" ON page_sections
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read published navigation" ON navigation_items
    FOR SELECT USING (published = true);

CREATE POLICY "Public can read media" ON media
    FOR SELECT TO anon, authenticated USING (true);

-- Public write access for leads and newsletter (anonymous submissions)
CREATE POLICY "Anyone can submit leads" ON leads
    FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
    FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Admin full access (authenticated users)
CREATE POLICY "Admin full access articles" ON articles
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access faqs" ON faqs
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access reviews" ON reviews
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access services" ON services
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access offices" ON office_locations
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access leads" ON leads
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access newsletter" ON newsletter_subscribers
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access settings" ON site_settings
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access page sections" ON page_sections
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access navigation" ON navigation_items
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access media" ON media
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access activity log" ON admin_activity_log
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
