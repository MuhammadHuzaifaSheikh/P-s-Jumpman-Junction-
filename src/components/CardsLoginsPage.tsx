import { useState } from "react";
import { CreditCard, Lock, Plus, Eye, EyeOff, Shield, Edit, Trash2, Info } from "lucide-react";

export function CardsLoginsPage() {
  const [activeTab, setActiveTab] = useState<"cards" | "logins">("cards");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleVisibility = (id: number) => {
    const newVisible = new Set(visibleItems);
    if (newVisible.has(id)) {
      newVisible.delete(id);
    } else {
      newVisible.add(id);
    }
    setVisibleItems(newVisible);
  };

  const prepaidCards = [
    { id: 1, name: "Personal Visa", last4: "4242", expiry: "12/25", balance: "$1,250.00" },
    { id: 2, name: "Business Mastercard", last4: "8888", expiry: "06/26", balance: "$3,500.00" },
    { id: 3, name: "Backup Amex", last4: "1005", expiry: "03/27", balance: "$850.00" },
  ];

  const storeLogins = [
    { id: 1, site: "Nike SNKRS", email: "user@example.com", username: "sneakerhead_123" },
    { id: 2, site: "Adidas.com", email: "user@example.com", username: "adidas_fan" },
    { id: 3, site: "Foot Locker", email: "user@example.com", username: "footlocker_pro" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 dark:text-white">Secure Vault</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your payment methods and store credentials</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#2074FF] text-white rounded-xl hover:bg-[#1557c7] transition-all duration-200 shadow-lg shadow-blue-500/30">
          <Plus className="w-5 h-5" />
          Add New
        </button>
      </div>

      {/* Security Badge */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl border border-green-200 dark:border-green-900 p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm dark:text-gray-200">Encrypted & Secured</span>
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative"
              >
                <Info className="w-4 h-4 text-green-600 dark:text-green-400" />
                {showTooltip && (
                  <div className="absolute left-6 top-0 w-64 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl z-10">
                    All sensitive data is encrypted using AES-256 encryption and stored securely. Your credentials are never shared with third parties.
                  </div>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Your payment and login information is protected with bank-level encryption
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-2 inline-flex gap-2">
        <button
          onClick={() => setActiveTab("cards")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 ${
            activeTab === "cards"
              ? "bg-[#2074FF] text-white shadow-lg shadow-blue-500/30"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <CreditCard className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm">Prepaid Cards</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === "cards" ? "bg-white/20" : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            {prepaidCards.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab("logins")}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 ${
            activeTab === "logins"
              ? "bg-[#2074FF] text-white shadow-lg shadow-blue-500/30"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          <Lock className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm">Store Logins</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === "logins" ? "bg-white/20" : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            {storeLogins.length}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === "cards" ? (
          <>
            {prepaidCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Card Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2074FF] to-[#1557c7] flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>

                    {/* Card Details */}
                    <div className="flex-1">
                      <h3 className="mb-2 dark:text-white">{card.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Card Number</div>
                            <div className="text-sm flex items-center gap-2 dark:text-gray-200">
                              {visibleItems.has(card.id) ? (
                                <span>•••• •••• •••• {card.last4}</span>
                              ) : (
                                <span>•••• •••• •••• ••••</span>
                              )}
                              <button
                                onClick={() => toggleVisibility(card.id)}
                                className="text-[#2074FF] hover:text-[#1557c7]"
                              >
                                {visibleItems.has(card.id) ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Expiry</div>
                            <div className="text-sm dark:text-gray-200">{card.expiry}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Balance</div>
                            <div className="text-sm dark:text-gray-200">{card.balance}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-all">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {storeLogins.map((login) => (
              <div
                key={login.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Login Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Lock className="w-6 h-6 text-white" />
                    </div>

                    {/* Login Details */}
                    <div className="flex-1">
                      <h3 className="mb-2 dark:text-white">{login.site}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-6">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                            <div className="text-sm dark:text-gray-200">{login.email}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Username</div>
                            <div className="text-sm dark:text-gray-200">{login.username}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Password</div>
                            <div className="text-sm flex items-center gap-2 dark:text-gray-200">
                              {visibleItems.has(login.id) ? (
                                <span>MyP@ssw0rd123!</span>
                              ) : (
                                <span>••••••••••••</span>
                              )}
                              <button
                                onClick={() => toggleVisibility(login.id)}
                                className="text-[#2074FF] hover:text-[#1557c7]"
                              >
                                {visibleItems.has(login.id) ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-all">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}