import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

function renderDepartment(props) {
  const departments = props.renderDepartmentProps.map((item) => {
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
}

export default function Department(props) {
  console.log(props.departmentProps);

  return (
    <div className="container">
      <div className="row  m-3">
        <renderDepartment renderDepartmentProps={props.departmentProps} />
      </div>
    </div>
  );
}
