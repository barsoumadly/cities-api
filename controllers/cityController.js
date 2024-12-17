import City from "../models/cityModel.js";

const getCities = async function (request, response) {
  try {
    const cities = await City.find();
    response.status(200).json({
      status: "success",
      result: cities.length,
      data: cities,
    });
  } catch (error) {
    response.status(404).json({
      message: "No cities are found",
    });
  }
};

const getCity = async function (request, response) {
  const id = request.params.id;
  try {
    const city = await City.findById(id);

    response.status(200).json({
      status: "success",
      data: city,
    });
  } catch (error) {
    response.status(404).json({
      message: "No city found with that id",
    });
  }
};

const createCity = async function (request, response) {
  try {
    const cityObj = request.body;
    const newCity = await City.create(cityObj);

    response.status(201).json({
      status: "success",
      data: newCity,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

const updateCity = async function (request, response) {
  const id = request.params.id;
  const cityObj = request.body;
  try {
    const city = await City.findByIdAndUpdate(id, cityObj);

    response.status(200).json({
      status: "success",
      data: city,
    });
  } catch (error) {
    response.status(404).json({
      message: "No city found with that id",
    });
  }
};

const deleteCity = async function (request, response) {
  const id = request.params.id;

  try {
    await City.findByIdAndDelete(id);

    response.status(204).json({
      data: null,
    });
  } catch (error) {
    response.status(404).json({
      message: "No city found with that id",
    });
  }
};

export { getCities, getCity, createCity, updateCity, deleteCity };
