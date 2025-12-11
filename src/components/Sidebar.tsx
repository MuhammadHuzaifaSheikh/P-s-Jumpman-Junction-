import { LayoutDashboard, Plus, ShoppingBag, Package, CreditCard, Settings, Moon, Sun, Wifi, Menu, X } from "lucide-react";
import logo from "figma:asset/74f522c553e649f661d685c0730f8169366ca5c7.png";
import { useTheme } from "../context/ThemeContext";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Sidebar({ currentPage, onNavigate, isSidebarOpen, onToggleSidebar }: SidebarProps) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "create-order", label: "Create Order", icon: Plus },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "purchased", label: "Purchased", icon: Package },
    { id: "cards-logins", label: "Cards & Logins", icon: CreditCard },
    { id: "proxies", label: "Proxies", icon: Wifi },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center shadow-lg"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onToggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 z-40 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="P's Jumpman Junction" 
              className="w-14 h-14 object-contain"
            />
            <div>
              <div className="tracking-tight dark:text-white">P's Jumpman Junction</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Automation Pro</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#2074FF] text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">Dark Mode</span>
              </>
            )}
          </button>
          
          {/* Status */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Automation Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm dark:text-gray-200">All Systems Active</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}