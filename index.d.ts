import { Types } from "mongoose";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
    }
  }

  interface RequestWithUser extends Request {}
}
