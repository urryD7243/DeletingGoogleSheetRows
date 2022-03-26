// 3/26/2022 got it to work
// Author: Urry Donahoe

function deleteRows() { 
    //This is declaring the sheet that is being accessed
    var sheet0 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ActiveMembers');
    var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DoNotDisturb');
    //This is putting all of the data from the declared sheets into these variables
    var data0 = sheet0.getDataRange().getValues();
    var data1 = sheet1.getDataRange().getValues();
  
    for (i = 1; i < data0.length; i++) {
      Logger.log ('MN: ' + data0[i][1]);
  
      for (ii = 1; ii < data1.length; ii++) {
        Logger.log('DND MN: ' + data1[ii][1]);
        if (data0[i][1] == data1[ii][1]) {
          sheet0.deleteRow(i+1);
        }
      }
    }
  
  }