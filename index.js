var creatCSVFile = require('./dist/creatCSVFile');
var downloadFile = require('./dist/downloadFile');
var detectionClientType = require('./dist/detectionClientType');

function downloadCsv(datas, columns, filename, separator = ',') {
  downloadFile(creatCSVFile(datas, columns, separator), filename);
};

downloadCsv.creatCsvFile = creatCSVFile;
downloadCsv.downloadFile = downloadFile;
downloadCsv.detectionClientType = detectionClientType;

module.exports = downloadCsv;
