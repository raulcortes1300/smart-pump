import express from "express";
import cors from "cors";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import jwt from "jsonwebtoken";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter, { users: [] });

await db.read();

app.use(cors());
app.use(express.json());

const JWT_SECRET = "your-secret-key";

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  await db.read();
  const user = db.data.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  const { password: _, ...userWithoutPassword } = user;

  res.json({
    token,
    user: userWithoutPassword,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
