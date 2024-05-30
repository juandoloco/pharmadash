const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./models"); // Asegúrate de que el módulo existe y está en la ruta correcta
db.sequelize.sync();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require("./routes/auth.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
