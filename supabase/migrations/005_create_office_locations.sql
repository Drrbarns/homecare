CREATE TABLE IF NOT EXISTS office_locations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_offices_state ON office_locations(state);
CREATE INDEX idx_offices_zip ON office_locations(zip);
CREATE INDEX idx_offices_published ON office_locations(published);

CREATE TRIGGER office_locations_updated_at
    BEFORE UPDATE ON office_locations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
