import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import StaffList from "./StaffList";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import StaffDetail from "./StaffDetail";
import { newStaff } from "./Addform";
import Department from "./Department";
import Salary from "./Salary";

//nhan data nhan vien moi them vao

export const newStaffDetaiData = (props) => {
  return <div>test2</div>;
};
export var test2 = <newStaffDetaiData />;

export default function Main() {
  const [dataState, setDataState] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });

  const StaffWithId = ({ match }) => {
    if (match.params.id <= 15) {
      return (
        <StaffDetail
          StaffDetailProps={
            dataState.staffs.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    } else {
      return <StaffDetail StaffDetailProps={newStaff} />;
    }
  };
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route
          exact
          path="/staffs"
          component={() => <StaffList StaffListProps={dataState.staffs} />}
        />

        <Route path="/staffs/:id" component={StaffWithId} />
        <Route
          path="/department"
          component={() => (
            <Department departmentProps={dataState.departments} />
          )}
        />
        <Route
          path="/salary"
          component={() => <Salary slaryProps={dataState.staffs} />}
        ></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}
