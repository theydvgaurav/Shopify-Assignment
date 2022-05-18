const model = require('../models/inventoryItemModel')

const addItem = async (req, res) => {

    const newItem = new model.items({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    });

    newItem.save()
        .then(data => res.json({ "status": "success", "message": `Added ${newItem.name} ` }))
        .catch(err => res.json(err))


}

const getAllItems = async (req, res) => {

    try {
        const data = await model.items.find();
        res.send(data);
    }
    catch (e) {
        res.status(400).send(e);
    }

}

const getItemById = async (req, res) => {
    const _id = req.params.id;

    try {
        const data = await model.items.findById(_id)

        data.deleted ? (res.send({ "status": "success", "message": "Item is deleted" })) : res.send(data);

    }
    catch (e) {
        res.status(400).send(e);
    }

}

const updateItem = async (req, res) => {
    const _id = req.params.id;

    const UpdatedItem = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    };

    try {
        const updated = await model.items.findByIdAndUpdate(_id, UpdatedItem)
        res.send({ "status": "success", "message": `Updated ${updated.name} ` })
    }
    catch (e) {
        res.status(400).send(e);
    }

}

const deleteItem = async (req, res) => {
    const _id = req.params.id;
    try {
        const data = await model.items.findById(_id);
        const newItem = {
            deleted: true,
            comment: req.body.comment,
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
        };


        const updatedItem = await model.items.findByIdAndUpdate(_id, newItem);
        res.send({ "status": "success", "message": `Removed ${updatedItem.name} ` });
    } catch (e) {
        res.sendStatus(400).send(e);
    }
}

const undelItem = async (req, res) => {
    const _id = req.params.id;
    try {
        const data = await model.items.findById(_id);
        const newItem = {
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
        };

        const updatedItem = await model.items.findOneAndReplace(_id, newItem);
        res.send({ "status": "success", "message": `Retrieved ${updatedItem.name} ` });
    } catch (e) {
        res.sendStatus(400).send(e);
    }
}

module.exports = { addItem, getAllItems, getItemById, updateItem, deleteItem, undelItem }