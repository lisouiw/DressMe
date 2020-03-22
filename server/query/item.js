const getQuery = id => ({
  text: "SELECT * FROM ITEM WHERE id = $1",
  values: [id]
});

const addQuery = ({
  id_user,
  id_type,
  name,
  notes,
  season,
  style,
  color,
  composition
}) => ({
  text:
    "INSERT INTO ITEM (id_user, id_type, name, notes) \
        VALUES ($1, $2, $3, $4);",
  values: [id_user, id_type, name, notes]
});

const updateQuery = ({ id, id_user, id_type, date, name, notes }) => ({
  text:
    "UPDATE ITEM \
            SET id_user = $2, id_type = $3, \
            date = $4, name = $5, notes = $6 \
            WHERE id = $1;",
  values: [id, id_user, id_type, date, name, notes]
});

const deleteQuery = id => ({
  text: "DELETE FROM ITEM WHERE id = $1",
  values: [id]
});

exports.getItem = (client, id) => {
  return new Promise(function(resolve, reject) {
    client
      .query(getQuery(id))
      .then(res => resolve({ status: 200, result: res.rows }))
      .catch(() => reject({ status: 400, error: "request" }))
      .then(() => client.end());
  });
};

exports.addItem = async (client, query) => {
  return new Promise(function(resolve, reject) {
    client
      .query(addQuery(query))
      .then(res => resolve({ status: 200, result: res.rows }))
      .catch(() => {
        reject({ status: 400, error: "request" });
      })
      .then(() => client.end());
  });
};

exports.updateItem = (client, query) => {
  return new Promise(function(resolve, reject) {
    client
      .query(updateQuery(query))
      .then(res => resolve({ status: 200, result: res.rows }))
      .catch(() => {
        reject({ status: 400, error: "request" });
      })
      .then(() => client.end());
  });
};

exports.deleteItem = (client, query) => {
  return new Promise(function(resolve, reject) {
    client
      .query(deleteQuery(query))
      .then(res => resolve({ status: 200, result: res.rows }))
      .catch(() => {
        reject({ status: 400, error: "request" });
      })
      .then(() => client.end());
  });
};
