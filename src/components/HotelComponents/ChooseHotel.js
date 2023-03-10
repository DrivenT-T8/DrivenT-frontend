import { useState } from 'react';
import styled from 'styled-components';

export default function ChooseHotel({ hotel, getHotelById, setHotelExists, listRooms }) {
  const [ colorButtonSelected, setColorButtonSelected ] = useState({});
  console.log(listRooms);

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
                getHotelById(e.id);
                setHotelExists(true);
                setColorButtonSelected(e);
              }}
            >
              <img src={e.image} alt='hotel'/>
              <h3>{e.name}</h3>
              <span>
                <p>Tipos de acomodação:</p>
                <p>Single e Double</p>
              </span>
              <span>
                <p>Vagas disponíveis:</p>
                <p>103</p>
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

const ButtonHotel = styled.button`
  background: ${(props) => (props.isColorButtonSelected ? '#FFEED2' : '#EBEBEB')};

  border: none;
  border-radius: 10px;

  padding: 16px 14px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 264px;
  width: 196px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: #343434;

  cursor: pointer;

  > img {
    border-radius: 5px;

    height: 109px;
    width: 168px;
  }

  > h3 {
    font-size: 20px;
  }

  span {
    font-size: 12px;
    color: #3C3C3C;

    text-align: left;
  }

  span p:first-of-type {
    font-weight: bold;
  }
  
`;
