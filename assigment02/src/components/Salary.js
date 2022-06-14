import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
const luongCB = 3000000;
const luongGio = 200000;

export default function Salary(props) {
  const salary = props.slaryProps.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
        <Card>
          <CardTitle className="p-3 bg-white rounded m-2">
            {item.name}
          </CardTitle>
          <CardBody>
            <CardText>Mã nhân viên: {item.id}</CardText>
            <CardText>Hệ số lương: {item.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {item.overTime}</CardText>
            <CardText className="bg-light p-2 shadow">
              Lương:{" "}
              {(item.salaryScale * luongCB + item.overTime * luongGio).toFixed(
                0
              )}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row  m-3"> {salary}</div>
    </div>
  );
}
