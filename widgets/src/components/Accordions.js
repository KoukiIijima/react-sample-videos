import React from "react";
import { Accordion, Card } from "react-bootstrap";

const Accordions = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
              {item.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{item.content}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordions;
