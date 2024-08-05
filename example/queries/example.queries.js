
var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO Employee (
        name,
        position
        )
        VALUES (
          '`+ data.name + `',
          '`+ data.position + `'
        );`
      return sql;
    },
    getSelectAll: function () {
      let sql = `select * from Employee`;
      return sql;
    },
    getDelete: function (data) {
      let sql = `delete from Employee where id= '`+ data.id + `'`;
      return sql;
    },
    getUpdate: function (data) {
      let sql = `Update Employee 
      SET 
      name = '`+ data.name + `',
      position = '`+ data.position + `'
      WHERE 
    id = '`+ data.id + `'`;
      return sql;
    },
  }
  
  module["exports"] = QueryHelper;