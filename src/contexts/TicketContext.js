import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [edit, setEdit] = useState(false);
  const [typeTicketSelected, setTypeTicketSelected] = useState([]);

  return (
    <TicketContext.Provider value={{ edit, setEdit, typeTicketSelected, setTypeTicketSelected }}>
      {children}
    </TicketContext.Provider>
  );
}
