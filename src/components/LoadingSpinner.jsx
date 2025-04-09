function LoadingSpinner() {
    return (
      <div className="mt-8">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-white/70 mt-2">Loading...</p>
      </div>
    );
  }
  
  export default LoadingSpinner;
  