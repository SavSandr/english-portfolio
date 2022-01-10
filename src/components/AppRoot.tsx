import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Library from "./library/Library";
import ClassTeacher from "./classTeacher/ClassTeacher";
import ForStudents from "./forStudents/ForStudents";
import About from "./about/About";
// import Main from "./layout/Main";
// import Header from "./layout/Header.jsx";

const AppRoot: React.FC = () => {
 return (
  <>
   {/* <Header /> */}
   {/* <Main> */}
    <BrowserRouter>
     <Switch>
      <Route sensitive={true} path={`/home`} exact={true} strict={true}>
       <Home />
      </Route>
      <Route sensitive={true} path={`/portfolio`} exact={true} strict={true}>
       <Portfolio path={"/portfolio"} />
      </Route>
      <Route sensitive={true} path={`/library`} exact={true} strict={true}>
       <Library path={"/library"} />
      </Route>
      <Route sensitive={true} path={`/classLeadership`} exact={true} strict={true}>
       <ClassTeacher path={"/classLeadership"} />
      </Route>
      <Route sensitive={true} path={`/forStudents`} exact={true} strict={true}>
       <ForStudents path={"/forStudents"} />
      </Route>
      <Route sensitive={true} path={`/about`} exact={true} strict={true}>
       <About path={"/about"} />
      </Route>
     </Switch>
    </BrowserRouter>
   {/* </Main> */}
  </>
 );
};
export default AppRoot;
