import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import classes from "./AccordionProfile.module.css";

const AccordionProfile = (props) => {
  const showComponentCards = props.components.map((component, index) => {
    return (
      <Card key={`card-${index}`}>
        <Accordion.Toggle as={Card.Header} eventKey={`${index}`} className={classes["accordion-header"]}>
          <h3 className={classes["accordion-title"]}>{component.title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`${index}`}>
          <Card.Body>
            <section>{component.body}</section>
          </Card.Body>
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
