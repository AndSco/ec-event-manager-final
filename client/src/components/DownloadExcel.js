import React from "react";
import ReactExport from "react-export-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const DownloadExcel = props => {
  return (
    <ExcelFile
      element={
        <button>
          <FontAwesomeIcon 
            icon="file-excel" 
            size="2x" 
            color="#797D7F"
          />
        </button>
      }
    >
      <ExcelSheet data={props.dataSet} name="Participants">
        <ExcelColumn label="Name" value="firstName" />
        <ExcelColumn label="Surname" value="secondName" />
        <ExcelColumn label="Email address" value="email" />
        <ExcelColumn label="ID Number" value="idCardNumber" />
        <ExcelColumn label="Signature" value="" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default DownloadExcel;
