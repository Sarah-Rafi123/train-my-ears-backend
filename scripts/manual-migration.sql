-- Manual SQL migration script
-- Run this directly in your database if the Node.js script doesn't work

-- Check current data
SELECT "gameMode", COUNT(*) as count 
FROM "game_sessions" 
GROUP BY "gameMode";

-- Update existing records
UPDATE "game_sessions" 
SET "gameMode" = 'SIMPLE_MODE' 
WHERE "gameMode" = 'SINGLE_CHORD';

UPDATE "game_sessions" 
SET "gameMode" = 'ADVANCE_MODE' 
WHERE "gameMode" = 'ADVANCED_SEQUENCE';

-- Verify the changes
SELECT "gameMode", COUNT(*) as count 
FROM "game_sessions" 
GROUP BY "gameMode";

