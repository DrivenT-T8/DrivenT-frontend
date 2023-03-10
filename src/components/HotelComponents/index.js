import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';
import useHotelId from '../../hooks/api/useHotelId';
import ChooseHotel from './ChooseHotel';
import ChooseRoom from './ChooseRoom';
import { useState } from 'react';

export default function HotelComponents() {
  const { hotel } = useHotel();
  const { saveHotelId } = useHotelId();
  const [ hotelExists, setHotelExists ] = useState(false);
  const [ listRooms, setListRoom ] = useState([]);
  console.log(hotel);

  async function getHotelById(selectedHotelId) {
    try {
      await saveHotelId(selectedHotelId).then((res) => {
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

          <div>
            <ChooseHotel hotel={hotel} getHotelById={getHotelById} setHotelExists={setHotelExists} listRooms={listRooms}/>
            {hotelExists && (
              <ChooseRoom listRooms={listRooms} />
            )}
          </div>
        </>
      ) : ''}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
