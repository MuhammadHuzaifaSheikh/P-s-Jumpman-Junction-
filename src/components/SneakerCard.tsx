import { Calendar, DollarSign, ExternalLink } from "lucide-react";

interface SneakerCardProps {
  image: string;
  name: string;
  price: string;
  releaseDate: string;
  releaseTime: string;
  store: string;
  brand: string;
  onCreateOrder: () => void;
}

export function SneakerCard({
  image,
  name,
  price,
  releaseDate,
  releaseTime,
  store,
  brand,
  onCreateOrder,
}: SneakerCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs shadow-lg dark:text-white">
            {brand}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="mb-2 line-clamp-2 dark:text-white">{name}</h3>
          <div className="flex items-center gap-2 text-[#2074FF]">
            <DollarSign className="w-4 h-4" />
            <span>{price}</span>
          </div>
        </div>

        {/* Release Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>
              {releaseDate} at {releaseTime}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <ExternalLink className="w-4 h-4" />
            <span>{store}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onCreateOrder}
          className="w-full py-3 bg-[#2074FF] text-white rounded-xl hover:bg-[#1557c7] transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
        >
          Create Order
        </button>
      </div>
    </div>
  );
}