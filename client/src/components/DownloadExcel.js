import React from "react";
import ReactExport from "react-export-excel";
import { sortParticipantsBySomeValue } from "../utils/functions";
import IconWithLabel from "./UIcomponents/IconWithLabel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const DownloadExcel = props => {
  return (
    <ExcelFile
      element={
        <button>
          <IconWithLabel
            iconName="file-excel"
            iconLabel="Export confirmed participants to Excel"
            size="2x"
          />
        </button>
      }
    >
      <ExcelSheet
        name="Participants"
        data={
          props.dataSet
            ? sortParticipantsBySomeValue("secondName", [
                ...props.dataSet.filter(
                  participant => participant.registrationStatus === "confirmed"
                )
              ])
            : undefined
        } // if I don't copy it, it mutates the original array!
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
