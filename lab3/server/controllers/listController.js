const {List, Word} = require('../models/models');
const ApiError = require('../error/ApiError');

class ListController {
    async create(req, res, next) {
        try {
            const name = req.body.name;
            const list = await List.create({name});
            return res.json(list);
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        const lists = await List.findAll();
        return res.json(lists);
    }

    async getOne(req, res) {
        const listId = req.params.id;
        const list = await List.findOne({
            where:{id: listId},
            include: [{model: Word, as: 'words'}]
        });
        return res.json(list);
    }

}

module.exports = new ListController()