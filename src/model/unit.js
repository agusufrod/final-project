const connection = require('../config/mysql');
const selectAll = (sortby, sort, searchingId, searchingName) => {
  let searching = '';

  if (searchingId && searchingName) {
    searching = `WHERE unitId= ${searchingId} AND nameUnit = ${searchingName}`;
  } else if (searchingId) {
    searching = `WHERE unitId= ${searchingId}`;
  } else if (searchingName) {
    searching = `WHERE nameUnit LIKE '%${searchingName}%'`;
  }

  return new Promise((resolve, reject) =>
    connection.query(`SELECT * FROM unit ${searching} ORDER BY ${sortby} ${sort} `, (error, result) => {
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
