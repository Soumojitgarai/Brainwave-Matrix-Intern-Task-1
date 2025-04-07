import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contactData);
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form"
      });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const result = await storage.subscribeNewsletter(newsletterData);
      res.status(201).json({ 
        success: true, 
        message: "Subscribed to newsletter successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      // Handle duplicate email error
      if (error instanceof Error && error.message.includes("unique")) {
        return res.status(409).json({
          success: false,
          message: "This email is already subscribed to our newsletter"
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to subscribe to newsletter"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
