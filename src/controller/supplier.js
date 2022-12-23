const { selectAll } = require('../model/supplier');

const supplierController = {
  getAllProduct: async (req, res) => {
    try {
      const sortby = req.query.sortby || 'nameSupplier';
      const sort = req.query.sort || 'ASC';
      const searchingID = req.query.searchingID || '';
      const searchingName = req.query.searchingName || '';
      const result = await selectAll(sortby, sort, searchingID, searchingName);

      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          message: 'error',
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = supplierController;
