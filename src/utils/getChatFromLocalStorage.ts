import { IChat } from "../lib/data/Types";

export const getChatInitialData = () => {
  const value = localStorage.getItem("chatData");
  if (value) {
    try {
      const data: IChat[] = JSON.parse(value);
      if (data.length > 0) {
        return data;
      }
    } catch (error) {
      console.error("Error parsing chat data from localStorage:", error);
    }
  }
  return [];
};

export const getChatInitialIds = () => {
  const value = localStorage.getItem("chatIds");
  if (value) {
    try {
      const data: string[] = JSON.parse(value);
      if (data.length > 0) {
        return data;
      }
    } catch (error) {
      console.error("Error parsing chat data from localStorage:", error);
    }
  }
  return [];
};
