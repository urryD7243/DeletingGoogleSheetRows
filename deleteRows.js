// Language: JavaScript
// Platform: Google Apps Scripts
// Author: Urry Donahoe
// 3/27/2022 got it to work with no problems thus far

function deleteRows() { 
  //This is declaring the sheet that is being accessed
  var sheet0 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ActiveMembers');
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DoNotDisturb');
  //This is putting all of the data from the declared sheets into these variables  
  var data0 = sheet0.getDataRange().getValues();
  var data1 = sheet1.getDataRange().getValues();

  //I put this into a function when running testing
  findRows(data0, data1);

  function findRows(data0, data1) {
    //for this to delete and so that you do not need to refresh the tables after every delete, you go through the table bottom up
      //because when going top down and you delete row 2, row 3 then becomes row 2, and to have the accurate placement of data
        //a refresh would be neccessary else you are viewing inaccurate data as it's location has changed and the wrong data could be deleted
    for (i = data0.length-1; i > 0; i--) {
      Logger.log ('Member Number ' + data0[i][1]);

      for (ii = 1; ii < data1.length; ii++) {
        
        if (data0[i][1] == data1[ii][1]) {
          Logger.log('Delete: ' + data0[i][1] + '. For: ' + data1[ii][1]);
          sheet0.deleteRow(i+1);
          //I have this return null so that it actually breaks out of the function, putting breaks will only break out of the if statement
          //return null;
        }
      }
    }  
  }

}