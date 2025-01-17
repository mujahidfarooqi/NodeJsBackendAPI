const sqlite3 = require('sqlite3').verbose();
const path = require('path');
let dbPath = path.join(process.env['ALLUSERSPROFILE'], '\\MyProj\\db', 'MYDB.db');

var DBHelper = {

  executeCommand: function (sql, params, callback) {
    var stmtFailed = true;
    var message = "";
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        callback({ Status: false, Message: err.message, lastId: 0 });
        return;
      }
      // Enable WAL mode
      db.run('PRAGMA journal_mode=WAL;', (err) => {
        if (err) {
          callback({ Status: false, Message: err.message, lastId: 0 });
          return;
        }
        db.serialize(function () {
          db.run("begin transaction");
          db.run(sql, params, function (err) {
            if (err) {
              stmtFailed = true;
              message = err.message;
            }
          });
  
          if (stmtFailed) {
            db.run("commit", function (err) {
              if (err) {
                callback({ Status: false, Message: err.message, lastId: 0 });
              } else {
                callback({ Status: true, Message: 'Successfully saved Data', lastId: this.lastID });
              }
            });
          } else {
            db.run("rollback", function (err) {
              callback({ Status: false, Message: message, lastId: 0 });
            });
          }
          db.close();
        });
      });
    });
  },
  

  executeSelectCommand: function (sql, params, callback) {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        callback({ Status: false, Message: err.message, Data: [] });
        return;
      }
      // Enable WAL mode
      db.run('PRAGMA journal_mode=WAL;', (err) => {
        if (err) {
          callback({ Status: false, Message: err.message, Data: [] });
          return;
        }
        db.all(sql, params, (err, rows) => {
          if (err) {
            callback({ Status: false, Message: err.message, Data: [] });
          } else {
            callback({ Status: true, Message: '', Data: rows });
          }
          db.close();
        });
      });
    });
  },
  executeSelectMultiCommand: function (sql, params, callback) {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        callback({ Status: false, Message: err.message, Data: [] });
        return;
      }
      // Enable WAL mode
      db.run('PRAGMA journal_mode=WAL;', (err) => {
        if (err) {
          callback({ Status: false, Message: err.message, Data: [] });
          return;
        }
        db.exec("ATTACH DATABASE '" + pricedbPath + "' AS PRICEDB");
        db.all(sql, params, (err, rows) => {
          if (err) {
            callback({ Status: false, Message: err.message, Data: [] });
          } else {
            callback({ Status: true, Message: '', Data: rows });
          }
          db.close();
        });
      });
    });
  },
  executeBatchCommand: function (sql, data, callback) {
    var isStmtFailed = false;
    var callBackSent = false;
    var rowCount = 0;
    var message = "";
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        callback({ Status: false, Message: err.message, lastId: 0 });
        return;
      }
      // Enable WAL mode
      db.run('PRAGMA journal_mode=WAL;', (err) => {
        if (err) {
          callback({ Status: false, Message: err.message, lastId: 0 });
          return;
        }
        db.serialize(function () {
          db.run("begin transaction");
  
          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              stmt = db.prepare(sql);
              var objData = data[i];
  
              stmt.run(objData, function (err) {
                var orgData = data[rowCount];
                rowCount++;
                if (err) {
                  isStmtFailed = true;
                  message = err.message;
                }
                if (isStmtFailed && !callBackSent) {
                  callBackSent = true;
                  db.run("rollback", function (error) {
                    callback({ Status: false, Message: err.message, lastId: 0, ErrData: orgData });
                  });
                } else {
                  if (rowCount == data.length) {
                    db.run("commit", function (err) {
                      if (err && !callBackSent) {
                        callback({ Status: false, Message: err.message, lastId: 0, data: orgData });
                      } else if (!callBackSent) {
                        callback({ Status: true, Message: 'Successfully Uploaded Data', lastId: this.lastID });
                      }
                    });
                  }
                }
              });
              stmt.finalize();
            }
          } else {
            callback({ Status: false, Message: "Batch insert failed. Data is not found", lastId: 0, data: data });
          }
        });
      });
    });
  }
}

module["exports"] = DBHelper;