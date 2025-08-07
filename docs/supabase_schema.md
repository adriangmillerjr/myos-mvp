# Supabase Schema for MyOS

This document describes the database tables used by the MyOS application.  
These tables must be created in your Supabase project before running the application.

## `user_profiles` table

Stores user-specific profile information.  
Use JSONB columns for nested structures to keep the schema flexible.

| Column Name          | Type      | Description |
|----------------------|-----------|-------------|
| `user_id`            | UUID      | Primary key referencing `auth.users.id`. |
| `user_name`          | TEXT      | The user’s display name. |
| `role`               | TEXT      | The user’s professional role (e.g., Founder, CEO). |
| `industry`           | TEXT      | The user’s primary industry or field. |
| `tone`               | TEXT      | Communication tone preference (e.g., Direct, Supportive). |
| `bio`                | TEXT      | Freeform bio or description. |
| `mount_everest`      | JSONB     | Nested object containing `vision_statement`, `why_it_matters`, and `purpose_statement`. |
| `non_negotiables`    | TEXT[]    | Array of core values that are non‑negotiable. |
| `inner_boardroom`    | JSONB     | Roles of the internal advisory board (guide, operator, coach, editor, enforcer, archetype). |
| `advisors_guides`    | JSONB     | Key–value map for different advisor categories (leadership, empowerment, offers, operations, marketing, mindset, systems). |
| `knowledge_base`     | JSONB     | Stores external resources such as drive folder URLs and workspace notes. |
| `updated_at`         | TIMESTAMP | Time of last update. |

### Example `user_profiles` row

```json
{
  "user_id": "uuid-of-user",
  "user_name": "Ada Lovelace",
  "role": "Engineer",
  "industry": "Technology",
  "tone": "Direct",
  "bio": "Software engineer and AI enthusiast.",
  "mount_everest": {
    "vision_statement": "Build transformative tools.",
    "why_it_matters": "Technology can improve lives.",
    "purpose_statement": "Empower creators."
  },
  "non_negotiables": ["Integrity", "Innovation"],
  "inner_boardroom": {
    "guide": "Growth mindset",
    "operator": "Process execution",
    "coach": "Motivation",
    "editor": "Communication clarity",
    "enforcer": "Accountability",
    "archetype": "Visionary"
  },
  "advisors_guides": {
    "leadership": "Simon Sinek",
    "empowerment": "Brene Brown",
    "offers": "Alex Hormozi",
    "operations": "Sam Altman",
    "marketing": "Seth Godin",
    "mindset": "Carol Dweck",
    "systems": "James Clear"
  },
  "knowledge_base": {
    "drive_folder_url": "https://drive.google.com/drive/folders/...",
    "workspace_notes": "Reference materials and SOPs."
  },
  "updated_at": "2025-08-07T00:00:00Z"
}
```

## `chat_messages` table

Stores the history of chats between users and AI assistants.

| Column Name   | Type      | Description |
|---------------|-----------|-------------|
| `id`          | UUID      | Primary key. |
| `user_id`     | UUID      | References `auth.users.id`. |
| `session_id`  | TEXT      | Optional session identifier (unused). |
| `thread_id`   | UUID      | Groups related messages into a single thread. |
| `role`        | TEXT      | Either `user` or `assistant`. |
| `content`     | TEXT      | Chat content. |
| `model`       | TEXT      | AI model used (e.g., gpt-3.5-turbo). |
| `meta`        | JSONB     | Arbitrary metadata (temperature, agent name, whisper confidence, etc.). |
| `timestamp`   | TIMESTAMP | Time of message creation. Defaults to `now()`. |

### Example `chat_messages` row

```json
{
  "id": "uuid",
  "user_id": "uuid-of-user",
  "thread_id": "uuid-of-thread",
  "role": "assistant",
  "content": "Hello! How can I help you today?",
  "model": "gpt-3.5-turbo",
  "meta": {
    "prompt_type": "greeting",
    "temperature": 0.7,
    "agent": "ProfileGPT",
    "confidence": 0.98
  },
  "timestamp": "2025-08-07T15:00:00Z"
}
```

Add these tables using the Supabase dashboard or via SQL migrations in your project.