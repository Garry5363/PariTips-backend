const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur PariTips Backend déployé avec Render !');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API PariTips !");
});
