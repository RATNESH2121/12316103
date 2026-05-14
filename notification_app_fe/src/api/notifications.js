import api from "./axios";
import { Log } from "../middleware/logger";

export const fetchNotifications = async () => {
  try {
    const response = await api.get("/notifications");

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return response.data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    throw error;
  }
};