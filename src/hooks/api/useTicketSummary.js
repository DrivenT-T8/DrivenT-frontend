import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketTypeApi from '../../services/enrollmentApi';
export default function useTickets() {
  const token = useToken();
  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType,
  } = useAsync(() => ticketTypeApi.getTicket(token));

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType,
  };
}
