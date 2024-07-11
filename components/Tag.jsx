'use client'
export const SoldOut = () => <span className="w-fit text-gray-0 text-lg px-2 py-1 bg-gray-400 rounded-sm font-semibold">SOLD OUT</span>
export const Sale = ({ percent }) => <span className="w-fit text-gray-900 text-lg px-2 py-1 bg-warning-400 rounded-sm font-semibold">{percent}% OFF</span>
export const Hot = () => <span className="w-fit text-gray-0 text-lg px-2 py-1 bg-danger-500 rounded-sm font-semibold">HOT</span>
export const BestDeal = () => <span className="w-fit text-gray-0 text-lg px-2 py-1 bg-secondary-500 rounded-sm font-semibold">BEST DEALS</span>
