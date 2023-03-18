import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';
import useHotelId from '../../hooks/api/useHotelId';
import ChooseHotel from './ChooseHotel';
import ChooseRoom from './ChooseRoom';
import { useState } from 'react';

export default function HotelComponents() {
  const { hotel } = useHotel();
  const { saveHotelId, hotelId } = useHotelId();
  const [hotelExists, setHotelExists] = useState(false);
  const [listRooms, setListRoom] = useState([]);

  async function getResponseHotelById(selectedHotelId) {
    try {
      await saveHotelId(selectedHotelId).then((res) => {
        localStorage.setItem('hotelId', selectedHotelId);
        setListRoom(res[0].Rooms);
      });
    } catch (err) {
      return err;
    }
  }

  return (
    <>
      {hotel ? (
        <>
          <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
          
          <ChooseHotel
            hotel={hotel}
            getResponseHotelById={getResponseHotelById}
            setHotelExists={setHotelExists}
            listRooms={listRooms}
          />
          {hotelExists && <ChooseRoom listRooms={listRooms} />}
          
        </>
      ) : (
        ''
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
