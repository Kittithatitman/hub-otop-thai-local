
import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  community: string;
  image: string;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  community,
  image,
  badge
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{community}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
            )}
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
            ซื้อเลย
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
