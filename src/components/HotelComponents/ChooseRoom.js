/* eslint-disable indent */
import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { getHotel } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';

export default function ChooseRoom() {
  // a variável de estado abaixo guarda o id do quarto clicado
  const [buttonClickedId, setButtonClickedId] = useState('');
  const [listRooms, setListRoom] = useState([]);
  const token = useToken();
  useEffect(() => {
    // O número 1 é um dado para exemplificar o hotelId
    getHotel(1, token).then((res) => {
      setListRoom(res[0].Rooms);
    });
  }, []);
  function vacancy(cap, booking, id) {
    const listVacancies = [];
    while (cap > 0) {
      if (cap > booking) {
        if (cap - 1 === booking) {
          listVacancies.push(
            buttonClickedId === id ? (
              <IoMdPerson key={cap} fontSize={22} color="#FF4791" />
            ) : (
              <BsPerson key={cap} fontSize={22} />
            )
          );
        } else {
          listVacancies.push(<BsPerson key={cap} fontSize={22} />);
        }
      } else {
        listVacancies.push(<IoMdPerson key={cap} fontSize={22} />);
      }
      cap -= 1;
    }
    return listVacancies;
  }

  return (
    <>
      <ContainerRoom>
        <span>Ótima pedida! Agora escolha seu quarto</span>
        <Rooms>
          {listRooms.length > 0
            ? listRooms.map((e, index) => {
                const listVacancies = vacancy(e.capacity, e.booking, e.id);
                return (
                  <ButtonRoom
                    key={index}
                    disabled={e.capacity === e.booking}
                    isButtonClicked={buttonClickedId === e.id}
                    onClick={() => setButtonClickedId(e.id)}
                  >
                    <h2>{e.name}</h2>
                    <Vacancies>{listVacancies.map((e) => e)}</Vacancies>
                  </ButtonRoom>
                );
              })
            : ''}
        </Rooms>
      </ContainerRoom>
    </>
  );
}

const ContainerRoom = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;

const Rooms = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonRoom = styled.button`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 45px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.disabled ? '#E9E9E9' : props.isButtonClicked ? '#FFEED2' : '#FFFFFF')};

  border: 1px solid #cecece;
  border-radius: 10px;

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #454545;
  }
`;

const Vacancies = styled.div`
  display: flex;
  justify-content: space-around;
`;
