import { useContext } from 'react';
import styled from 'styled-components';
import TicketContext from '../../contexts/TicketContext';
import useTypeTicket from '../../hooks/api/useTypeTicket';

export default function FormChooseTicketBooking() {
  const { typeTicket } = useTypeTicket();
  const { typeTicketSelected, setTypeTicketSelected } = useContext(TicketContext);

  function getPresential(e) {
    if(e.name === 'Presencial') {
      setTypeTicketSelected([e.name, e.price]);
    } else if(e.name === 'Online') {
      setTypeTicketSelected([e.name, e.price]);
    }
  }
  
  return (
    <>
      {/* Depois que escolher a modalidade de ingresso abaixo, abre as opções (ou não, dependendo do tipo de ingresso)do próximo TicketOption */}
      {typeTicket ? (
        <TicketOption>
          <span>Primeiro, escolha sua modalidade de ingresso</span>
          <TicketType>
            {typeTicket.map((e, key) => (
              <button onClick={() => getPresential(e)}>
                <p>{e.name}</p>
                <p>R$ {(e.price)/100}</p>
              </button>
            ))}
          </TicketType>
        </TicketOption>
      ) : ''}
      
      <TicketOption>
        <span>Depois EXCLUA essa primeira frase, pfvr, mas aqui mostra o tipo de ticket que você clicou com o preço (coloquei num array, vai ser nessa ordem sempre):{typeTicketSelected}. Ótimo! Agora escolha sua modalidade de hospedagem </span>
        <div>
          <button>
            <p>Sem Hotel</p>
            <p>+ R$ 0</p>
          </button>
          <button>
            <p>Com Hotel</p>
            <p>+ R$ 350</p>
          </button>
        </div>
      </TicketOption>

      {/* Depois que os TicketsOptions tiverem sido selecionados, aparece esse botão para reservar o ingresso */}
      <div>
        <span></span>
        <button>RESERVAR INGRESSO</button>
      </div>
    </>
  );
}

const TicketOption = styled.div`
    background-color: bisque;

    > span {
        color: #8E8E8E;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
`;

const TicketType = styled.div`
    margin: 17px 0 35px 0;
    display: flex;
    gap: 5%;

    button {
        background-color: #FFFFFF;

        border: 1px solid #CECECE;
        border-radius: 20px;

        height: 145px;
        width: 145px;

        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;

        cursor: pointer;
    }

    button p:first-of-type {
        color: #454545;
        font-size: 16px;
    }

    button p:last-child {
        color: #898989;
        font-size: 14px;
    }
`;

