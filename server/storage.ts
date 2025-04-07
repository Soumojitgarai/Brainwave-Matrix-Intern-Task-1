import { 
  users, type User, type InsertUser,
  contact, type Contact, type InsertContact,
  newsletter, type Newsletter, type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter methods
  subscribeNewsletter(data: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private emailsInNewsletter: Set<string>;
  
  userCurrentId: number;
  contactCurrentId: number;
  newsletterCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.emailsInNewsletter = new Set();
    
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.newsletterCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContact(contactData: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const now = new Date();
    const contact: Contact = { 
      ...contactData, 
      id,
      createdAt: now
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async subscribeNewsletter(data: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    if (this.emailsInNewsletter.has(data.email)) {
      throw new Error("Email must be unique");
    }
    
    const id = this.newsletterCurrentId++;
    const now = new Date();
    const newsletter: Newsletter = {
      ...data,
      id,
      createdAt: now
    };
    
    this.newsletters.set(id, newsletter);
    this.emailsInNewsletter.add(data.email);
    
    return newsletter;
  }
}

export const storage = new MemStorage();
