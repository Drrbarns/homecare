-- Add JSONB column to store full Home Care / Personal Support Worker Interview Form responses
ALTER TABLE staff_questionnaires
ADD COLUMN IF NOT EXISTS form_data JSONB;

COMMENT ON COLUMN staff_questionnaires.form_data IS 'Full interview form responses (sections 1-7)';
