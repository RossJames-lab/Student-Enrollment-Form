import "./App.css";
import EnrolmentForm from "./enrollement_form";
import EnrolList from "./enrolList"; // Ensure this import matches the file name case
import { useState } from "react";

const App = () => {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  const [studentDetails, setStudentDetails] = useState({});

  const handleChange = (event) => {
    setProgram(event.target.value);
    setPgSeats(pgSeats);
    setUgSeats(ugSeats);
  };

  const setUpdatedSeats = (updatedSeats) => {
    if (program === "UG") {
      setUgSeats(updatedSeats);
    } else {
      setPgSeats(updatedSeats);
    }
  };

  return (
    <div className="App">
      <div className="programs">
        <h3 className="title">Student Enrolment Form</h3>
        <ul className="ulEnrol">
          <li className="parentLabels" onChange={handleChange}>
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            Undergraduate
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
            />
            Postgraduate
          </li>
          <li>
            <label className="parentLabels">
              Remaining {program} Seats - {program === "UG" ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? ugSeats : pgSeats}
        setStudentDetails={setStudentDetails}
      />
      <EnrolList studentDetails={studentDetails} setStudentDetails={setStudentDetails} />
    </div>
  );
};

export default App;
