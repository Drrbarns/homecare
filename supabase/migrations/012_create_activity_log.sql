CREATE TABLE IF NOT EXISTS admin_activity_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id UUID NOT NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID,
    details JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_activity_admin ON admin_activity_log(admin_user_id);
CREATE INDEX idx_activity_entity ON admin_activity_log(entity_type, entity_id);
CREATE INDEX idx_activity_created_at ON admin_activity_log(created_at DESC);
