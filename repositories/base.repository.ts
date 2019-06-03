interface iRepository {

}

export class BaseRepository implements iRepository {

    constructor() {

    }

    getOnlyDocumentFields(cursor: object): object {
        let items = {};
        cursor.forEach(function (item) {
            items[item._id] = item._doc;
        });
        return items;
    }
}