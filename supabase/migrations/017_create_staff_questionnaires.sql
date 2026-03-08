CREATE TABLE IF NOT EXISTS staff_questionnaires (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    staff_id TEXT NOT NULL,
    staff_name TEXT NOT NULL,
    availability TEXT NOT NULL,
    preferred_shifts TEXT,
    transport_mode TEXT,
    max_travel_distance TEXT,
    special_skills TEXT,
    certifications TEXT,
    languages TEXT,
    emergency_contact_name TEXT,
    emergency_contact_phone TEXT,
    health_conditions TEXT,
    additional_notes TEXT,
    submitted_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_sq_staff_id ON staff_questionnaires(staff_id);
CREATE INDEX idx_sq_submitted_at ON staff_questionnaires(submitted_at DESC);

ALTER TABLE staff_questionnaires ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit questionnaire" ON staff_questionnaires
    FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admin full access questionnaires" ON staff_questionnaires
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
