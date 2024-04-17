import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
      name="name" value={name} 
      placeholder="Name" type="text"
      onChange={(e) => setName(e.target.value)}/> <br/>
      <label>Phone:</label>
      <input name="phone" value={phone} 
      placeholder="XXX-XXX-XXXX" type="tel"
      onChange={(e) => setPhone(e.target.value)}
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/> <br/>
      <label>Email:</label>
      <input name="email" value={email} 
      placeholder="Email@gmail.com" type="email"
      onChange={(e) => setEmail(e.target.value)}/> <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

