import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CredCardScreen from './CredCardScreen';
import TicketType from '../ticketType';
import useCreateTicket from '../../hooks/api/useCreateTicket';
import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import SucessOk from './SucessScreen';

export default function PersonalCredcard() {
  let ticketId = localStorage.getItem('ticketId');
  ticketId = Number(ticketId);

  const [screenOk, setScreenOK] = useState(false);
  const [cardData, setCardData] = useState({
    issuer: '',
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });
  let cardValidation = cardData?.name?.length < 2 || cardData?.expiry?.length < 4 || cardData?.number?.length < 16 || cardData?.cvc?.length < 3  ? true : false;
 
  const body = { ticketId, cardData };
  const token = useToken();
  async function createPayment(body) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post('http://localhost:4000/payments/process', body, config);
      toast('Pagamento salvo com sucesso!');
      setScreenOK(true);

      return response.data;
    } catch (err) {
      toast('Não foi possível salvar o pagamento!');
    }
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Enroll>
        <TicketType />
        <Title>Pagamento</Title>
        {screenOk ? (
          <SucessOk />
        ) : (
          <CardArea>
            <CredCardScreen setData={setCardData} data={cardData} />
            <FinisheButtom disabled={cardValidation} onClick={() => createPayment(body)}>
              FINALIZAR PAGAMENTO
            </FinisheButtom>
          </CardArea>
        )}
      </Enroll>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Title = styled.h3`
  color: grey;
  margin-bottom: 12px;
`;

const CardArea = styled.h3`
  color: grey;
  margin-bottom: 12px;
  margin-top: 10px;
`;

const FinisheButtom = styled.button`
  margin-top: 20px;
  width: 182px;
  height: 37px;
  left: 335px;
  top: 713px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
const Enroll = styled(Typography)`
  display: flex;
  flex-direction: column;
`;
