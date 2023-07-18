import React, { useEffect } from "react";
import { Tabs } from "antd";
import Products from "./products";
import Users from "./User";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

//in order to work the admin page , go to your database and change the role from user to admin
function Admin() {

const navigate =useNavigate()
const {user} = useSelector(state => state.users)

useEffect(()=>{
if(user.role !=="admin"){
  navigate("/")
}
},[])
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Products" key="1">
         <Products/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <Users/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
