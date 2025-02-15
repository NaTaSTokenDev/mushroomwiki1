import React from 'react';
import { Link } from 'react-router-dom';
import { Mushroom } from '../types';
import { Info, MapPin, Calendar } from 'lucide-react';

interface MushroomCardProps {
  mushroom: Mushroom;
}

export function MushroomCard({ mushroom }: MushroomCardProps) {
  return (
    <Link to={`/mushroom/${mushroom.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            src={mushroom.image_url}
            alt={mushroom.title}
            className="h-64 w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{mushroom.title}</h3>
          <p className="mt-1 text-sm italic text-gray-600">{mushroom.scientific_name}</p>
          
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{mushroom.habitat}</span>
          </div>
          
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>{mushroom.season.join(', ')}</span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Info size={16} />
            <span className={`text-sm font-medium ${
              mushroom.edibility === 'edible' ? 'text-green-600' :
              mushroom.edibility === 'poisonous' ? 'text-red-600' :
              'text-gray-600'
            }`}>
              {mushroom.edibility.charAt(0).toUpperCase() + mushroom.edibility.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}