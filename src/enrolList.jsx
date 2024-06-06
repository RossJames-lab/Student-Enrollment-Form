import React, { useState, useEffect } from "react";
import "./enrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

const EnrolList = (props) => {
  const { studentDetails, setStudentDetails } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    let updatedItems = items;
    // Execute deletion on the selected item.
    if (props.action === "delete") {
      // Filter the selected item
      const deleteItem = updatedItems.filter(
        (item) => item.key === props.selectedItemId
      )[0];
      // Update seats
      props.restoreSeats(deleteItem.program);
      // Remove from the list
      updatedItems = updatedItems.filter((item) => item !== deleteItem);
    }
    // Update the list items with the student details after rendering
    const curItemKey = studentDetails.key;
    if (curItemKey) {
      const i = updatedItems.findIndex((item) => item.key === curItemKey);
      if (i > -1) {
        updatedItems = updatedItems.map((item) =>
          item.key === curItemKey ? studentDetails : item
        );
      } else {
        updatedItems = [...updatedItems, studentDetails];
      }
      setStudentDetails({});
    }
    setItems(updatedItems);
  }, [props, studentDetails, setStudentDetails]);

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
