import { useState } from "react";
import { Save, Play, Link as LinkIcon, Package, User, MapPin, Mail, Phone, Calendar, Clock } from "lucide-react";
import { OrderPreview } from "./OrderPreview";

export function CreateOrderPage() {
  const [formData, setFormData] = useState({
    site: "",
    productLink: "",
    quantity: "1",
    deliveryMethod: "delivery",
    name: "",
    address: "",
    phone: "",
    email: "",
    card: "",
    launchDate: "",
    launchTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order saved successfully!");
  };

  const handleRunTest = () => {
    alert("Running test automation...");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="mb-2 dark:text-white">Create Automated Purchase</h1>
        <p className="text-gray-600 dark:text-gray-400">Set up a new automation for upcoming releases</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 space-y-6">
            {/* Site Selection */}
            <div>
              <label className="block text-sm mb-2 dark:text-gray-200">
                Select Site <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  required
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
                >
                  <option value="">Choose a site...</option>
                  <option value="Nike SNKRS">Nike SNKRS</option>
                  <option value="Adidas.com">Adidas.com</option>
                  <option value="Foot Locker">Foot Locker</option>
                  <option value="Finish Line">Finish Line</option>
                  <option value="NewBalance.com">NewBalance.com</option>
                  <option value="Shopify Store">Shopify Store (Generic)</option>
                </select>
              </div>
            </div>

            {/* Product Link */}
            <div>
              <label className="block text-sm mb-2 dark:text-gray-200">
                Product Link <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  required
                  placeholder="https://www.nike.com/..."
                  value={formData.productLink}
                  onChange={(e) => setFormData({ ...formData, productLink: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
                />
              </div>
            </div>

            {/* Quantity and Delivery Method */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 dark:text-gray-200">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 dark:text-gray-200">Fulfillment</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: "delivery" })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${
                      formData.deliveryMethod === "delivery"
                        ? "bg-[#2074FF] text-white border-[#2074FF] shadow-lg shadow-blue-500/30"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: "pickup" })}
                    className={`flex-1 py-3 px-4 rounded-xl border transition-all ${
                      formData.deliveryMethod === "pickup"
                        ? "bg-[#2074FF] text-white border-[#2074FF] shadow-lg shadow-blue-500/30"
                        : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    Pickup
                  </button>
                </div>
              </div>
            </div>

            {/* Checkout Details Section */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="mb-4 dark:text-white">Checkout Details</h3>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-200">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-200">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      required
                      placeholder="123 Main St, Apt 4B, New York, NY 10001"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all resize-none dark:text-white dark:placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 dark:text-gray-200">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 dark:text-gray-200">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <label className="block text-sm mb-2 dark:text-gray-200">
                Select Prepaid Card <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.card}
                onChange={(e) => setFormData({ ...formData, card: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all appearance-none cursor-pointer dark:text-white"
              >
                <option value="">Choose a card...</option>
                <option value="Visa ending in 4242">Visa ending in 4242</option>
                <option value="Mastercard ending in 8888">Mastercard ending in 8888</option>
                <option value="Amex ending in 1005">Amex ending in 1005</option>
              </select>
            </div>

            {/* Launch Date & Time */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="mb-4 dark:text-white">Launch Schedule</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-200">
                    Launch Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.launchDate}
                      onChange={(e) => setFormData({ ...formData, launchDate: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:[color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 dark:text-gray-200">
                    Launch Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="time"
                      required
                      value={formData.launchTime}
                      onChange={(e) => setFormData({ ...formData, launchTime: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2074FF] focus:border-transparent transition-all dark:text-white dark:[color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#2074FF] text-white rounded-xl hover:bg-[#1557c7] transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                <Save className="w-5 h-5" />
                Save Order
              </button>
              <button
                type="button"
                onClick={handleRunTest}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 border-2 border-[#2074FF] text-[#2074FF] rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                Run Test
              </button>
            </div>
          </form>
        </div>

        {/* Preview */}
        <div className="lg:col-span-1">
          <OrderPreview {...formData} />
        </div>
      </div>
    </div>
  );
}