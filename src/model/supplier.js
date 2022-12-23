const connection = require('../config/mysql');
const selectAll = (sortby, sort, searchingId, searchingName) => {
  let searching = '';

  if (searchingId && searchingName) {
    searching = `WHERE supplierId= ${searchingId} AND nameSupplier = ${searchingName}`;
  } else if (searchingId) {
    searching = `WHERE supplierId= ${searchingId}`;
  } else if (searchingName) {
    searching = `WHERE nameSupplier LIKE '%${searchingName}%'`;
  }

  return new Promise((resolve, reject) =>
    connection.query(`SELECT * FROM supplier ${searching} ORDER BY ${sortby} ${sort} `, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
};
