var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO AuditLogs (
        user,
        RequestMethod,
        RequestURL,
        RequestBody,
        RequestParams
        )
        VALUES (
          '`+ data.user + `',
          '`+ data.method + `',
          '`+ data.url + `',
          '`+ data.body + `',
          '`+ data.params + `'
        );`
      return sql;
    }
}
module["exports"] = QueryHelper;