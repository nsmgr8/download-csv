import creatCSVFile from './dist/creatCSVFile';
import downloadFile from './dist/downloadFile';
import detectionClientType from './dist/detectionClientType';

function downloadCsv(datas, columns, filename, separator = ',') {
  downloadFile(creatCSVFile(datas, columns, separator), filename);
}

downloadCsv.creatCsvFile = creatCSVFile;
downloadCsv.downloadFile = downloadFile;
downloadCsv.detectionClientType = detectionClientType;

export default downloadCsv;
