import React, { useState, useEffect } from "react";
import "./enrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

const EnrolList = (props) => {
  const { studentDetails, setStudentDetails } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const curItemKey = studentDetails.key;
    if (curItemKey) {
      setItems([...items, studentDetails]);
      setStudentDetails({});
    }
  }, [studentDetails, setStudentDetails]);

  // Columns for the detail list.
  const columns = [
    {
      key: "fname",
      name: "First Name",
      fieldName: "fname",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "lname",
      name: "Last Name",
      fieldName: "lname",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "program",
      name: "Program",
      fieldName: "program",
      minWidth: 60,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "email",
      name: "Email",
      fieldName: "email",
      minWidth: 130,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};

export default EnrolList;
