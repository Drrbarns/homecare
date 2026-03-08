CREATE TABLE IF NOT EXISTS staff (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    staff_id TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Caregiver',
    department TEXT DEFAULT 'Care Services',
    phone TEXT,
    email TEXT,
    avatar_url TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_leave')),
    start_date DATE,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_staff_staff_id ON staff(staff_id);
CREATE INDEX idx_staff_status ON staff(status);
CREATE INDEX idx_staff_published ON staff(published);

CREATE TRIGGER staff_updated_at
    BEFORE UPDATE ON staff
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can lookup published staff" ON staff
    FOR SELECT USING (published = true);

CREATE POLICY "Admin full access staff" ON staff
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
