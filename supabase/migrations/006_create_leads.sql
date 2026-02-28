CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'closed');

CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    zip_code TEXT,
    care_type TEXT DEFAULT 'Home Care Services',
    person_needing_care TEXT,
    heard_about_us TEXT,
    is_cell_phone BOOLEAN,
    status lead_status DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);

CREATE TRIGGER leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
