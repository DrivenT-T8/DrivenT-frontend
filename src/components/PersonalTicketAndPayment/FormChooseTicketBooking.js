import { useState } from 'react';
import styled from 'styled-components';

export default function FormChooseTicketBooking() {
  const [showSelect, setShowSelect] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const [isHotel, setIsHotel] = useState(false);
  const [noHotel, setNoHotel] = useState(false);
  function remote() {
    if (showHide) setShowHide(false); 
    if (!showHide) setShowHide(true);  setShowSelect(false);
    if (!showSelect)  setNoHotel(false); setIsHotel(false); 
  }
  function isRemote() {
    if (showSelect) setShowSelect(false); 
    if (!showSelect) setShowSelect(true); setShowHide(false); 
    if (!showSelect)  setNoHotel(false);   setIsHotel(false); 
  }
  function withHotel() {
    if (!isHotel) setIsHotel(true);  setNoHotel(false);
    if (isHotel) setIsHotel(false);
  }
  function hotel() {
    if (!noHotel) setNoHotel(true);  setIsHotel(false);
    if (noHotel) setNoHotel(false);
  }
  return (
    <>
      <TicketOption>
        <span>Primeiro, escolha sua modalidade de ingresso</span>
        <TicketType type={showSelect}>
          <Button onClick={isRemote} type={showSelect}>
            <p>Presencial</p>
            <p>R$ 250</p>
          </Button>
          <ButtonReverse onClick={remote} type={showHide}>
            <p>Online</p>
            <p>R$ 100</p>
          </ButtonReverse>
        </TicketType>
      </TicketOption>

      {showSelect ? (
        <TicketOption>
          <span>Ótimo! Agora escolha sua modalidade de hospedagem</span>
          <TicketType type={showSelect}>
            <Button onClick={withHotel} isHotel={isHotel}>
              <p>Sem Hotel</p>
              <p>R$ 250</p>
            </Button>
            <ButtonReverse onClick={hotel} noHotel={noHotel}>
              <p>Com Hotel</p>
              <p>R$ 100</p>
            </ButtonReverse>
          </TicketType>
        </TicketOption>
      ) : (
        ''
      )}
      {showSelect && isHotel || noHotel ||showHide? (
        <div>
          <H1> Fechado! O total ficou em R$ 600. Agora é só confirmar: </H1>
          <ButtonReservar>RESERVAR INGRESSO</ButtonReservar>
        </div>
      ) : null}
    </>
  );
}

const TicketOption = styled.div`
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;
const H1 = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-bottom: 17px;
`;
const TicketType = styled.div`
  margin: 17px 0 35px 0;
  display: flex;
  gap: 5%;
  button p:first-of-type {
    color: #454545;
    font-size: 16px;
  }
  button p:last-child {
    color: #898989;
    font-size: 14px;
  }
`;
const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #cecece;
  border-radius: 20px;
  height: 145px;
  width: 145px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  cursor: pointer;
  ${(props) => {
    if (props.type) {
      return 'background-color:#FFEED2;';
    }
    if (props.isHotel) {
      return 'background-color:#FFEED2;';
    }
  }};
`;

const ButtonReverse = styled(Button)`
  ${(props) => {
    if (props.type) {
      return 'background-color:#FFEED2;';
    }
    if (props.noHotel) {
      return 'background-color:#FFEED2;';
    }
  }};
`;
const ButtonReservar = styled.button`
  width: 162px;
  height: 37px;
  left: 335px;
  top: 749px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
  }
`;
