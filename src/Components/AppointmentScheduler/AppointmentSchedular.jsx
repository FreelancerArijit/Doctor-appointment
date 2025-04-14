import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

  //function to open modal to create a new event
  const openModalForSlot = (slot) => {
    setSelectedSlot(slot);
    setAppointmentTitle("");
    setModalOpen(true);
  };

  //function to open modal 
  const openModalForEvent = (event) => {
    setSelectedEvent(event);
    setAppointmentTitle(event.title);
    setModalOpen(true);
  };

  //function to create and edit an existing event
  const handleSave = () => {   
    if (selectedSlot && appointmentTitle.trim()) {
      setEvents([...events, { ...selectedSlot, title: appointmentTitle }]);
    }

    
    if (selectedEvent && appointmentTitle.trim()) {
      setEvents(events.map(evt => evt === selectedEvent ? { ...evt, title: appointmentTitle } : evt));
    }

    closeModal();
  };


  //function to delete an existing event
  const handleDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter(evt => evt !== selectedEvent));
      closeModal();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSlot(null);
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
export default AppointmentScheduler;
