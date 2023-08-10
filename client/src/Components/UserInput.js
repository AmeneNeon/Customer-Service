import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function UserInput() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  const [replyList, setReplyList] = useState([]);
  const navigate = useNavigate();
  const currentDate = new Date();



  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      userId: user._id,
      inquiry: inquiry,
      checkIn: checkIn,
      checkOut: checkOut,
      room: room,
     
      date:
        currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear(),
      comment: "New Message",
    };
    console.log(formData);

    // Axios Post function
    axios
      .post("http://localhost:4000/user/inquiry", formData)
      .then((res) => {
        console.log(res);
        alert("Your message has been submitted successfully!");
    
        setInquiry("");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div >
    

      <div className="App">
        <h2>Welcome to Customer Hub Service</h2>
        <h3>We are here for you</h3>
        <p className="user-heading-text">
          Fill the form with your request, one of our associates will contact
          you in the next 24 hours
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="input-container input-container-two">
              <label htmlFor="checkIn">Check In Date:</label>
              <DatePicker
                id="checkIn"
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="dd/MM/yyyy" 
             
                //didn't work
                placeholderText="Select a date"
              />
            </div>

            <div className="input-container input-container-two">
              <label htmlFor="checkOut">Check Out Date:</label>
              <DatePicker
                id="checkIn"
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd/MM/yyyy"
            
                placeholderText="Select a date"
              />
            </div>
            <div className="input-container input-container-two">
              <label htmlFor="room">Room Number:</label>
              <input
                type="text"
                id="room"
                placeholder="Room number"
                value={room}
                onChange={(e) => setRoom(Number(e.target.value))}
              />
            </div>
          </div>

          <p>Write your msg here:</p>
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          ></textarea>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
          </button>
        </form>
        <div>
          <h3 id="inbox-header"> Inbox </h3>
        </div>
      </div>

      <ul>
        {replyList.map((replyList) => {
          return (
            <div className="msg-list">
              <li key={replyList._id}>
                <AiOutlineMail className="icon"></AiOutlineMail>
                {replyList.reply}
              </li>
            </div>
          );
        })}
      </ul>
 







    </div>
  );
}

export default UserInput;
