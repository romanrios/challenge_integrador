const { getAll, getOne } = require('../models/productsModel');

const getAllItems = async (params) => {

    // if params tal cosa
    //  else params tal otra

    const data = getAll(params);

    return data;
}

module.exports = {
    getAllItems,
    getOne
};