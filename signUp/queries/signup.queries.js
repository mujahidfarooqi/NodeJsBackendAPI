var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO User (
        email,
        hashpassword,
        role
        )
        VALUES (
          '`+ data.email + `',
          '`+ data.hashPassword + `',
          '`+ data.role + `'
        );`
      return sql;
    }
}
module["exports"] = QueryHelper;