# Appointment Planner

This is a React-based application for managing contacts and appointments. Users can add contacts, schedule appointments, and view them in a structured format.

## Features

- Add new contacts with name, phone number, and email.
- Schedule appointments with a title, date, time, and associated contact.
- View all contacts and appointments in a clean, organized layout.
- Navigation between Contacts and Appointments pages using React Router.

## Project Structure

```
src/
├── App.js
├── index.js
├── components/
│   ├── appointmentForm/
│   │   └── AppointmentForm.js
│   ├── contactForm/
│   │   └── ContactForm.js
│   ├── contactPicker/
│   │   └── ContactPicker.js
│   ├── root/
│   │   └── Root.js
│   ├── tile/
│   │   └── Tile.js
│   └── tileList/
│       └── TileList.js
├── containers/
│   ├── appointmentsPage/
│   │   └── AppointmentsPage.js
│   └── contactsPage/
│       └── ContactsPage.js
public/
├── index.html
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/appointment-planner.git
   cd appointment-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the app configuration (use with caution).

## Components

### Contacts Page

- **File**: [`ContactsPage`](src/containers/contactsPage/ContactsPage.js)
- Allows users to add new contacts and view the list of existing contacts.

### Appointments Page

- **File**: [`AppointmentsPage`](src/containers/appointmentsPage/AppointmentsPage.js)
- Allows users to schedule appointments and view the list of existing appointments.

### Shared Components

- **TileList**: Renders a list of tiles for displaying contacts or appointments ([`TileList`](src/components/tileList/TileList.js)).
- **Tile**: Displays individual contact or appointment details ([`Tile`](src/components/tile/Tile.js)).
- **ContactPicker**: Dropdown for selecting a contact when scheduling an appointment ([`ContactPicker`](src/components/contactPicker/ContactPicker.js)).

## Styling

The app uses a custom CSS file located at [`public/index.css`](public/index.css) for styling.

## Dependencies

- React: ^18.2.0
- React Router DOM: ^6.9.0

## License

This project is licensed under the MIT License. See the LICENSE file for details.