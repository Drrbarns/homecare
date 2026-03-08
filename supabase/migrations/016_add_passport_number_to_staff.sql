ALTER TABLE staff ADD COLUMN IF NOT EXISTS passport_number TEXT;
CREATE INDEX IF NOT EXISTS idx_staff_passport ON staff(passport_number);
