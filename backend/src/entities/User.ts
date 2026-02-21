export interface User {
  id?: number;
  email: string;
  password: string;
  name: string;
  role: "admin" | "client";
  admin_id?: number;
  created_at?: Date;
  updated_at?: Date;
}