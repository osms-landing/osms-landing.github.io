import Airtable from 'airtable';
// code example: https://github.com/Airtable/airtable.js/blob/master/test/test_files/index.html
// relative api: https://airtable.com/apppSjiUMTolFIo1P/api/docs#javascript/table:designs%20list

var SECRET_KEY = "keyRGIXTxN4zNgMBf";
var SUPPLIES_TABLE = "apppSjiUMTolFIo1P";

var tableMap = {
  medSupplyPages: 'Medical Supply Category Pages',
  medSupplyWarning: 'Med. Supply Category Warnings',
  engDesPages: 'Engineered Design Pages'
};

(function getTableData (tableTitle) {
  var airtable = new Airtable({ apiKey: SECRET_KEY }).base(SUPPLIES_TABLE);
  airtable(tableTitle) // access specific table in BASE_TABLE
    .select({
      maxRecords: 3,
      view: "Default View",
    })
    .eachPage(
      (record, fetchNextPage) => {
        // onSuccess
        console.log(record);
        fetchNextPage();
      },
      (err) => console.log(err)
    );
})(tableMap['engDesPages']);
