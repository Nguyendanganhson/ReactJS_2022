import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

export default function Department(props) {
  console.log(props.departmentProps);
  const departments = props.departmentProps.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
        <Card>
          <CardTitle className="m-2">{item.name}</CardTitle>
          <CardBody>
            <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row  m-3">{departments}</div>
    </div>
  );
}
