import { useState } from 'react';
import { createContext } from 'react';

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [typeTicketSelected, setTypeTicketSelected] = useState([]);
  
  return (
    <TicketContext.Provider value={{ typeTicketSelected, setTypeTicketSelected }}>
      {children}
    </TicketContext.Provider>
  );
}
