import { useState } from "react";
import { Search, Filter, Calendar, TrendingUp } from "lucide-react";
import { SneakerCard } from "./SneakerCard";

interface DashboardPageProps {
  onNavigateToCreateOrder: () => void;
}

export function DashboardPage({ onNavigateToCreateOrder }: DashboardPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedSite, setSelectedSite] = useState("all");

  const upcomingReleases = [
    {
      id: 1,
      name: "Air Jordan 1 Retro High OG 'University Blue'",
      brand: "Nike",
      price: "$170",
      releaseDate: "Dec 15, 2025",
      releaseTime: "10:00 AM EST",
      store: "Nike SNKRS",
      image: "https://images.unsplash.com/photo-1684351045483-b6c486fa979a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3JkYW4lMjBzbmVha2VycyUyMGJsYWNrfGVufDF8fHx8MTc2NTA1MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Adidas Yeezy Boost 350 V2 'Slate'",
      brand: "Adidas",
      price: "$230",
      releaseDate: "Dec 18, 2025",
      releaseTime: "9:00 AM EST",
      store: "Adidas.com",
      image: "https://images.unsplash.com/photo-1655982182278-c6eb38815a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB5ZWV6eSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NTA1MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Nike Dunk Low 'Panda'",
      brand: "Nike",
      price: "$110",
      releaseDate: "Dec 20, 2025",
      releaseTime: "12:00 PM EST",
      store: "Foot Locker",
      image: "https://images.unsplash.com/photo-1693743107371-ad6e933c7c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NjUwMDEzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "New Balance 550 'White Grey'",
      brand: "New Balance",
      price: "$120",
      releaseDate: "Dec 22, 2025",
      releaseTime: "10:00 AM EST",
      store: "NewBalance.com",
      image: "https://images.unsplash.com/photo-1707616782025-5d9e96413cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBiYWxhbmNlJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1MDQwNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      name: "Nike Air Max 1 '86 OG 'Big Bubble'",
      brand: "Nike",
      price: "$160",
      releaseDate: "Dec 25, 2025",
      releaseTime: "11:00 AM EST",
      store: "Nike SNKRS",
      image: "https://images.unsplash.com/photo-1719523677291-a395426c1a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBwcm9kdWN0fGVufDF8fHx8MTc2NTA1MjgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      name: "Air Jordan 4 Retro 'Military Black'",
      brand: "Nike",
      price: "$210",
      releaseDate: "Dec 28, 2025",
      releaseTime: "10:00 AM EST",
      store: "Nike SNKRS",
      image: "https://images.unsplash.com/photo-1760302318620-261f5e4d1940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2VycyUyMHJldGFpbHxlbnwxfHx8fDE3NjUwNTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const filteredReleases = upcomingReleases.filter((release) => {
    const matchesSearch = release.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === "all" || release.brand === selectedBrand;
    const matchesSite = selectedSite === "all" || release.store === selectedSite;
    return matchesSearch && matchesBrand && matchesSite;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 dark:text-white">Upcoming Sneaker Releases</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and automate your sneaker purchases</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl px-6 py-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#2074FF]" />
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Next Release</div>
                <div className="text-sm dark:text-gray-200">Dec 15, 2025</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl px-6 py-3 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-[#2074FF]" />
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Active Orders</div>
                <div className="text-sm dark:text-gray-200">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search sneakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Brand Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
            >
              <option value="all">All Brands</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="New Balance">New Balance</option>
            </select>
          </div>

          {/* Site Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
            >
              <option value="all">All Sites</option>
              <option value="Nike SNKRS">Nike SNKRS</option>
              <option value="Adidas.com">Adidas.com</option>
              <option value="Foot Locker">Foot Locker</option>
              <option value="NewBalance.com">NewBalance.com</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sneaker Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReleases.map((release) => (
          <SneakerCard
            key={release.id}
            {...release}
            onCreateOrder={onNavigateToCreateOrder}
          />
        ))}
      </div>

      {filteredReleases.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="mb-2 dark:text-white">No releases found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}