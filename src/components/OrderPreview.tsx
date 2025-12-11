import { Package, MapPin, Calendar, CreditCard } from "lucide-react";

interface OrderPreviewProps {
  site?: string;
  productLink?: string;
  quantity?: number;
  deliveryMethod?: string;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  card?: string;
  launchDate?: string;
  launchTime?: string;
}

export function OrderPreview({
  site,
  productLink,
  quantity,
  deliveryMethod,
  name,
  address,
  phone,
  email,
  card,
  launchDate,
  launchTime,
}: OrderPreviewProps) {
  return (
    <div className="sticky top-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <Package className="w-5 h-5 text-[#2074FF]" />
        <h3 className="dark:text-white">Order Preview</h3>
      </div>

      <div className="space-y-4">
        {/* Site */}
        {site && (
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Site</div>
            <div className="text-sm dark:text-gray-200">{site}</div>
          </div>
        )}

        {/* Product Link */}
        {productLink && (
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Product</div>
            <div className="text-sm truncate dark:text-gray-200">{productLink}</div>
          </div>
        )}

        {/* Quantity & Delivery */}
        {(quantity || deliveryMethod) && (
          <div className="grid grid-cols-2 gap-3">
            {quantity && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Quantity</div>
                <div className="text-sm dark:text-gray-200">{quantity}</div>
              </div>
            )}
            {deliveryMethod && (
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Method</div>
                <div className="text-sm dark:text-gray-200">{deliveryMethod}</div>
              </div>
            )}
          </div>
        )}

        {/* Customer Info */}
        {(name || email || phone || address) && (
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 rounded-xl p-4 border border-blue-200 dark:border-blue-900">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#2074FF]" />
              <div className="text-xs text-gray-500 dark:text-gray-400">Checkout Details</div>
            </div>
            <div className="space-y-2 text-sm">
              {name && <div className="dark:text-gray-200">{name}</div>}
              {email && <div className="text-gray-600 dark:text-gray-400">{email}</div>}
              {phone && <div className="text-gray-600 dark:text-gray-400">{phone}</div>}
              {address && <div className="text-gray-600 dark:text-gray-400">{address}</div>}
            </div>
          </div>
        )}

        {/* Payment Card */}
        {card && (
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-[#2074FF]" />
              <div className="text-xs text-gray-500 dark:text-gray-400">Payment Method</div>
            </div>
            <div className="text-sm dark:text-gray-200">{card}</div>
          </div>
        )}

        {/* Launch Date & Time */}
        {(launchDate || launchTime) && (
          <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900 rounded-xl p-4 border border-green-200 dark:border-green-900">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-green-600 dark:text-green-500" />
              <div className="text-xs text-gray-500 dark:text-gray-400">Launch Time</div>
            </div>
            <div className="text-sm">
              {launchDate && <div className="dark:text-gray-200">{launchDate}</div>}
              {launchTime && <div className="text-gray-600 dark:text-gray-400">{launchTime}</div>}
            </div>
          </div>
        )}
      </div>

      {/* Info Badge */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="w-1 h-1 rounded-full bg-[#2074FF] mt-1.5" />
          <p>Preview updates as you fill out the form. Review before saving.</p>
        </div>
      </div>
    </div>
  );
}