import Model from "./Model.mjs";
import View from "./View.mjs";


class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.bindAddList(this.handleAddList)
    }

    handleAddList = (title) => {
        let id = this.model.addList(title);
        this.view.addListElement(title, id, this.handleDeleteList);
    }

    handleDeleteList = (id) => {
        this.model.deleteList(id)
        this.view.deleteList(id)
    }

}

const app = new Controller(new Model(), new View())

