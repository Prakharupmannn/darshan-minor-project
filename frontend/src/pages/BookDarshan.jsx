import axios from "axios";
import { useState } from "react";

const BookDarshan = () => {

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const book = async () => {

    await axios.post("http://localhost:5000/api/bookings/book", {
      userId: "USER_ID",
      templeId: "TEMPLE_ID",
      date,
      slot
    });

    alert("Darshan Booked");

  };

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div className="form-container">
        <div className="glass-card animate-fade-in delay-1">
          <h2 className="form-title">Book Darshan</h2>
          
          <div className="form-group">
            <label className="form-label">Select Date</label>
            <input 
              type="date" 
              className="form-input"
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Select Time Slot</label>
            <select className="form-input" onChange={(e) => setSlot(e.target.value)}>
              <option value="">-- Choose a Slot --</option>
              <option value="Morning">Morning (5:00 AM - 12:00 PM)</option>
              <option value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
              <option value="Evening">Evening (6:00 PM - 9:00 PM)</option>
            </select>
          </div>

          <button 
            className="btn btn-primary animate-slide-up delay-2" 
            style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem', padding: '1rem' }}
            onClick={book}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDarshan;