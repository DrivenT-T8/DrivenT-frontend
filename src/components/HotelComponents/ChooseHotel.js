import { useState } from 'react';
import styled from 'styled-components';
import { ButtonHotel } from './ButtonHotel';

export default function ChooseHotel({ hotel, getResponseHotelById, setHotelExists, listRooms }) {
  const [colorButtonSelected, setColorButtonSelected] = useState({});

  function showAccommodationTypes(rooms) {
    const singleAccomodation = 'Single, ';
    const doubleAccomodation = 'Double ';
    const tripleAccomodation = 'Triple ';
    const allTypesOfAccomodation = [];

    if (rooms.some((room) => room.capacity === 1)) { 
      allTypesOfAccomodation.push(singleAccomodation); 
    };
    if (rooms.some((room) => room.capacity === 2)) { 
      allTypesOfAccomodation.push(doubleAccomodation); 
    };
    if (rooms.some((room) => room.capacity === 3)) {
      allTypesOfAccomodation.push(tripleAccomodation); 
    };

    allTypesOfAccomodation.splice(-1, 0, 'e ');

    return allTypesOfAccomodation;
  }

  function getRoomCapacity(rooms) {
    let totalVacancies = 0;

    rooms.forEach((room) => {
      const capacityPerRoom = room.capacity;
      const bookingsPerRooom = room.Booking.length;
      const remainingVacancies = capacityPerRoom - bookingsPerRooom;
      totalVacancies += remainingVacancies;
    });

    return totalVacancies;
  }

  return (
    <>
      <HotelOption>
        <span>Primeiro, escolha seu hotel</span>
        <HotelType> 
          {hotel?.map((e, index) => (
            <ButtonHotel
              key={index}
              isColorButtonSelected={colorButtonSelected.id === e.id}
              onClick={() => {
                getResponseHotelById(e.id);
                setHotelExists(true);
                setColorButtonSelected(e);
              }}
            >
              <img src={e.image} alt="hotel" />
              <h3>{e.name}</h3>
              <span>
                <p>Tipos de acomodação:</p>
                <p>{showAccommodationTypes(e.Rooms)}</p>
              </span>
              <span>
                <p>Vagas disponíveis:</p>
                <p>{getRoomCapacity(e.Rooms)}</p>
              </span>
            </ButtonHotel>
          ))}
        </HotelType>
      </HotelOption>
    </>
  );
}

const HotelOption = styled.div`
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;

const HotelType = styled.div`
  margin: 17px 0 35px 0;
  display: flex;
  gap: 5%;
`;

