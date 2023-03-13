import { ButtonHotel } from './ButtonHotel';
import useUserBooking from '../../hooks/api/useUserBooking';
import useHotel from '../../hooks/api/useHotel';

export default function SummaryOfSelectedHotel() {
  const { booking } = useUserBooking();
  const { hotel } = useHotel();

  function getHotelById() {
    const hotelIdInsideRoomOfBooking = booking?.Room?.hotelId;
    let imageHotelSelected;
    let nameHotelSelected;
    
    hotel?.forEach(e => {
      if(e.id === hotelIdInsideRoomOfBooking) {
        imageHotelSelected = e.image;
        nameHotelSelected = e.name;
      }
    });

    return {
      imageHotelSelected,
      nameHotelSelected
    };
  }

  function showAccommodationType() {
    if (booking?.Room?.capacity === 1) { 
      return 'Single'; 
    } else if (booking?.Room?.capacity === 2) { 
      return 'Double'; 
    } else if (booking?.Room?.capacity === 3) { 
      return 'Triple'; 
    }
  }

  return(
    <>
      <ButtonHotel isColorButtonSelected={true} >
        <img src={getHotelById().imageHotelSelected} alt="hotel" />
        <h3>{getHotelById().nameHotelSelected}</h3>
        <span>
          <p>Quarto reservado:</p>
          <p>{booking?.Room?.name} ({showAccommodationType()})</p>
        </span>
        <span>
          <p>Pessoas no seu quarto:</p>
          <p>Você e mais {booking?.Room?.capacity - 1}</p>
        </span>
      </ButtonHotel>
    </>
  );
};
