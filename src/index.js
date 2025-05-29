const express = require("express");
const { PrismaClient } = require("@prisma/client");
const userRoutes = require("./routes/user");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
