import { useState } from "react";
import { Search, Plus, BarChart3, Activity, Wifi, WifiOff, Trash2, Edit, CheckCircle, XCircle, Globe } from "lucide-react";

interface Proxy {
  id: number;
  name: string;
  address: string;
  port: string;
  location: string;
  protocol: string;
  successRate: number;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  avgLatency: number;
  uptime: number;
  status: "active" | "inactive" | "error";
  lastUsed: string;
  worksOn: string[];
}

export function ProxiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock proxy data
  const proxies: Proxy[] = [
    {
      id: 1,
      name: "US East Datacenter #1",
      address: "192.168.1.100",
      port: "8080",
      location: "New York, US",
      protocol: "HTTP",
      successRate: 98.5,
      totalRequests: 1523,
      successfulRequests: 1500,
      failedRequests: 23,
      avgLatency: 45,
      uptime: 99.8,
      status: "active",
      lastUsed: "2 min ago",
      worksOn: ["Nike SNKRS", "Foot Locker", "Adidas.com"],
    },
    {
      id: 2,
      name: "EU West Datacenter #2",
      address: "185.45.67.90",
      port: "3128",
      location: "London, UK",
      protocol: "HTTPS",
      successRate: 95.2,
      totalRequests: 2145,
      successfulRequests: 2042,
      failedRequests: 103,
      avgLatency: 78,
      uptime: 98.5,
      status: "active",
      lastUsed: "5 min ago",
      worksOn: ["Foot Locker", "JD Sports", "Size?"],
    },
    {
      id: 3,
      name: "US West Residential #1",
      address: "203.154.78.22",
      port: "8888",
      location: "Los Angeles, US",
      protocol: "SOCKS5",
      successRate: 92.8,
      totalRequests: 987,
      successfulRequests: 916,
      failedRequests: 71,
      avgLatency: 120,
      uptime: 97.2,
      status: "active",
      lastUsed: "12 min ago",
      worksOn: ["Nike SNKRS", "Shopify Sites"],
    },
    {
      id: 4,
      name: "Asia Pacific #1",
      address: "103.28.90.44",
      port: "8080",
      location: "Tokyo, JP",
      protocol: "HTTP",
      successRate: 88.4,
      totalRequests: 765,
      successfulRequests: 676,
      failedRequests: 89,
      avgLatency: 210,
      uptime: 95.1,
      status: "active",
      lastUsed: "1 hour ago",
      worksOn: ["Atmos Tokyo", "BAPE"],
    },
    {
      id: 5,
      name: "EU Central Backup",
      address: "194.67.23.11",
      port: "3128",
      location: "Frankfurt, DE",
      protocol: "HTTPS",
      successRate: 76.3,
      totalRequests: 543,
      successfulRequests: 414,
      failedRequests: 129,
      avgLatency: 340,
      uptime: 89.5,
      status: "error",
      lastUsed: "3 hours ago",
      worksOn: ["Adidas.com"],
    },
    {
      id: 6,
      name: "Canada Datacenter #1",
      address: "142.78.90.55",
      port: "8080",
      location: "Toronto, CA",
      protocol: "HTTP",
      successRate: 0,
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      avgLatency: 0,
      uptime: 0,
      status: "inactive",
      lastUsed: "Never",
      worksOn: [],
    },
  ];

  const filteredProxies = proxies.filter((proxy) => {
    const matchesSearch = 
      proxy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proxy.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proxy.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || proxy.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate overall stats
  const totalProxies = proxies.length;
  const activeProxies = proxies.filter(p => p.status === "active").length;
  const avgSuccessRate = proxies.reduce((acc, p) => acc + p.successRate, 0) / totalProxies;
  const avgLatency = proxies.reduce((acc, p) => acc + p.avgLatency, 0) / totalProxies;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800";
      case "inactive":
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700";
      case "error":
        return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700";
    }
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 95) return "text-green-600 dark:text-green-400";
    if (rate >= 85) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 dark:text-white">Proxy Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage your proxy servers</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="w-full lg:w-auto px-6 py-3 bg-[#2074FF] text-white rounded-xl hover:bg-[#1557c7] transition-all duration-200 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Proxy
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#2074FF]" />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
          </div>
          <div className="text-2xl dark:text-white mb-1">{totalProxies}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Proxies Configured</div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Wifi className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Active</div>
          </div>
          <div className="text-2xl dark:text-white mb-1">{activeProxies}/{totalProxies}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Online Proxies</div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Success</div>
          </div>
          <div className="text-2xl dark:text-white mb-1">{avgSuccessRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Avg Success Rate</div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Speed</div>
          </div>
          <div className="text-2xl dark:text-white mb-1">{avgLatency.toFixed(0)}ms</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Avg Latency</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search proxies by name, address, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="error">Error</option>
            </select>
          </div>
        </div>
      </div>

      {/* Proxies List */}
      <div className="space-y-4">
        {filteredProxies.map((proxy) => (
          <div
            key={proxy.id}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-[#2074FF] dark:hover:border-[#2074FF] transition-all duration-200 group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Left Section: Proxy Info */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      proxy.status === "active" 
                        ? "bg-green-100 dark:bg-green-900/30" 
                        : proxy.status === "error"
                        ? "bg-red-100 dark:bg-red-900/30"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}>
                      {proxy.status === "active" ? (
                        <Wifi className="w-6 h-6 text-green-600 dark:text-green-400" />
                      ) : proxy.status === "error" ? (
                        <WifiOff className="w-6 h-6 text-red-600 dark:text-red-400" />
                      ) : (
                        <WifiOff className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 dark:text-white">{proxy.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{proxy.address}:{proxy.port}</span>
                        <span>•</span>
                        <span>{proxy.location}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          {proxy.protocol}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-lg border text-xs ${getStatusColor(proxy.status)}`}>
                      {proxy.status === "active" ? "Active" : proxy.status === "error" ? "Error" : "Inactive"}
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Success Rate</div>
                    <div className={`text-lg ${getSuccessRateColor(proxy.successRate)} dark:opacity-90`}>
                      {proxy.successRate > 0 ? `${proxy.successRate}%` : "N/A"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Uptime</div>
                    <div className="text-lg dark:text-white">
                      {proxy.uptime > 0 ? `${proxy.uptime}%` : "N/A"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg Latency</div>
                    <div className="text-lg dark:text-white">
                      {proxy.avgLatency > 0 ? `${proxy.avgLatency}ms` : "N/A"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Last Used</div>
                    <div className="text-lg dark:text-white">{proxy.lastUsed}</div>
                  </div>
                </div>

                {/* Request Stats */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="text-gray-600 dark:text-gray-400">Total Requests:</div>
                    <div className="dark:text-white">{proxy.totalRequests}</div>
                  </div>
                  <div className="hidden sm:block text-gray-300 dark:text-gray-700">|</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <div className="text-green-600 dark:text-green-400">{proxy.successfulRequests} successful</div>
                  </div>
                  <div className="hidden sm:block text-gray-300 dark:text-gray-700">|</div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    <div className="text-red-600 dark:text-red-400">{proxy.failedRequests} failed</div>
                  </div>
                </div>

                {/* Works On Sites */}
                {proxy.worksOn.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Works on:</div>
                    <div className="flex flex-wrap gap-2">
                      {proxy.worksOn.map((site, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-[#2074FF] dark:text-blue-400 rounded-lg text-xs border border-blue-200 dark:border-blue-800"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Section: Actions */}
              <div className="flex sm:flex-row lg:flex-col gap-2">
                <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm">Stats</span>
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all flex items-center justify-center gap-2">
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProxies.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="mb-2 dark:text-white">No proxies found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters or add a new proxy</p>
        </div>
      )}
    </div>
  );
}
