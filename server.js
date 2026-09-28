const express = require('express');
const app = express();

app.use(express.json());
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, concluida } = req.body;
    if (concluida === undefined) {
        return res.status(400).json({
            erro: "Informe o status 'concluida' (boolean)."
        });
    }
    res.status(200).json({
        mensagem: "Tarefa atualizada com sucesso!",
        tarefa: {
            id: id,
            titulo: titulo,
            concluida: concluida
        }
    });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
});