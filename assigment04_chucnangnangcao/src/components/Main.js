import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, withRouter } from "react-router-dom";
import StaffList from "./StaffList";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import StaffDetail from "./StaffDetail";
import { newStaff } from "./Addform";
import Department from "./Department";
import Salary from "./Salary";
import { fetchDepartments } from "../redux/Department/DepartmentSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchStaffs } from "../redux/StaffList/StaffListSlice";
import { fetchDepartment } from "../redux/Department/DepartmentSlice";
import { fetchStaffSalary } from "../redux/Salary/SalarySlice";
import {
  departmentSelector,
  staffListSelector,
  staffSalarySelector,
} from "../redux/selector";
import { fetchApiUrl } from "../shared/baseUrl";

//nhan data nhan vien moi them vao

export const newStaffDetaiData = (props) => {
  return <div>test2</div>;
};
export var test2 = <newStaffDetaiData />;

function Main() {
  const staffList = useSelector(staffListSelector);
  const department = useSelector(departmentSelector);
  const staffSalary = useSelector(staffSalarySelector);

  const [dataState, setDataState] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    //  fetch(fetchApiUrl + "staffs/16", {
    //    method: "DELETE",
    //  });
    dispatch(fetchStaffs());
    dispatch(fetchDepartment());
    dispatch(fetchStaffSalary());
  }, []);

  const StaffWithId = ({ match }) => {
    const staffID = parseInt(match.params.id, 10);
    console.log(
      "🚀 ~ file: Main.js ~ line 52 ~ StaffWithId ~ staffID",
      staffID
    );

    return (
      <StaffDetail
        StaffDetailProps={
          staffList.filter(
            (staff) => staff.id === parseInt(match.params.id, 10)
          )[0]
        }
      />
    );
    // if (match.params.id <= 16) {

    // } else {
    //   return <StaffDetail StaffDetailProps={newStaff} />;
    // }
  };
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route
          exact
          path="/staffs"
          component={() => <StaffList StaffListProps={staffList} />}
        />

        <Route path="/staffs/:id" component={StaffWithId} />
        <Route
          path="/department"
          component={() => <Department departmentProps={department} />}
        />
        <Route
          path="/salary"
          component={() => <Salary slaryProps={staffSalary} />}
        ></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}
export default Main;
