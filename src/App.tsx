import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./components/DashboardPage";
import { CreateOrderPage } from "./components/CreateOrderPage";
import { CardsLoginsPage } from "./components/CardsLoginsPage";
import { OrderManagementPage } from "./components/OrderManagementPage";
import { PurchasedPage } from "./components/PurchasedPage";
import { SettingsPage } from "./components/SettingsPage";
import { ProxiesPage } from "./components/ProxiesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage onNavigateToCreateOrder={() => setCurrentPage("create-order")} />;
      case "create-order":
        return <CreateOrderPage />;
      case "orders":
        return <OrderManagementPage />;
      case "purchased":
        return <PurchasedPage />;
      case "cards-logins":
        return <CardsLoginsPage />;
      case "proxies":
        return <ProxiesPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage onNavigateToCreateOrder={() => setCurrentPage("create-order")} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={(page) => {
            setCurrentPage(page);
            setIsSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="lg:ml-64 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}