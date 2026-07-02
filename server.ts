import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Secure API endpoint for Gemini-powered proposal synthesis
app.post("/api/gemini/proposal", async (req, res) => {
  try {
    const { businessName, industry, bottleneck, additionalNotes } = req.body;

    if (!businessName || !industry || !bottleneck) {
      return res.status(400).json({
        error: "Missing required fields: businessName, industry, and bottleneck are required.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY environment variable is not configured. Please add it in the Secrets panel.",
      });
    }

    // Initialize GenAI SDK as instructed in the gemini-api skill
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemInstruction = `You are the chief strategic advisor and chief technical officer of Deep Brain Reset, a premium Creative Technology Studio.
We solve complex business problems for startups, luxury brands, industrial companies, SaaS, restaurants, and luxury real estate by fusing Creative Direction, Software Engineering, and Artificial Intelligence into a single production pipeline.

Our core philosophy:
- Technology is not the product; it is the medium.
- We design before producing, strategize before coding, and conceptualize before generating AI.
- We use AI as an accelerator, never as a shortcut.
- Our tone is confident, professional, calm, sophisticated, and highly intelligent.
- We never use cheesy expressions or AI hype words like "cutting-edge", "revolutionary", "best-in-class", "disruptive", "passionate", "world-class". Show quality through pristine execution instead of claims.

Your task is to analyze the client's business challenge and synthesize an exceptionally thorough, highly strategic, custom Studio Proposal & Technical Brief. It must demonstrate rigorous conceptual thinking and technical feasibility, making the client feel confident that we can execute complex ideas that traditional marketing agencies or standard software companies cannot.

Write the proposal in clear, elegant, readable Markdown. Use markdown tables, technical listings (using monospaced text for folder layouts or schema designs), and precise steps where helpful.

Structure the proposal exactly as follows:
# DEEP BRAIN RESET // CLIENT STRATEGY & PRODUCTION BRIEF
For: ${businessName} [${industry}]
Theme: [A bespoke, elegant, poetic 3-5 word artistic conceptual title for the transformation]

## 1. STRATEGIC NARRATIVE & POSITIONING
Explain the true transformation we are building for them. Move past the surface-level request. What is the growth or perception shift they actually buy? Frame this with a luxurious, high-end creative philosophy.

## 2. CREATIVE DIRECTION & VISUAL STORYTELLING
Describe the cinematic visual identity, tone, and brand experience. Explain how we will conceptualize visual assets (films, 3D elements, typography pairing, layouts) inspired by premium Swiss design (e.g., Apple, Porsche, Leica) before generating any pixel.

## 3. FULL-STACK PLATFORM ARCHITECTURE
Define a concrete, custom software stack tailored to solve their core bottleneck (e.g. React/Vite, Express, TypeScript, database strategy, real-time sync, performance standards). Outline the system diagram or key components with technical precision.

## 4. PROCESS AUTOMATION & INTUITIVE AI WORKFLOWS
Outline a step-by-step workflow automation mapping how AI/APIs and workflows will eliminate their specific bottleneck (${bottleneck}) to save human labor or amplify creative output. Provide a structured diagram or layout of the automated steps.

## 5. EXECUTIVE DELIVERY ROADMAP
Provide a timeline of phases (Phase 1: Strategize, Phase 2: Design, Phase 3: Build, Phase 4: Deploy & Optimize) with measurable business deliverables. Present this as a guarantee of quality and predictability.`;

    const userPrompt = `Synthesize a Studio Proposal and Technical Brief for:
Company: ${businessName}
Industry: ${industry}
Core Bottleneck/Challenge: ${bottleneck}
Additional Strategic Context: ${additionalNotes || "None provided."}

Begin the markdown immediately. Do not include any introductory fluff outside of the requested markdown brief.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ proposal: response.text });
  } catch (error: any) {
    console.error("Gemini proposal synthesis error:", error);
    res.status(500).json({
      error: error.message || "An error occurred during proposal synthesis.",
    });
  }
});

// Setup Vite Dev Server Middleware in development, or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Deep Brain Reset Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
