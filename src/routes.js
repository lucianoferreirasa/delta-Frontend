import {Route, BrowserRouter, Switch} from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Students from "./pages/Students";
import NewStudent from "./pages/NewStudent";
import StudentsUpdate from "./pages/StudentsUpdate"

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/students' component={Students} />
                <Route path="/student/new" component={NewStudent} />
                <Route path='/student/updatestudent/:id' exact component={StudentsUpdate} />
            </Switch>       
        </BrowserRouter>
    )
}