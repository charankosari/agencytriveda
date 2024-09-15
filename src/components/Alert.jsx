const Alert = ({ type, message }) => {
    const baseClasses = "p-4 rounded-md mb-4";
    let alertClasses = "";
  
    switch (type) {
      case "success":
        alertClasses = "bg-green-100 text-green-700 border border-green-400";
        break;
      case "error":
        alertClasses = "bg-red-100 text-red-700 border border-red-400";
        break;
      case "warning":
        alertClasses = "bg-yellow-100 text-yellow-700 border border-yellow-400";
        break;
      case "info":
        alertClasses = "bg-blue-100 text-blue-700 border border-blue-400";
        break;
      default:
        alertClasses = "bg-gray-100 text-gray-700 border border-gray-400";
    }
  
    return (
      <div className={`${baseClasses} ${alertClasses} text-sm`} >
        {message}
      </div>
    );
  };
  
  export default Alert;
  