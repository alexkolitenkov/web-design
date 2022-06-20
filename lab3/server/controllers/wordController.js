const {Word} = require('../models/models');
const ApiError = require('../error/ApiError');

class WordController {
    async create(req, res) {
        const text = req.body.text;
        const extra = req.body.extra;
        const listId = req.body.listId;
        const word = await Word.create({text, extra, listId});
        return res.json(word);
    }

    async getAll(req, res) {
        const listId = req.params.listId;
        const words = await Word.findAll({where:{listId: listId}});
        return res.json(words);
    }

}

module.exports = new WordController()