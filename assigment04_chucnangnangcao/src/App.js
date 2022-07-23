import React, { Component, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { newStaff } from "./components/Addform";
import { useDispatch } from "react-redux";
import { fetchStaffs } from "./redux/StaffList/StaffListSlice";
import { fetchDepartment } from "./redux/Department/DepartmentSlice";
import { fetchStaffSalary } from "./redux/Salary/SalarySlice";

function App() {
  const dispatch = useDispatch();
  const newStaff = {
    nannualLeave: 12,
    departmentId: "Dept01",
    doB: "2022-07-17",
    image: "/assets/images/alberto.png",
    name: "jdjosdjosjdsojdosjods",
    overTime: 6,
    salaryScale: 1,
    startDate: "2022-07-09",
  };
  const updateStaff = {
    annualLeave: 1,
    departmentId: "Dept01",
    doB: "2022-07-09T00:00:00.000Z",

    image: "/asset/images/alberto.png",
    name: "Nguyễn Đặng Anh Sơn",
    overTime: 1,
    salary: 3500000,
    salaryScale: 1.1,
    startDate: "2022-07-10",
  };
  // useEffect(() => {
  //   //-----------------------------------------------------
  //   // test POST & GET method ok
  //   // fetch("https://rjs101xbackend.herokuapp.com/staffs", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(newStaff),
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   credentials: "same-origin",
  //   // }).then((res) => {
  //   //   fetch("https://rjs101xbackend.herokuapp.com/staffs")
  //   //     .then((res) => res.json())
  //   //     .then((res) => console.log(res));
  //   // });
  //   //------------------------------------------------------
  //   //-------------------------------------------------------
  //   // test DELETE method ok
  //   // fetch(fetchApiUrl + "staffs/15", {
  //   //   method: "DELETE",
  //   // }).then((res) =>
  //   //   fetch("https://rjs101xbackend.herokuapp.com/staffs")
  //   //     .then((res) => res.json())
  //   //     .then((res) => console.log(res))
  //   // );
  //   //-------------------------------------------------------
  //   //test PATCH method not ok !!!

  //   // fetch("https://nodejstesthatn.herokuapp.com/staffs/0", {
  //   //   method: "PATCH",
  //   //   body: JSON.stringify(updateStaff),
  //   // }).then((res) =>
  //   //   fetch("https://nodejstesthatn.herokuapp.com/staffs")
  //   //     .then((res) => res.json())
  //   //     .then((res) => console.log(res))
  //   // );
  //   //-------------------------------------------------------
  //   //  test asynthunk
  //   dispatch(fetchStaffs());
  //   dispatch(fetchDepartment());
  //   dispatch(fetchStaffSalary())
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
