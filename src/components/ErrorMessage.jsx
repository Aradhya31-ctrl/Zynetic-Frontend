function ErrorMessage({ message }) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
        <p>{message}</p>
      </div>
    );
  }
  
  export default ErrorMessage;
