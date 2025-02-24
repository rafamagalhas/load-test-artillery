const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3000;

// ❌ Problema: Criando conexão toda vez que chanpmmamos a API (lento!)
async function getUsersFromDb() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "testdb",
    });

    const [rows] = await connection.execute("SELECT * FROM users");
    
    await connection.end(); // ❌ Fecha a conexão a cada request (ineficiente)
    
    return rows;
}

// ❌ Endpoint Lento
app.get("/users-slow", async (req, res) => {
    try {
        const users = await getUsersFromDb();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
});

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
