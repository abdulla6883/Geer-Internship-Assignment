import { users, products, type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { db } from "./db";
import { eq, or, like, and, gte, lte } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  searchProducts(query: string): Promise<Product[]>;
  filterProducts(category?: string, priceRange?: string): Promise<Product[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  async updateProduct(id: number, updateData: Partial<InsertProduct>): Promise<Product | undefined> {
    const [product] = await db
      .update(products)
      .set(updateData)
      .where(eq(products.id, id))
      .returning();
    return product || undefined;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await db
      .delete(products)
      .where(eq(products.id, id));
    return result.rowCount !== null && result.rowCount > 0;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const lowercaseQuery = `%${query.toLowerCase()}%`;
    return await db
      .select()
      .from(products)
      .where(
        or(
          like(products.name, lowercaseQuery),
          like(products.description, lowercaseQuery),
          like(products.category, lowercaseQuery)
        )
      );
  }

  async filterProducts(category?: string, priceRange?: string): Promise<Product[]> {
    let query = db.select().from(products);

    const conditions = [];

    if (category) {
      conditions.push(eq(products.category, category));
    }

    if (priceRange) {
      switch (priceRange) {
        case "0-50":
          conditions.push(and(gte(products.price, "0"), lte(products.price, "50")));
          break;
        case "50-100":
          conditions.push(and(gte(products.price, "50.01"), lte(products.price, "100")));
          break;
        case "100-200":
          conditions.push(and(gte(products.price, "100.01"), lte(products.price, "200")));
          break;
        case "200+":
          conditions.push(gte(products.price, "200.01"));
          break;
      }
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    return await query;
  }
}

export const storage = new DatabaseStorage();
