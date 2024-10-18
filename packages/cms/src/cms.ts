import { Options } from "@citium/types/options";
import { getCollectionsRoutes } from "./routes/collections";
import { getAuthRoutes } from "./routes/auth";
import { getUsersRoutes } from "./routes/users";

export const init = async (config: Options): Promise<void> => {
  const { hono, adapter } = config;

  hono.route("/auth", getAuthRoutes(adapter));
  hono.route("/collections", getCollectionsRoutes(adapter));
  hono.route("/users", getUsersRoutes(adapter));
};
