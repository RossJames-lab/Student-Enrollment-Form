import React, { useState, useEffect } from "react";
import "./enrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

const EnrolList = (props) => {
  const { studentDetails, setStudentDetails } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const curItemKey = props.studentDetails.key;
    if (curItemKey) {
      setItems(prevItems => [...prevItems, props.studentDetails]);
      props.setStudentDetails({});
    }
    // Execute deletion on the selected item.
    if (props.action === "delete") {
      // filter the selected item
      const deleteItem = items.filter(
        (item) => item.key === props.selectedItemId
      )[0];
  
      // Remove from the list
      setItems(prevItems => prevItems.filter((item) => item !== deleteItem));
      // update seats
      props.restoreSeats(deleteItem.program);
    }
  }, [props]);
  

  // Columns for the detail list.
  const columns = [
    {
      key: "edit",
      name: "Edit",
      fieldName: "edit",
      minWidth: 30,
      maxWidth: 200,
      isResizable: true,
    },
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
    {
      key: "delete",
      name: "Delete",
      fieldName: "delete",
      minWidth: 50,
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
