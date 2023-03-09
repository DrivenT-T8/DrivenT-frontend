import { useContext } from 'react';
import ChooseRoom, { SendRoom } from '../HotelComponents/ChooseRoom';
import TicketContext from '../../contexts/TicketContext';
export default function EditRoom() {
  const { edit, setEdit } = useContext(TicketContext);
  const data = { editPermission: true };
  return !edit ? (
    <SendRoom>
      <button onClick={() => setEdit(true)}>TROCAR DE QUARTO</button>
    </SendRoom>
  ) : (
    <ChooseRoom EditInformation={data} />
  );
}
