import React, { useEffect, useState,Component } from "react";
import './admin.css';
import Axios from 'axios';
import ADMIN from './admin';
import { useLocation } from "react-router-dom";

const Ta=(props)=> {

    const location = useLocation();

    const lgout =(data) =>{
        localStorage.clear()
        window.location.replace("/login")
      }
    
      const v_rqst =(data) =>{
        window.location.replace("/viewrequestsadmin");
      }

      const v_admin =(data) =>{
        window.location.replace("/admin");
      }

    
    useEffect(() => {
        if(!localStorage.getItem("token")){
          alert("Login first");
          window.location.replace("/login");
        }
        else{
          fetchTA();
        }
      }, []);

      const [ta, Setta] = useState([]);
      async function fetchTA() {
        try {
          console.log("In try");
          const token = localStorage.getItem("token");
          let instance = Axios.create({
            headers: { "x-access-token": token },
          });
          console.log("reached here: ", location.state.id);
          let response = await instance.post('http://localhost:5000/ta', {
          usrname: location.state.id,
          h: "haha",
        })
        console.log(response);
        if (response.data.status === "error") {
          alert(response.data.error);
          window.location.href = "/login";
        }
        if (response.data.status === "nochanges") {
          alert(response.data.error);
          window.location.href = "/admin";
        }
        else{
          Setta(response.data.data);
          }
        } catch (err) {
          alert(err);
        }
      }

    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            Campus Access Managment System
          </span>
          <div>
            <button class="btn btn-secondary" onClick={v_rqst}>
              view-requests-admin
            </button>
            <button class="btn btn-secondary" onClick={v_admin}>
              admin
            </button>
            
            <button class="btn btn-outline-danger" onClick={lgout}>
              Logout
            </button>
          </div>
        </nav>
        {/* <button onClick={lgout}>logout</button>
        <button onClick={v_rqst}>view-requests-admin</button>
        <button onClick={v_admin}>admin</button> */}
        <div class="col-xl-10 offset-xl-1">
        <div class="mt-5"></div>
        <h4>TAs</h4>
        <table class="table table-striped">
        <tbody>
          <tr>
            <th>Username</th>
            <th>TA name</th>
            <th>State</th>
          </tr>
          {ta.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.ta}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default Ta;