var QueryHelper = {
    getUser: function (data) {
      let sql = `SELECT * from  User where email= '`+ data.email + `'`
      return sql;
    }
}
module["exports"] = QueryHelper;