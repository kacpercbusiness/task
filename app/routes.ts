import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("user-details/:userId", "routes/user-details.tsx"),
] satisfies RouteConfig;
