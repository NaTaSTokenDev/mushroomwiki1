/*
  # Initial Schema for Mushroom Explorer

  1. New Tables
    - `users`
      - Extends Supabase auth.users
      - Stores additional user information
    - `mushrooms`
      - Stores mushroom information
      - Contains basic details and metadata
    - `growth_stages`
      - Documents different growth stages of mushrooms
      - Links to mushroom entries
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create mushrooms table
CREATE TABLE IF NOT EXISTS mushrooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  scientific_name text NOT NULL,
  common_names text[] DEFAULT '{}',
  description text,
  habitat text,
  season text[] DEFAULT '{}',
  edibility text CHECK (edibility IN ('edible', 'inedible', 'poisonous', 'unknown')),
  image_url text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id) NOT NULL
);

-- Create growth_stages table
CREATE TABLE IF NOT EXISTS growth_stages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mushroom_id uuid REFERENCES mushrooms(id) ON DELETE CASCADE,
  stage text NOT NULL,
  description text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE mushrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE growth_stages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can read mushrooms"
  ON mushrooms
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create mushrooms"
  ON mushrooms
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own mushrooms"
  ON mushrooms
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can read growth stages"
  ON growth_stages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage growth stages of own mushrooms"
  ON growth_stages
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM mushrooms
      WHERE mushrooms.id = growth_stages.mushroom_id
      AND mushrooms.user_id = auth.uid()
    )
  );