
var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO Employee (
        firstName,
        lastName,
        position,
        phone,
        join_date,
        gender,
        address,
        city,
        state
        )
        VALUES (
          '`+ data.firstName + `',
          '`+ data.lastName + `',
          '`+ data.position + `',
          '`+ data.phone + `',
          '`+ data.joiningDate + `',
          '`+ data.gender + `',
          '`+ data.address + `',
          '`+ data.city + `',
          '`+ data.state + `'
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