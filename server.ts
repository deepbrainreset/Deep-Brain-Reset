import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Secure API endpoint for Gemini-powered proposal synthesis with strict response schema
app.post("/api/gemini/proposal", async (req, res) => {
  try {
    const company = req.body.company || req.body.businessName;
    const industry = req.body.industry;
    const bottleneck = req.body.bottleneck;
    const goals = req.body.goals || req.body.additionalNotes || "Operational refinement";
    const timeline = req.body.timeline || "Immediate";
    const budget = req.body.budget || "Flexible / Not specified";
    const positioning = req.body.positioning || "Premium and modern";

    if (!company || !industry || !bottleneck) {
      return res.status(400).json({
        error: "Missing required fields: company, industry, and bottleneck are required.",
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

You must output a structured JSON response matching the provided schema. The "fullMarkdownReport" property must contain a complete, thorough, premium Markdown document of the consulting brief, containing detailed strategic narratives and technical breakdowns. Use markdown tables, technical listings, and bullet points where helpful. No introductory conversational fluff outside of the requested JSON structure.`;

    const userPrompt = `Synthesize a luxury executive consulting report and proposal for the following client:
Company: ${company}
Industry: ${industry}
Current Bottleneck: ${bottleneck}
Business Goals: ${goals}
Timeline: ${timeline}
Budget: ${budget}
Brand Positioning / Creative Tone: ${positioning}

Analyze their constraints and produce an elite strategic response. Make sure to:
1. Formulate a bespoke 3-5 word conceptual "artistic title" for their project.
2. Outline a concrete proposed architecture solving their bottleneck.
3. Define estimated implementation phases in the roadmap.
4. Output the result in the requested JSON structure.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            executiveOverview: { 
              type: Type.STRING, 
              description: "A summary of the strategic narrative, positioning, and overall business transformation they are purchasing." 
            },
            coreProblem: { 
              type: Type.STRING, 
              description: "An intellectual dissection of their core operational bottleneck and system friction." 
            },
            proposedArchitecture: { 
              type: Type.STRING, 
              description: "The proposed technical architecture, software stack, and technical system blueprint." 
            },
            recommendedServices: { 
              type: Type.STRING, 
              description: "The specific services and practice solutions we recommend for their operations." 
            },
            estimatedTimeline: { 
              type: Type.STRING, 
              description: "A professional estimate of the timeline, aligned with their parameters." 
            },
            estimatedImplementationPhases: { 
              type: Type.STRING, 
              description: "A breakdown of delivery milestones across Phase 1: Strategize, Phase 2: Design, Phase 3: Build, Phase 4: Deploy & Optimize." 
            },
            fullMarkdownReport: { 
              type: Type.STRING, 
              description: "The full executive consulting report formatted in elegant, high-prestige Markdown." 
            }
          },
          required: [
            "executiveOverview",
            "coreProblem",
            "proposedArchitecture",
            "recommendedServices",
            "estimatedTimeline",
            "estimatedImplementationPhases",
            "fullMarkdownReport"
          ]
        }
      },
    });

    const parsedData = JSON.parse(response.text);
    res.json({
      success: true,
      proposal: parsedData.fullMarkdownReport,
      data: parsedData
    });
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
