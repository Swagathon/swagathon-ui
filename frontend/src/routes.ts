export interface Route {
  path: string;
  label: string;
}

export const routes: Route[] = [
  { path: "/", label: "Home" },
  { path: "/admin", label: "Admin" },
  { path: "/claim", label: "Claim" },
  { path: "/ratings", label: "Ratings" },
];
