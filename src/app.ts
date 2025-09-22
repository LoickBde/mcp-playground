import express from "express";
import cors from "cors";
import mcpRoutes from "./routes/mcpRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/mcp", mcpRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
