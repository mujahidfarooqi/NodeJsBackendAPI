var AppConstant = {

    validatedate: function (dateString) {
      let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
  
      // Match the date format through regular expression      
      if (dateString.match(dateformat)) {
        let operator = dateString.split('/');
  
        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
          pdatepart = dateString.split('/');
        }
        let month = parseInt(datepart[0]);
        let day = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);
  
        // Create list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
          if (day > ListofDays[month - 1]) {
            ///This check is for Confirming that the date is not out of its range      
            return false;
          }
        } else if (month == 2) {
          let leapYear = false;
          if ((!(year % 4) && year % 100) || !(year % 400)) {
            leapYear = true;
          }
          if ((leapYear == false) && (day >= 29)) {
            return false;
          } else
            if ((leapYear == true) && (day > 29)) {
              // console.log('Invalid date format!');      
              return false;
            }
        }
      } else {
        // console.log("Invalid date format!");      
        return false;
      }
      return true;
    },
    getCurrentDateTime: function () {
      let date_ob = new Date();
  
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      // current hours
      let hours = ("0" + date_ob.getHours()).slice(-2);
  
      // current minutes
      let minutes = ("0" + date_ob.getMinutes()).slice(-2);
  
      // current seconds
      let seconds = ("0" + date_ob.getSeconds()).slice(-2);
      return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    },
    getCurrentDate: function () {
      let date_ob = new Date();
  
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    getYYMMDDDate: function (params) {
      let date_ob = new Date(params);
  
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return (year + "-" + month + "-" + date + " 00:00:00");
    },
    getYesterdayDate: function () {
      let date_ob = new Date(new Date().setDate(new Date().getDate() - 1));
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    getTomorrowDate: function () {
      let date_ob = new Date(new Date().setDate(new Date().getDate() + 1));
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    getDateYMDFormat: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') { return ''; }
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [year, month, day].join('');
    },
    getDateYMDDashFormat: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') { return ''; }
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [year, month, day].join('-');
    },
    convertDate: function (params) {
      let date_ob = new Date(params);
  
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      // current hours
      let hours = ("0" + date_ob.getHours()).slice(-2);
  
      // current minutes
      let minutes = ("0" + date_ob.getMinutes()).slice(-2);
  
      // current seconds
      let seconds = ("0" + date_ob.getSeconds()).slice(-2);
      return year + "-" + month + "-" + date;
    },
    create_UUID: function () {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    },
    toInt: function (value) {
      if (value && value != 'undefined' && value != '' && value != ' ' && value != '0' && value != 'NULL' && value != 'null' && value != 'Null') {
        return parseInt(value);
      } else {
        return 0;
      }
    },
    toFloat: function (value) {
      if (value && value != 'undefined' && value != '' && value != ' ' && value != '0' && value != 'NULL' && value != 'null' && value != 'Null') {
        return parseFloat(value);
      } else {
        return 0.0;
      }
    },
    toString: function (value) {
      if (value && value != 'undefined' && value != '' && value != ' ' && value != '0' && value != 'NULL' && value != 'null' && value != 'Null') {
        return value.toString();
      } else {
        return '';
      }
    },
    days360: function (initialDate, currentDate, is360) {
      var days = 0;
      // var dateinitial = this.getDate(initialDate);
      // var dateend = this.getDate(currentDate);
      var dateinitial = initialDate;
      var dateend = currentDate;
      var dateA = dateinitial;
      if (is360) {
        var dateB = dateend;
  
        var dayA = dateA.getDate();
  
        var dayB = dateB.getDate();
  
        if (dayA == 31 || this.lastDayOfFebruary(dateA)) dayA = 30;
        if (dayB == 31 || this.lastDayOfFebruary(dateB)) dayB = 30;
  
        // if (this.lastDayOfFebruary(dateA) && this.lastDayOfFebruary(dateB))
        //   dayB = 30;
  
        // if (dayA == 31 && this.lastDayOfFebruary(dateA))
        //   dayA = 30;
  
        // if (dayA == 30 && dayB == 31)
        //   dayB = 30;
  
        days = (dateB.getFullYear() - dateA.getFullYear()) * 360 +
          ((dateB.getMonth() + 1) - (dateA.getMonth() + 1)) * 30 + (dayB - dayA);
  
      } else {
        const diffTime = Math.abs(dateend - dateinitial);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        days = diffDays;
      }
      return days;
    },
    lastDayOfFebruary: function (date) {
  
      lastDay = new Date(date.getFullYear(), 2, -1);
  
      return date.getDate() == lastDay;
    },
    getDate: function (dateInput) {
      var date, year, month, day;
      if (dateInput.includes('/')) {
        let dateTimeParts = dateInput.split('/');
        year = dateTimeParts[2]; // dateInput.substring(6, 10);
        month = parseInt(dateTimeParts[0], 10) - 1; // parseInt(dateInput.substring(0, 2), 10) - 1; // Javascript month is zero (0) based
        day = dateTimeParts[1]; // dateInput.substring(3, 5);
  
      } else if (dateInput.includes('-')) {
        let dateTimeParts = dateInput.split('-');
        year = dateTimeParts[2]; // dateInput.substring(6, 10);
        month = parseInt(dateTimeParts[0], 10) - 1; // parseInt(dateInput.substring(0, 2), 10) - 1; // Javascript month is zero (0) based
        day = dateTimeParts[1]; // dateInput.substring(3, 5);
  
      }
      date = new Date(Date.UTC(year, month, day, 0, 0, 0));
      return date;
    },
    getPivotArray: function (dataArray, rowIndex, colIndex, dataIndex) {
      //Code from https://techbrij.com
      var result = {}, ret = [];
      var newCols = [];
      for (var i = 0; i < dataArray.length; i++) {
  
        if (!result[dataArray[i][rowIndex]]) {
          result[dataArray[i][rowIndex]] = {};
        }
        result[dataArray[i][rowIndex]][dataArray[i][colIndex]] = dataArray[i][dataIndex];
  
        //To get column names
        if (newCols.indexOf(dataArray[i][colIndex]) == -1) {
          newCols.push(dataArray[i][colIndex]);
        }
      }
  
      newCols.sort();
      var item = [];
  
      //Add Header Row
      item.push('Item');
      item.push.apply(item, newCols);
      ret.push(item);
  
      //Add content 
      for (var key in result) {
        item = [];
        item.push(key);
        for (var i = 0; i < newCols.length; i++) {
          item.push(result[key][newCols[i]] || "-");
        }
        ret.push(item);
      }
      return ret;
    },
    dayDiff: function (date1, date2) {
  
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
      return diffDays;
    },
    CalcPrice: function (coupon, years, face, rate) {
      var price = 0, payment = face * coupon;
      for (var year = 1; year <= years; year++) {
        price += payment / (Math.pow(1 + rate, year));
      }
      price += face / (Math.pow(1 + rate, years));
      return price;
    },
    CalcYield: function (coupon, years, face, price) {
      var rate = 0, payment = coupon * face, epsilon = 1;
      rate = (payment + ((face - price) / years)) / ((face + price) / 2);
      var estPrice = this.CalcPrice(coupon, years, face, rate);
      while (Math.abs(estPrice - price) > 0.0000001) {
        if (estPrice > price) {
          rate += epsilon;
          estPrice = this.CalcPrice(coupon, years, face, rate);
        }
        else {
          rate -= epsilon;
          estPrice = this.CalcPrice(coupon, years, face, rate);
        }
        epsilon = epsilon / 2;
      }
      return rate;
    },
    convertToUTCDate: function (milliSeconds, offset) {
      var date = new Date(milliSeconds);
      var gmtDate = new Date(date.valueOf() + (date.getTimezoneOffset() * 60000));
  
      if (offset) {
        return this.adjustToTimezone(gmtDate, offset);
      } else {
        return gmtDate;
      }
    },
    adjustToTimezone: function (date, offset) {
      if (date && offset) {
        date.setTime(date.getTime() + (offset * 3600000)); // 60 * 60 * 1000
      }
  
      return date;
    },
    convertStringToDate: function (dateTimeString) {
      var date;
  
      if (true) {
        var dateTimeParts = dateTimeString.trim().split(' ');
  
        if (dateTimeParts.length > 0) {
          var isWithTime;
          var year, month, day, hour, minutes, seconds;
          var dateOrTimePart = dateTimeParts[0];
  
          if (dateOrTimePart.length === 8) {
            isWithTime = false;
  
            year = dateOrTimePart.substring(0, 4);
            month = parseInt(dateOrTimePart.substring(4, 6), 10) - 1; // Javascript month is zero (0) based
            day = dateOrTimePart.substring(6, 8);
          } else if (dateOrTimePart.length === 6) {
            var dateNow = new Date();
            isWithTime = true;
  
            hour = dateOrTimePart.substring(0, 2);
            minutes = dateOrTimePart.substring(2, 4);
            seconds = dateOrTimePart.substring(4, 6);
  
            year = dateNow.getFullYear();
            month = dateNow.getMonth();
            day = dateNow.getDay();
          } else if (dateOrTimePart.length === 14) {
            isWithTime = true;
            year = dateOrTimePart.substring(0, 4);
            month = parseInt(dateOrTimePart.substring(4, 6), 10) - 1; // Javascript month is zero (0) based
            day = dateOrTimePart.substring(6, 8);
  
            hour = dateOrTimePart.substring(8, 10);
            minutes = dateOrTimePart.substring(10, 12);
            seconds = dateOrTimePart.substring(12, 14);
          } else if (dateOrTimePart.length === 12) {
            isWithTime = true;
            year = dateOrTimePart.substring(0, 4);
            month = parseInt(dateOrTimePart.substring(4, 6), 10) - 1; // Javascript month is zero (0) based
            day = dateOrTimePart.substring(6, 8);
  
            hour = dateOrTimePart.substring(8, 10);
            minutes = dateOrTimePart.substring(10, 12);
          } else if (dateOrTimePart.length === 17) {
            isWithTime = true;
            year = dateOrTimePart.substring(0, 4);
            month = parseInt(dateOrTimePart.substring(4, 6), 10) - 1; // Javascript month is zero (0) based
            day = dateOrTimePart.substring(6, 8);
  
            hour = dateOrTimePart.substring(8, 10);
            minutes = dateOrTimePart.substring(10, 12);
            seconds = dateOrTimePart.substring(12, 14);
          }
  
          if (dateTimeParts.length > 1) {
            var timePart = dateTimeParts[1];
            date = new Date(year, month, day, timePart.substring(0, 2), timePart.substring(2, 4), timePart.substring(4, 6));
          } else {
            if (isWithTime) {
              if (seconds) {
                date = new Date(year, month, day, hour, minutes, seconds);
              } else {
                date = new Date(year, month, day, hour, minutes);
              }
            } else {
              date = new Date(year, month, day);
            }
          }
        }
      }
  
      return date;
    },
    getDateMYDFormatExport: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') {
        return '';
      }
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      return [month, day, year].join('/');
    },
    getDateMYDFormat: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') {
        return '';
      }
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [month, day, year].join('/');
    },
    getIndicesArray: function (row, items) {
      var indexList = {}, arrIndex, i, count = 0;
  
      for (i = 0; i < row.length; i++) {
  
        arrIndex = items.indexOf(row[i]);
  
        if (arrIndex !== -1) {
          count++;
          indexList[items[arrIndex]] = i;
        }
      }
  
      indexList._count = count;
  
      return indexList;
    },
  
    round: function (value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    },
  
    formatNumber: function (value, decimalPlaces, noValueString) {
      var convertedValue = value;
  
      if (!isNaN(value) && value.trim() !== '') {
  
        if (decimalPlaces >= 0) {
          return this._formatNumberToDisplay(convertedValue, decimalPlaces, noValueString);
        } else {
          return convertedValue;
        }
      } else {
        return (noValueString !== undefined && noValueString !== null) ? noValueString : '--';
      }
    },
    _formatNumberToDisplay: function (value, decimalPlaces, noValueString) {
      var noOfDecimals = decimalPlaces;
      var roundedNum = this._roundNumber(value, noOfDecimals);
      var wholeNum = (roundedNum.split('.')[0]).toString();
      var wholeNumWithoutMinus;
  
      if (wholeNum.charAt(0) === '-') {
        wholeNumWithoutMinus = wholeNum.substring(1, wholeNum.length);
      } else {
        wholeNumWithoutMinus = wholeNum;
      }
  
      var formNum = wholeNumWithoutMinus;
  
      if ((roundedNum.toString().split('.')).length > 1) {
        formNum = formNum + '.' + roundedNum.toString().split('.')[1];
      } else {
        if (noOfDecimals > 0) {
          formNum += '.';
  
          while (noOfDecimals > 0) {
            formNum += '0';
            noOfDecimals--;
          }
        }
      }
  
      if (wholeNum.charAt(0) === '-') {
        formNum = '-' + formNum;
      }
  
      if (formNum === 'NaN' || formNum.indexOf('NaN') >= 0) {
        formNum = (noValueString !== undefined && noValueString !== null) ? noValueString : '--';
      }
  
      return formNum;
    },
    _roundNumber: function (value, decimalPlaces) {
      var num = parseFloat(value.trim());
      var result = this._toFixed((Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)));
  
      var numParts = result.split('.');
      if (numParts.length > 1) {
        var floatNum = numParts[1];
  
        if (floatNum.length < decimalPlaces) {
          for (var i = 0; i < (decimalPlaces - floatNum.length); i++) {
            result += '0';
          }
        }
      }
  
      return result;
    },
    _toFixed: function (x) {
      var e;
      var value = x;
  
      if (Math.abs(value) < 1.0) {
        e = parseInt(value.toString().split('e-')[1], 10);
  
        if (e) {
          value *= Math.pow(10, e - 1);
          value = '0.' + (new Array(e)).join('0') + value.toString().substring(2); // NOSONAR
        }
      } else {
        e = parseInt(value.toString().split('+')[1], 10);
  
        if (e > 20) {
          e -= 20;
          value /= Math.pow(10, e);
          value += (new Array(e + 1)).join('0'); // NOSONAR
        }
      }
  
      return value.toString();
    },
  
    getFirstDayOfMonth: function (params) {
      let date_ob = new Date(params);
  
      // current date
      // adjust 0 before single digit date
      let date = "01";
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    addMinutes: function (time, minsToAdd) {
      var newTime = new Date(new Date("1970/01/01 " + time).getTime() + minsToAdd * 60000).toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });
      return newTime;
    },
    getCurrentTime: function () {
      let date_ob = new Date();
  
      // current hours
      let hours = ("0" + date_ob.getHours()).slice(-2);
  
      // current minutes
      let minutes = ("0" + date_ob.getMinutes()).slice(-2);
  
      // current seconds
      let seconds = ("0" + date_ob.getSeconds()).slice(-2);
  
      // current melliseconds
      let milliseconds = ("0" + date_ob.getMilliseconds()).slice(-2);
      return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
    },
    getDateYMDWithOutDashFormat: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') { return ''; }
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [year, month, day].join('');
    },
    getDateDMYFormatReport: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') {
        return '';
      }
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      var d = new Date(date),
        month = monthNames[d.getMonth()],
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [day, month, year].join('-');
    },
    getDateMDYFormatReport: function (date) {
      if (date === null || date === undefined || date === '' || date === 'N/A') {
        return '';
      }
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      var d = new Date(date),
        month = monthNames[d.getMonth()],
        day = '' + d.getDate(),
        year = d.getFullYear();
  
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return month + ' ' + day + ',' + year;
    },
    getCovariance: function (portfolioReturns, benchmarkReturns) {
      //Cov(X, Y) = Σ(Xi-µ)(Yj-v) / n
      // portfolioReturns => portReturn, date
      // benchmarkReturns => bmReturn, date
  
      var sumofPortReturn = portfolioReturns.reduce(function (a, b) {
        return a + parseFloat(b.portReturn);
      }, 0);
      var sumofBMReturn = benchmarkReturns.reduce(function (a, b) {
        return a + parseFloat(b.bmReturn);
      }, 0);
  
      var portReturnMean = sumofPortReturn / portfolioReturns.length;
      var bmReturnMean = sumofBMReturn / benchmarkReturns.length;
  
      portfolioReturns.forEach(function (item, index) {
        item.portReturnMinusPortMean = parseFloat(item.portReturn) - portReturnMean;
      });
      benchmarkReturns.forEach(function (item, index) {
        item.bmReturnMinusPortMean = parseFloat(item.bmReturn) - bmReturnMean;
      });
  
      portfolioReturns.forEach(function (item, index) {
        var bmReturn = benchmarkReturns.find(x => x.date == item.date);
        item.multipleofPortBM = bmReturn ? (bmReturn.portReturnMinusPortMean * item.bmReturnMinusPortMean) : 0;
      });
      var sumofMultipleofPortBMl = portfolioReturns.reduce(function (a, b) {
        return a + parseFloat(b.multipleofPortBM);
      }, 0);
  
      var coVariance = sumofMultipleofPortBMl / portfolioReturns.length;
      return coVariance;
    },
    getFixIncomeYYMMDDDate: function (params) {
      let date_ob = new Date(params);
  
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
  
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
      // current year
      let year = date_ob.getFullYear();
  
      let seconds = date_ob.getSeconds();
      return (year + "-" + month + "-" + date + "T00:00:00");
    },
    customRound: function (value, decimals) {
      const multiplier = Math.pow(10, decimals);
      const tempValue = value * multiplier;
      const isNegative = value < 0;
  
      let roundedValue;
      if (isNegative) {
        roundedValue = Math.ceil(tempValue - 0.5);
      } else {
        roundedValue = Math.floor(tempValue + 0.5);
      }
  
      return roundedValue / multiplier;
    },
    customRoundObjectsArray: function (array, decimals) {
      // Iterate through each object in the array
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        // Iterate through each property of the object
        for (const key in obj) {
          // Check if the property value is a number and has decimals
          if (typeof obj[key] === 'number' && obj[key] % 1 !== 0) {
            // Round the property value to the specified number of decimals
            obj[key] = this.customRound(obj[key], decimals);
          }
        }
      }
      return array;
    }
  }
  
  module["exports"] = AppConstant;