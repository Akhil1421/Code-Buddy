import { BiSolidUser } from "react-icons/bi";
import { TiThListOutline } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { TbLanguageHiragana } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import "./sidebar.css";
import {  useEffect, useState } from "react";

const Sidebar = () => {
  const [selectedUser,setSelectedUser]=useState('');
  useEffect(()=>{},[selectedUser]);
  return (
    <div id="sidebarOuter">
      <div className="sidebarItems">
        <div>{/*CodeBuddyIcon*/}</div>
        <div id="sideBarName">CodeBuddy</div>
      </div>
      <hr></hr>
      <div id="examples">
        Examples
        <div 
          onClick={() => {
             setSelectedUser(1);
          }}
          
          style={{backgroundColor:`${selectedUser===1 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===1 ?  '5px' : '' }`}}
          className="sidebarItems"
        >
          <BiSolidUser className="sidebar-icons"></BiSolidUser>
          <div className="sidebar-text">User Profile</div>
        </div>
        <div
          onClick={() => {
            setSelectedUser(2);
          }}

          style={{backgroundColor:`${selectedUser===2 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===2 ?  '5px' : '' }`}}
          className="sidebarItems"
        >
          <TiThListOutline className="sidebar-icons"></TiThListOutline>
          <div className="sidebar-text">User Management</div>
        </div>
      </div>
      <hr></hr>
      <div id="restSideBarItems">
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(3);
          }}
          
          style={{backgroundColor:`${selectedUser===3 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===3 ?  '5px' : '' }`}}
        >
          <MdDashboard className="sidebar-icons"></MdDashboard>
          <div className="sidebar-text">Dashboard</div>
        </div>
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(4);
          }}
          
          style={{backgroundColor:`${selectedUser===4 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===4 ?  '5px' : '' }`}}
        >
          <FaTableList className="sidebar-icons"></FaTableList>
          <div className="sidebar-text">Tables</div>
        </div>
        <div
          className="sidebarItems "
         
          onClick={() => {
             setSelectedUser(5);
          }}
          
          style={{backgroundColor:`${selectedUser===5 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===5 ?  '5px' : '' }`}}
        >
          <RiFileList3Line className="sidebar-icons"></RiFileList3Line>
          <div className="sidebar-text">Billing</div>
        </div>
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(6);
          }}
          
          style={{backgroundColor:`${selectedUser===6 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===6 ?  '5px' : '' }`}}
        >
          <TbLanguageHiragana className="sidebar-icons"></TbLanguageHiragana>
          <div className="sidebar-text">RTL</div>
        </div>
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(7);
          }}
          
          style={{backgroundColor:`${selectedUser===7 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===7 ?  '5px' : '' }`}}
        >
          <IoMdNotifications className="sidebar-icons"></IoMdNotifications>
          <div className="sidebar-text">Notifications</div>
        </div>
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(8);
          }}
          
          style={{backgroundColor:`${selectedUser===8 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===8 ?  '5px' : '' }`}}
        >
          <BiSolidUser className="sidebar-icons"></BiSolidUser>
          <div className="sidebar-text">Profile</div>
        </div>
        <div
          className="sidebarItems"
         
          onClick={() => {
             setSelectedUser(9);
          }}
          
          style={{backgroundColor:`${selectedUser===9 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===9 ?  '5px' : '' }`}}
        >
          <PiSignInBold className="sidebar-icons"></PiSignInBold>
          <div className="sidebar-text">Sign In</div>
        </div>
        <div
          className="sidebarItems"
          
          onClick={() => {
             setSelectedUser(10);
          }}
          
          style={{backgroundColor:`${selectedUser===10 ?  '#4492f0' : '' }`,borderRadius:`${selectedUser===10 ?  '5px' : '' }`}} 
        >
          <FaClipboardList className="sidebar-icons"></FaClipboardList>
          <div className="sidebar-text">Sign Up</div>
        </div>
      </div>
      <button id="sidebarButton">Upgrade To Pro</button>
    </div>
  );
};

export default Sidebar;
