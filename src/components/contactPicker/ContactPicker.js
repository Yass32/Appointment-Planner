import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option key="-1" value="">No Contact Selected</option>
      {contacts.map((contact, index) => {
        return (
          <option key={index} value={contact.name}>
          {contact.name} - {contact.phone} - {contact.email}</option>
        );
      })}

    </select>
  );
};
