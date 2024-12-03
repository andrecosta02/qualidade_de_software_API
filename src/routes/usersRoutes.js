const express = require("express")
const router = express.Router()

const usersController = require("../users/usersController")

router.get("/", usersController.listAll)            // Listar todos os usuários
router.get("/:userId", usersController.listOne)     // Listar usuário passado como parametro
router.post("/register", usersController.register)  // Criar um novo usuário
router.put("/:clientId", usersController.update)    // Atualizar o usuário
router.delete("/:clientId", usersController.delete) // Deletar usuário

module.exports = router