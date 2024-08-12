import dotenv from "dotenv";

dotenv.config();

export default {
  port: parseInt(process.env.PORT || "3000", 10),
  defaultFontSize: "medium" as const,
  defaultStyle: "standard" as const,
};
