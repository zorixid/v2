export const formatDate = (timestamp: string, format: string): string => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  switch (format) {
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    case "mm-dd":
      return `${month}-${day}`;
    case "mm-dd hh:mm":
      return `${month}-${day} ${hours}:${minutes}`;
    default:
      return "Invalid Format";
  }
};
