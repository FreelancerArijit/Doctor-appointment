import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

<<<<<<< HEAD
const localizer = momentLocalizer(moment);

function AppointmentScheduler() {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [appointmentTitle, setAppointmentTitle] = useState("");

  // Load events from localStorage
=======
//localizer is used to handle date and time formatting in this case we used moment.js as localizer
const localizer = momentLocalizer(moment);

 function AppointmentScheduler() {
    //used to store events as array of object in events and setEvents is a function used to update those events
  const [events, setEvents] = useState([]);
  // view is used to store current calender view and setView function to update those view
  const [view, setView] = useState(Views.MONTH);
  //stores the current selected date 
  const [date, setDate] = useState(new Date());

  //used to track when modal is visile and when modal is invisible
  const [modalOpen, setModalOpen] = useState(false);
  //store the timerange of the created event
  const [selectedSlot, setSelectedSlot] = useState(null);
  //store the appointment users clicked on 
  const [selectedEvent, setSelectedEvent] = useState(null);
  //stores the title of the appointment
  const [appointmentTitle, setAppointmentTitle] = useState("");

  // Load events from localStorage on mount
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(events));
  }, [events]);

<<<<<<< HEAD
  // Open modal for empty slot
  const openModalForSlot = ({ start, end }) => {
    if (!start || !end) {
      console.error("Invalid slot:", { start, end });
      return;
    }
    setSelectedSlot({ start, end });
=======
  //function to open modal to create a new event
  const openModalForSlot = (slot) => {
    setSelectedSlot(slot);
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
    setAppointmentTitle("");
    setModalOpen(true);
  };

<<<<<<< HEAD
  // Open modal for existing event
=======
  //function to open modal 
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
  const openModalForEvent = (event) => {
    setSelectedEvent(event);
    setAppointmentTitle(event.title);
    setModalOpen(true);
  };

<<<<<<< HEAD

  const handleSave = () => {
    if (selectedSlot && appointmentTitle.trim()) {
      if (!selectedSlot.start) {
        console.error(" selectedSlot.start missing:", selectedSlot);
        return;
      }

      const dateObj = new Date(selectedSlot.start);
      if (isNaN(dateObj)) {
        console.error("Invalid date:", selectedSlot.start);
        return;
      }

      const date = dateObj.getDate();
      const month = dateObj.toLocaleString('default', { month: 'long' });

      console.log("Sending to API:", { date, month, title: appointmentTitle });

      fetch('http://localhost:3001/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, month, title: appointmentTitle })
      })
        .then(res => res.json())
        .then(data => console.log('Server Responded:', data))
        .catch(err => console.error('Error in sending appointment:', err));

      setEvents([...events, { ...selectedSlot, title: appointmentTitle }]);
    }

    if (selectedEvent && appointmentTitle.trim()) {
      setEvents(
        events.map(evt =>
          evt === selectedEvent ? { ...evt, title: appointmentTitle } : evt
        )
      );
=======
  //function to create and edit an existing event
  const handleSave = () => {   
    if (selectedSlot && appointmentTitle.trim()) {
      setEvents([...events, { ...selectedSlot, title: appointmentTitle }]);
    }

    
    if (selectedEvent && appointmentTitle.trim()) {
      setEvents(events.map(evt => evt === selectedEvent ? { ...evt, title: appointmentTitle } : evt));
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
    }

    closeModal();
  };

<<<<<<< HEAD
=======

  //function to delete an existing event
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
  const handleDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter(evt => evt !== selectedEvent));
      closeModal();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
<<<<<<< HEAD
    setSelectedSlot(null);
=======
    setSelectedSlot(null); 
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
    setSelectedEvent(null);
    setAppointmentTitle("");
  };

  const handleViewChange = (newView) => setView(newView);

  const handleMonthChange = (e) => {
    const selectedMonth = parseInt(e.target.value);
    const newDate = new Date(date);
    newDate.setMonth(selectedMonth);
    setDate(newDate);
  };

  return (
    <div className="p-4 min-h-screen bg-white">
      <div className="flex flex-wrap justify-center h-16 gap-4 mb-4 items-center bg-blue-600 p-2 rounded-lg text-white">
        <label className="font-medium text-white ml-4">Select Month:</label>
        <select
          value={date.getMonth()}
          onChange={handleMonthChange}
          className="text-white bg-blue-600 border border-white rounded px-2 py-1"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {moment().month(i).format("MMMM")}
            </option>
          ))}
        </select>
      </div>

      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectSlot={({ start, end }) => openModalForSlot({ start, end })}
        onSelectEvent={(event) => openModalForEvent(event)}
        view={view}
        onView={handleViewChange}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
      />

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {selectedEvent ? "Edit Appointment" : "New Appointment"}
            </h2>
<<<<<<< HEAD

            {selectedSlot && (
              <p className="mb-2 text-gray-600">
                Date: {moment(selectedSlot.start).format("DD MMMM YYYY")}
              </p>
            )}

            {selectedEvent && (
              <p className="mb-2 text-gray-600">
                Date: {moment(selectedEvent.start).format("DD MMMM YYYY")}
              </p>
            )}

=======
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
            <input
              type="text"
              value={appointmentTitle}
              onChange={(e) => setAppointmentTitle(e.target.value)}
              placeholder="Appointment title"
              className="w-full border px-3 py-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">
              {selectedEvent && (
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 7b684a650e1cd7203c80767056608e3e99827fd4
export default AppointmentScheduler;
