import React from "react";
import ReactExport from "react-export-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortParticipantsBySomeValue } from "../utils/functions";


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
            className="action-icon"
          />
        </button>
      }
    >
      <ExcelSheet
        name="Participants"
        data={props.dataSet ? sortParticipantsBySomeValue("secondName", [...props.dataSet]) : undefined} // if I don't copy it, it mutates the original array!
      >
        <ExcelColumn label="Last Name" value="secondName" />
        <ExcelColumn label="First Name" value="firstName" />
        <ExcelColumn label="Email address" value="email" />
        <ExcelColumn label="ID Number" value="idCardNumber" />
        <ExcelColumn label="Organisation" value="organisation" />
        <ExcelColumn label="Designation" value="designation" />
        <ExcelColumn label="Signature" value="" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default DownloadExcel;
