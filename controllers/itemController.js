import Item from "../models/itemModel.js";

const getItems = async function (request, response) {
  try {
    const items = await Item.find();
    response.status(200).json({
      status: "success",
      result: items.length,
      data: items,
    });
  } catch (error) {
    response.status(404).json({
      message: "No Items are found",
    });
  }
};

const createItem = async function (request, response) {
  try {
    const cityObj = request.body;
    const newItem = await Item.create(cityObj);

    response.status(201).json({
      status: "success",
      data: newItem,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

const updateItem = async function (request, response) {
  const id = request.params.id;
  const itemObj = request.body;
  try {
    const item = await Item.findByIdAndUpdate(id, itemObj);

    response.status(200).json({
      status: "success",
      data: item,
    });
  } catch (error) {
    response.status(404).json({
      message: "No Item found with that id",
    });
  }
};

const deleteItem = async function (request, response) {
  const id = request.params.id;

  try {
    await Item.findByIdAndDelete(id);

    response.status(204).json({
      data: null,
    });
  } catch (error) {
    response.status(404).json({
      message: "No Item found with that id",
    });
  }
};

const deleteItems = async function (request, response) {
  try {
    await Item.deleteMany();

    response.status(204).json({
      data: null,
    });
  } catch (error) {
    response.status(404).json({
      message: "No Items found",
    });
  }
};

export { getItems, createItem, updateItem, deleteItem, deleteItems };
