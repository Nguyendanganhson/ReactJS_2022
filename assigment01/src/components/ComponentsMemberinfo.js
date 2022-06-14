import React, { Component } from "react";
import dateFormat from "dateformat";
class Memberinfo extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <p>
              <strong> Họ và tên: {this.props.name}</strong>
            </p>
            <p>
              Ngày sinh:
              {dateFormat(this.props.doB, "dd/mm/yyyy")}
            </p>
            <p>
              Ngày vào công ty:
              {dateFormat(this.props.startDate, "dd/mm/yyyy")}{" "}
            </p>
            <p>Phòng ban: {this.props.department} </p>
            <p>Số ngày nghỉ còn lại: {this.props.annualLeave} </p>
            <p>Số ngày làm thêm: {this.props.overTime} </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Memberinfo;
