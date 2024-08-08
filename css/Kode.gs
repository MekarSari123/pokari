function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('Tampil');
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('DATA_SISWA'); 
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();  
  return dataValues;
}