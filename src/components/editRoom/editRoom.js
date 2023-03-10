import { useContext } from 'react';
import ChooseRoom, { SendRoom } from '../HotelComponents/ChooseRoom';
import TicketContext from '../../contexts/TicketContext';
import useHotelId from '../../hooks/api/useHotelId';
import { useState } from 'react';
export default function EditRoom() {
  const { edit, setEdit } = useContext(TicketContext);
  const { saveHotelId, hotelId } = useHotelId();
  const [listRooms, setListRoom] = useState([]);
  async function getHotelById() {
    const selectedHotelId = localStorage.getItem('hotelId');
    try {
      await saveHotelId(selectedHotelId).then((res) => {
        setListRoom(res[0].Rooms);
      });
    } catch (err) {
      return err;
    }
  }
  const data = { editPermission: true };
  return !edit ? (
    <SendRoom onClick={getHotelById}>
      <button onClick={() => setEdit(true)}>TROCAR DE QUARTO</button>
    </SendRoom>
  ) : (
    <ChooseRoom listRooms={listRooms} EditInformation={data} />
  );
}
