export const AuthInput = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input 
      {...props} 
      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
    />
  </div>
);

export const AuthButton = ({ children, loading, ...props }: any) => (
  <button 
    {...props}
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:bg-blue-300"
  >
    {loading ? "Processing..." : children}
  </button>
);