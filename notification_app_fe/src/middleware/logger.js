import api from "../api/axios";

export const Log = async (stack, level, pkg, message) => {
  try {
    await api.post("/logs", {
      stack,
      level,
      package: pkg,
      message,
    });

    console.log("Log sent successfully");
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
};