import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthService {
  async registerUser(email: string, password: string, name: string, role: "admin" | "client" = "client") {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    return {
      email,
      password: hashedPassword,
      name,
      role
    };
  }

  async verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  generateToken(userId: number, email: string, role: string) {
    const token = jwt.sign(
      { id: userId, email, role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: process.env.JWT_EXPIRATION || "7d" }
    );
    return token;
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || "secret");
    } catch (error) {
      throw new Error("Token inválido");
    }
  }
}