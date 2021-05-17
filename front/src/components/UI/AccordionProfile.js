import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ShowPersonalData from "../Main/ShowPersonalData";
import classes from "./AccordionProfile.module.css";

const AccordionProfile = (props) => {
  const [eventKey, setEventKey] = useState(0);
  const showComponentCards = props.components.map((component) => {

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
          <h3>{component.title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body>{component.body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return (
    <div className={classes["accordion-container"]}>
      <Accordion defaultActiveKey="0">{showComponentCards}</Accordion>
    </div>
  );
};

export default AccordionProfile;
