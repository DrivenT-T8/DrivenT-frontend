import styled from 'styled-components';
import useUpdateRoom from '../../hooks/api/useUpdateRoom';
import { toast } from 'react-toastify';
import { useState } from 'react';
export default function EditRoom() {
  const [edit, setEdit] = useState(false);
   
  const { saveRoom, dados } = useUpdateRoom();
  async function putRoom() {
    try {
      const data = { roomId: 6, bookingId: 1 };
      await saveRoom(data);
      toast('Ticket salvo com sucesso!');
      setEdit(false);
    } catch (err) {
      toast('Não foi possível salvar o ticket!');
    }
  }
  {
  }
  
  return !edit ? (
    <EditTeste
      onClick={() => {
        setEdit(true);
      }}
    >
      TROCAR DE QUARTO
    </EditTeste>
  ) : (
    <EditButton onClick={putRoom}>RESERVAR DE QUARTO</EditButton>
  );
}

export const EditButton = styled.button`
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

export const EditTeste = styled(EditButton)`
  background: #000;
  color: #fff;
`;
