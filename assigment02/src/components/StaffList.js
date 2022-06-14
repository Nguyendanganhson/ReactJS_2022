import React from "react";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

export default function StaffList(props) {
  console.log(props.StaffListProps);
  var staffsItems = props.StaffListProps.map((item) => {
    return (
      <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={item.id}>
        <div>
          <Link to={`/staffs/${item.id}`}>
            <img src={item.image} alt={item.name} />

            <p style={{ display: "inline-block" }}>{item.name}</p>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-3">
          <h3>Nhan Vien</h3>
        </div>

        <div className="row shadow mb-5 mt-5">{staffsItems}</div>
      </div>
    </div>
  );
}
