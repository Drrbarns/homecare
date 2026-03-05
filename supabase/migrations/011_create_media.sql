CREATE TABLE IF NOT EXISTS media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    url TEXT NOT NULL,
    alt_text TEXT,
    mime_type TEXT,
    size_bytes BIGINT,
    uploaded_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_media_mime_type ON media(mime_type);
CREATE INDEX idx_media_uploaded_at ON media(uploaded_at DESC);
