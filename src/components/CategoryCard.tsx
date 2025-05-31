
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  count: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
  count
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-200 mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{count}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
