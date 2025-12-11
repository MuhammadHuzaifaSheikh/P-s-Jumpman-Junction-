import { User, Bell, Shield, Zap, Moon, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function SettingsPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="mb-2 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account and automation preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5 text-[#2074FF]" />
          <h3 className="dark:text-white">Profile Settings</h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-[#2074FF]" />
          <h3 className="dark:text-white">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm dark:text-gray-200">Order Confirmations</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Get notified when orders complete</div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2074FF]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm dark:text-gray-200">Release Alerts</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Alert 24 hours before release</div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2074FF]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm dark:text-gray-200">Failed Orders</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Notify when automation fails</div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2074FF]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-[#2074FF]" />
          <h3 className="dark:text-white">Automation Settings</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 dark:text-gray-300">Default Retry Attempts</label>
            <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white">
              <option value="3">3 attempts</option>
              <option value="5">5 attempts</option>
              <option value="10">10 attempts</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2 dark:text-gray-300">Timeout Duration (seconds)</label>
            <input
              type="number"
              defaultValue="30"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="w-5 h-5 text-[#2074FF]" />
          <h3 className="dark:text-white">Appearance</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm dark:text-gray-200">Dark Mode</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Toggle dark mode theme</div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only peer" 
              />
              <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2074FF] cursor-pointer"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-5 h-5 text-[#2074FF]" />
          <h3 className="dark:text-white">Security</h3>
        </div>
        <div className="space-y-4">
          <button className="w-full md:w-auto px-6 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            Change Password
          </button>
          <button className="w-full md:w-auto px-6 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            Enable Two-Factor Auth
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="w-full md:w-auto px-8 py-4 bg-[#2074FF] text-white rounded-xl hover:bg-[#1557c7] transition-all duration-200 shadow-lg shadow-blue-500/30">
          Save Changes
        </button>
      </div>
    </div>
  );
}