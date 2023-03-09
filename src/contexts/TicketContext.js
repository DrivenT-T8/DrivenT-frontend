import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [edit, setEdit] = useState(false);
  const [bookingId, setBooking] = useState([]);
  const [typeTicketSelected, setTypeTicketSelected] = useState([]);

  return (
    <TicketContext.Provider value={{ bookingId, setBooking, edit, setEdit, typeTicketSelected, setTypeTicketSelected }}>
      {children}
    </TicketContext.Provider>
  );
}
