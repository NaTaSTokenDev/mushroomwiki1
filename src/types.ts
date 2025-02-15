export interface Mushroom {
  id: string;
  title: string;
  scientific_name: string;
  common_names: string[];
  description: string;
  habitat: string;
  season: string[];
  edibility: 'edible' | 'inedible' | 'poisonous' | 'unknown';
  image_url: string;
  growth_stages: GrowthStage[];
  created_at: string;
  user_id: string;
}

export interface GrowthStage {
  id: string;
  mushroom_id: string;
  stage: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  created_at: string;
}