import React, { useState } from "react";
import { Card, CardImg, CardBody, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { createLogger } from "redux-logger";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Addform } from "./Addform";
import CreateNewStaff from "./CreateNewStaff";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import { staffListSelector } from "../redux/selector";
import { fetchDeleteStaff } from "../redux/StaffList/StaffListSlice";
import { useDispatch } from "react-redux/es/exports";
import { FadeTransform } from "react-animation-components";

export default function StaffList(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(props.StaffListProps);
  const dispatch = useDispatch();

  //????????????????????????????????????????????
  // var staffsItems = data.map((item) => {
  //   return (
  //     <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={item.id}>
  //       <div>
  //         <Link to={`/staffs/${item.id}`}>
  //           <img src={item.image} alt={item.name} />

  //           <p style={{ display: "inline-block" }}>{item.name}</p>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // });

  //setState luu chuoi ky tu nhap vao
  const staffList = useSelector(staffListSelector);
  function search(e) {
    e.preventDefault();
    setQuery(e.target.nameS.value.trim());
  }

  // luu ket qua tim kiem vao bien dataSearch
  // var dataSearch = staffList.filter((item) => {
  //   return (
  //     item.name.toLocaleLowerCase().includes(query) ||
  //     item.doB.toLocaleLowerCase().includes(query) ||
  //     item.startDate.toLocaleLowerCase().includes(query)
  //   );
  // });
  // ham xoa thong tin nhan vien deleteStaff
  const deleteStaff = (id) => {
    dispatch(fetchDeleteStaff(id));
  };

  //render giao dien danh sach nhan vien
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 mt-3">
          <span>
            <h3>Nhan Vien</h3>
          </span>
        </div>
        <div className="col-3 mt-3">{/*nut them addform */}</div>
        {/* form nhap ten tim kiem */}
        <div className="col-12 col-md-6 mt-3">
          <form className="form-group row" onSubmit={search}>
            <div className="col-8 col-md-8">
              <input
                type="text"
                name="nameS"
                className="form-control"
                placeholder="Tìm kiếm nhân viên ..."
              />
            </div>
            <div className="col-4 col-md-4">
              <button className="btn btn-success" type="submit">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        <div className="row shadow mb-5 mt-5">
          {props.StaffListProps.map((item) => {
            return (
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(-50%)",
                }}
              >
                <div
                  className="col-6 col-md-4 col-lg-2 mt-3 mb-3"
                  key={item.id}
                >
                  <div>
                    <Link to={`/staffs/${item.id}`}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p style={{ display: "inline-block" }}>{item.name}</p>{" "}
                      </div>
                    </Link>
                    <Button color="danger" onClick={() => deleteStaff(item.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </FadeTransform>
            );
          })}
          <Addform />
        </div>
      </div>
    </div>
  );
}
