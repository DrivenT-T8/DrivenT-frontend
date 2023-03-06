import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useCreateTicket() {
  const token = useToken();

  const {
    loading: saveTicketLoading,
    error: saveTicketError,
    act: saveTicket,
  } = useAsync((data) => 
    ticketApi.createTicket(data, token)
  , false);

  return {
    saveTicketLoading,
    saveTicketError,
    saveTicket,
  };
}
