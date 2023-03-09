import styled from 'styled-components';
import useUpdateRoom from '../../hooks/api/useUpdateRoom';
import { useState, useContext } from 'react';
import ChooseRoom from '../HotelComponents/ChooseRoom';
import TicketContext from '../../contexts/TicketContext';
export default function EditRoom() {
  const { edit, setEdit } = useContext(TicketContext);
  const data = { bookingId: '57' };
  return !edit ? (
    <ChangeRoom onClick={() => setEdit(true)}>TROCAR DE QUARTO</ChangeRoom>
  ) : (
    <ChooseRoom EditInformation={data} />
  );
}

export const ChangeRoom = styled.button`
  width: 182px;
  height: 37px;
  left: 355px;
  top: 637px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
