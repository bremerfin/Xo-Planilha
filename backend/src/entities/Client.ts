export interface Client {
  id?: number;
  user_id: number;
  admin_id: number;
  phone?: string;
  address?: string;
  financial_score: number;
  total_assets: number;
  created_at?: Date;
  updated_at?: Date;
}