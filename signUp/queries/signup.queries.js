var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO User (
        email,
        hashpassword
        )
        VALUES (
          '`+ data.email + `',
          '`+ data.hashPassword + `'
        );`
      return sql;
    }
}
module["exports"] = QueryHelper;