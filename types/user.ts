export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "online" | "offline" | "away";
}
