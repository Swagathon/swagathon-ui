export interface Route {
  path: string;
  label: string;
}

export const routes: Route[] = [
  { path: "/", label: "Home" },
  { path: "/ratings", label: "Ratings" },
  { path: "/data", label: "Data" },
  { path: "/admin", label: "Admin" },
  { path: "/claim", label: "Claim" },
];
