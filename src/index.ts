import express from "express";
import chefRouter from "./routes/chefRoutes";
import recipeRouter from "./routes/recipeRoutes";
import tagRouter from "./routes/tagRoutes";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Recipes API" });
});

app.use("/api/chefs", chefRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/tags", tagRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur est demarrée sur le port ${PORT}`);
});
