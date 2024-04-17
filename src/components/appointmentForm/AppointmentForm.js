import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

//Use getTodayString() to set the min attribute of the date input
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {


  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input 
      name="title" value={title} 
      placeholder="Title" type="text"
      onChange={(e) => setTitle(e.target.value)}/> <br/>
      <label>Contact:</label>
      <ContactPicker contacts={contacts} 
      onChange={(e) => setContact(e.target.value)} 
      value={contact} name="contact"/> <br/>
      <label>Date:</label>
      <input name="date" value={date} 
       type="date"
      onChange={(e) => setDate(e.target.value)}/> <br/>
      <label>Time:</label>
      <input name="time" value={time} 
      min={getTodayString()} type="time"
      onChange={(e) => setTime(e.target.value)}/> <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
