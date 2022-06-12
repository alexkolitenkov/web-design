
export default class Model{
    #lists
    constructor() {
        this.#lists = []
    }

    addList(title, content){
        if (!this.#lists.length){
            this.#lists.push({id: 0, title, content})
            return this.#lists[0].id;
        }
        const lastId = this.#lists[this.#lists.length - 1].id;
        this.#lists.push({id: lastId + 1, title, content});

        return lastId + 1;

    }

    deleteList(id){
        this.#lists = this.#lists.filter(list => list.id !== id);
    }

}




