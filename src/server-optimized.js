const express = require("express");
const mysql = require("mysql2/promise");
const redis = require("redis");

const app = express();
const PORT = 3000;

// 🔹 Criando pool de conexões para melhor performance
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
    waitForConnections: true,
    connectionLimit: 10,  // 🔹 Máximo de 10 conexões simultâneas
    queueLimit: 0,
});

// 🔹 Configurando o Redis para cache
const redisClient = redis.createClient();
redisClient.connect();

// 🔹 Endpoint rápido com cache e pool de conexões
app.get("/users-fast", async (req, res) => {
    try {
        const cacheKey = "users_list";
        const cachedUsers = await redisClient.get(cacheKey);

        if (cachedUsers) {
            return res.json(JSON.parse(cachedUsers));  // 🔹 Retorna do cache
        }

        // 🔹 Busca do banco com pool de conexões (melhor performance)
        const [rows] = await pool.execute("SELECT * FROM users");

        await redisClient.set(cacheKey, JSON.stringify(rows), { EX: 3600 });  // 🔹 Cache por 1h
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
});

app.listen(PORT, () => {
    console.log(`API otimizada rodando na porta ${PORT}`);
});
