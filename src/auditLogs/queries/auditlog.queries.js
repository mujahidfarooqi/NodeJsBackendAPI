var QueryHelper = {
    getInsert: function (data) {
      let sql = `INSERT INTO AuditLogs (
        user,
        RequestMethod,
        RequestURL,
        RequestBody,
        RequestParams,
        date
        )
        VALUES (
          '`+ data.user + `',
          '`+ data.method + `',
          '`+ data.url + `',
          '`+ data.body + `',
          '`+ data.params + `',
          '`+ data.date + `'
        );`
      return sql;
    }
}
module["exports"] = QueryHelper;