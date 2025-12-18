import  gameArray  from "../post"

function index(req, res) {
    const risposta = {
        count: gameArray.length,
        results: gameArray
    }
    res.json(risposta)
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const game = gameArray.find(game => game.id === id);

    if (game === undefined) {
        res.status(404);
        return res.json({
            message: "Gioco non a disposizione",
        })
    }
    res.json(game)

}

function store(req, res) {
    res.send("creo nuovo gioco")
}

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna gioco n." + id)
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna parzialemte gioco n." + id)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const gameIndex = gameArray.findIndex((game) => game.id === id)

    if (gameIndex === -1) {
        res.status(404)
        return res.json({
            message: "gioco non disponibile"
        })
    }
    gameArray.splice(gameIndex, 1)
    res.sendStatus(204)

}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}
export default controller