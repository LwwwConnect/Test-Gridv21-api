const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const SUPABASE_URL = "https://ttnllyjrjgdyllylpjts.supabase.co";
const SUPABASE_KEY =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bmxseWpyamdkeWxseWxwanRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1Mjk1ODEsImV4cCI6MjA5MjEwNTU4MX0.48N---TSkIFiOcqUGqvY_NV7vGjqpMivPCvGPzYM0XQ

// CREATE TOOL
app.post("/tools", async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/tools`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

// GET TOOLS
app.get("/tools", async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/tools`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    }
  });

  const data = await response.json();
  res.json(data);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("RUNNING"));

app.listen(process.env.PORT || 3000);
