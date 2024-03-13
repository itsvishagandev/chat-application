export const getTime = (dateString: string) => {
  const date = new Date(dateString);
  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return timeString;
};

export const getDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  const dateString = `${day}/${month}/${year}`;
  return dateString;
};
