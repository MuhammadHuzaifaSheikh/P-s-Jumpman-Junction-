import { useState } from "react";
import { Search, Filter, Eye, Edit, X, Calendar, Package } from "lucide-react";

export function OrderManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [siteFilter, setSiteFilter] = useState("all");

  const orders = [
    {
      id: "ORD-1001",
      site: "Nike SNKRS",
      product: "Air Jordan 1 Retro High OG",
      launchTime: "Dec 15, 2025 10:00 AM",
      status: "scheduled",
      quantity: 1,
    },
    {
      id: "ORD-1002",
      site: "Adidas.com",
      product: "Yeezy Boost 350 V2",
      launchTime: "Dec 18, 2025 9:00 AM",
      status: "scheduled",
      quantity: 2,
    },
    {
      id: "ORD-1003",
      site: "Foot Locker",
      product: "Nike Dunk Low Panda",
      launchTime: "Dec 10, 2025 12:00 PM",
      status: "completed",
      quantity: 1,
    },
    {
      id: "ORD-1004",
      site: "Nike SNKRS",
      product: "Air Max 1 '86 OG",
      launchTime: "Dec 8, 2025 11:00 AM",
      status: "running",
      quantity: 1,
    },
    {
      id: "ORD-1005",
      site: "NewBalance.com",
      product: "New Balance 550 White Grey",
      launchTime: "Dec 5, 2025 10:00 AM",
      status: "failed",
      quantity: 1,
    },
    {
      id: "ORD-1006",
      site: "Adidas.com",
      product: "Adidas Forum Low",
      launchTime: "Dec 3, 2025 9:00 AM",
      status: "completed",
      quantity: 1,
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "scheduled":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          label: "Scheduled",
        };
      case "running":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          label: "Running",
        };
      case "completed":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          label: "Completed",
        };
      case "failed":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          label: "Failed",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          label: status,
        };
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesSite = siteFilter === "all" || order.site === siteFilter;
    return matchesSearch && matchesStatus && matchesSite;
  });

  const stats = {
    scheduled: orders.filter((o) => o.status === "scheduled").length,
    running: orders.filter((o) => o.status === "running").length,
    completed: orders.filter((o) => o.status === "completed").length,
    failed: orders.filter((o) => o.status === "failed").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="mb-2 dark:text-white">Order Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor and manage all automation orders</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-950/50 rounded-2xl p-5 border border-blue-200 dark:border-blue-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-blue-700 dark:text-blue-400">Scheduled</div>
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
          <div className="text-2xl text-blue-900 dark:text-blue-300">{stats.scheduled}</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-950/50 rounded-2xl p-5 border border-yellow-200 dark:border-yellow-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-yellow-700 dark:text-yellow-400">Running</div>
            <Package className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
          </div>
          <div className="text-2xl text-yellow-900 dark:text-yellow-300">{stats.running}</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-950/50 rounded-2xl p-5 border border-green-200 dark:border-green-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-green-700 dark:text-green-400">Completed</div>
            <Package className="w-5 h-5 text-green-600 dark:text-green-500" />
          </div>
          <div className="text-2xl text-green-900 dark:text-green-300">{stats.completed}</div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-950/50 rounded-2xl p-5 border border-red-200 dark:border-red-900">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-red-700 dark:text-red-400">Failed</div>
            <X className="w-5 h-5 text-red-600 dark:text-red-500" />
          </div>
          <div className="text-2xl text-red-900 dark:text-red-300">{stats.failed}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Site Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={siteFilter}
              onChange={(e) => setSiteFilter(e.target.value)}
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

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Order ID</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Site</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Product</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Launch Time</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Qty</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => {
                const statusConfig = getStatusConfig(order.status);
                return (
                  <tr
                    key={order.id}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      index === filteredOrders.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#2074FF]">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm dark:text-gray-200">{order.site}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm line-clamp-1 dark:text-gray-200">{order.product}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{order.launchTime}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm dark:text-gray-200">{order.quantity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs ${statusConfig.bg} ${statusConfig.text}`}
                      >
                        {statusConfig.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-all">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="mb-2 dark:text-white">No orders found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}