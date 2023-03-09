import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTypeTicket() {
  const token = useToken();

  const {
    data: typeTicket,
    loading: typeTicketLoading,
    error: typeTicketError,
    act: getTicketType,
  } = useAsync(() => ticketApi.tsType(token));

  return {
    typeTicket,
    typeTicketLoading,
    typeTicketError,
    getTicketType,
  };
}
