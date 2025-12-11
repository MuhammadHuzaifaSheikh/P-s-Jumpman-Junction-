import { useState } from "react";
import {
  Search,
  Download,
  TrendingUp,
  DollarSign,
  Calendar,
  Package,
  RefreshCcw,
} from "lucide-react";

export function PurchasedPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const purchasedItems = [
    {
      id: 1,
      name: "Nike Dunk Low Panda",
      image:
        "https://images.unsplash.com/photo-1693743107371-ad6e933c7c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NjUwMDEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Dec 10, 2025",
      cost: "$110.00",
      salePrice: "$220.00",
      profit: "$110.00",
      profitPercent: "+100%",
    },
    {
      id: 2,
      name: "Adidas Forum Low",
      image:
        "https://images.unsplash.com/photo-1655982182278-c6eb38815a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB5ZWV6eSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NTA1MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Dec 3, 2025",
      cost: "$90.00",
      salePrice: "$140.00",
      profit: "$50.00",
      profitPercent: "+56%",
    },
    {
      id: 3,
      name: "Air Jordan 3 White Cement",
      image:
        "https://images.unsplash.com/photo-1684351045483-b6c486fa979a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3JkYW4lMjBzbmVha2VycyUyMGJsYWNrfGVufDF8fHx8MTc2NTA1MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Nov 28, 2025",
      cost: "$200.00",
      salePrice: "$380.00",
      profit: "$180.00",
      profitPercent: "+90%",
    },
    {
      id: 4,
      name: "New Balance 550 White Grey",
      image:
        "https://images.unsplash.com/photo-1707616782025-5d9e96413cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBiYWxhbmNlJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1MDQwNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Nov 22, 2025",
      cost: "$120.00",
      salePrice: "$185.00",
      profit: "$65.00",
      profitPercent: "+54%",
    },
    {
      id: 5,
      name: "Nike Air Max 1",
      image:
        "https://images.unsplash.com/photo-1719523677291-a395426c1a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBwcm9kdWN0fGVufDF8fHx8MTc2NTA1MjgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Nov 15, 2025",
      cost: "$160.00",
      salePrice: "$250.00",
      profit: "$90.00",
      profitPercent: "+56%",
    },
    {
      id: 6,
      name: "Air Jordan 4 Military Black",
      image:
        "https://images.unsplash.com/photo-1760302318620-261f5e4d1940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2VycyUyMHJldGFpbHxlbnwxfHx8fDE3NjUwNTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      purchaseDate: "Nov 8, 2025",
      cost: "$210.00",
      salePrice: "$410.00",
      profit: "$200.00",
      profitPercent: "+95%",
    },
  ];

  const filteredItems = purchasedItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalCost = purchasedItems.reduce(
    (sum, item) => sum + parseFloat(item.cost.replace("$", "")),
    0,
  );
  const totalRevenue = purchasedItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.salePrice.replace("$", "")),
    0,
  );
  const totalProfit = totalRevenue - totalCost;

  const handleExport = () => {
    alert("Exporting to CSV...");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 dark:text-white">
            Purchased Items History
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View your purchase history and profitability
          </p>
        </div>
        <button
          onClick={handleExport}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border-2 border-[#2074FF] text-[#2074FF] rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
        >
          <Download className="w-5 h-5" />
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-950/50 rounded-2xl p-5 border border-blue-200 dark:border-blue-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-blue-700 dark:text-blue-400">
              Total Items
            </div>
            <Package className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
          <div className="text-2xl text-blue-900 dark:text-blue-300">
            {purchasedItems.length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-950/50 rounded-2xl p-5 border border-purple-200 dark:border-purple-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-purple-700 dark:text-purple-400">
              Total Cost
            </div>
            <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-500" />
          </div>
          <div className="text-2xl text-purple-900 dark:text-purple-300">
            ${totalCost.toFixed(2)}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-950/50 rounded-2xl p-5 border border-orange-200 dark:border-orange-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-orange-700 dark:text-orange-400">
              Revenue
            </div>
            <DollarSign className="w-5 h-5 text-orange-600 dark:text-orange-500" />
          </div>
          <div className="text-2xl text-orange-900 dark:text-orange-300">
            ${totalRevenue.toFixed(2)}
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-950/50 rounded-2xl p-5 border border-green-200 dark:border-green-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-green-700 dark:text-green-400">
              Total Profit
            </div>
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-500" />
          </div>
          <div className="text-2xl text-green-900 dark:text-green-300">
            ${totalProfit.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search purchased items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
          />
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs shadow-lg">
                  {item.profitPercent}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="mb-2 line-clamp-2 dark:text-white">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{item.purchaseDate}</span>
                </div>
              </div>

              {/* Financial Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Cost
                  </span>
                  <span className="dark:text-gray-200">
                    {item.cost}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Sale Price
                  </span>
                  <span className="dark:text-gray-200">
                    {item.salePrice}
                  </span>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-200">
                      Profit
                    </span>
                    <span className="text-green-600 dark:text-green-500">
                      {item.profit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reorder Button */}
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                <RefreshCcw className="w-4 h-4" />
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="mb-2 dark:text-white">
            No items found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search
          </p>
        </div>
      )}
    </div>
  );
}