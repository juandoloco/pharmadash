const db = require("../models");
const User = db.usuarios;
const Role = db.roles;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        usuario: req.body.usuario
      }
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.contrasenia,
      user.contrasenia
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user.id_usuario }, "pharmadash-secret-key", {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user.id_usuario,
      usuario: user.usuario,
      roles: ["admin"], // Hardcoded for this example
      accessToken: token
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
