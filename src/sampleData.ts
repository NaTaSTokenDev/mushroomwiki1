export const sampleMushrooms = [
  {
    id: '1',
    title: 'Golden Chanterelle',
    scientific_name: 'Cantharellus cibarius',
    common_names: ['Chanterelle', 'Girolle'],
    description: 'A prized edible mushroom with a distinctive golden color and fruity aroma.',
    habitat: 'Hardwood forests',
    season: ['Summer', 'Fall'],
    edibility: 'edible',
    image_url: 'https://images.unsplash.com/photo-1607596180523-579611d9c386?auto=format&fit=crop&q=80&w=800',
    growth_stages: [
      {
        id: '1a',
        mushroom_id: '1',
        stage: 'Button',
        description: 'Small, compact form just emerging from soil',
        image_url: 'https://images.unsplash.com/photo-1607596180523-579611d9c386?auto=format&fit=crop&q=80&w=800',
        created_at: '2024-02-20T12:00:00Z'
      }
    ],
    created_at: '2024-02-20T12:00:00Z',
    user_id: 'user1'
  },
  {
    id: '2',
    title: 'Fly Agaric',
    scientific_name: 'Amanita muscaria',
    common_names: ['Fly Amanita', 'Red Mushroom'],
    description: 'Iconic red mushroom with white spots, known from fairy tales.',
    habitat: 'Pine and birch forests',
    season: ['Summer', 'Fall'],
    edibility: 'poisonous',
    image_url: 'https://images.unsplash.com/photo-1518553552028-b0548c1af143?auto=format&fit=crop&q=80&w=800',
    growth_stages: [],
    created_at: '2024-02-20T12:00:00Z',
    user_id: 'user1'
  },
  {
    id: '3',
    title: 'Oyster Mushroom',
    scientific_name: 'Pleurotus ostreatus',
    common_names: ['Tree Oyster', 'Pearl Oyster'],
    description: 'Popular cultivated mushroom that grows in shelf-like clusters.',
    habitat: 'Hardwood logs and stumps',
    season: ['Spring', 'Fall', 'Winter'],
    edibility: 'edible',
    image_url: 'https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?auto=format&fit=crop&q=80&w=800',
    growth_stages: [],
    created_at: '2024-02-20T12:00:00Z',
    user_id: 'user1'
  }
];