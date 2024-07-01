const { Sequelize } = require("sequelize");
const fs = require("fs");
const { existsSync } = require("fs");
const dotenv = require("dotenv");
if (existsSync(".env")) {
  dotenv.config({ path: "./.env" });
}
process.env.NODE_OPTIONS = "--max_old_space_size=4096";
const toBool = (x) => x === "true";
const DATABASE_URL = process.env.DATABASE_URL || "./database.db";

module.exports = {
  LOGS: toBool(process.env.LOGS) || true,
  PM_BLOCK: toBool(process.env.PM_BLOCK) || false,
  AJOIN: toBool(process.env.AJOIN) || true,
  REPO: "C-iph3r/alpha-md",
  REJECT_CALL: toBool(process.env.REJECT_CALL) || true,
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  DISABLE_PM: toBool(process.env.DISABLE_PM) || false,
  DISABLE_GRP: toBool(process.env.DISABLE_GRP) || false,
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  ERR_REPORT: toBool(process.env.ERR_REPORT) || false,
  STATUS_VIEW: toBool(process.env.STATUS_VIEW) || true,
  SESSION_ID: process.env.SESSION_ID || "A_L_P_H_A_24_06_22_0O8M_3D_M7w",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLERS === "false" || process.env.HANDLERS === "null"
      ? "^"
      : "^[#.,]",
  RMBG_KEY: process.env.RMBG_KEY || "",
  BRANCH: "main",
  WARN_COUNT: 3,
  PACKNAME: process.env.PACKNAME || "alpha",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "c-iph3r",
  SUDO: process.env.SUDO || "265990117051,2349137982266",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "C-iph3r",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "Vesper-Multidevice",
  AUTO_READ: toBool(process.env.AUTO_READ) || false,
  DIS_START_MSG: toBool(process.env.DIS_START_MSG) || false,
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE) || false,
  PROCESSNAME: process.env.PROCESSNAME || "vesper",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  TZ: process.env.TZ || "Africa/Blantyre",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || true,
  DELETED_LOG_CHAT: "120363293418213276@g.us",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          logging: false,
        }),
};
