import ChooseActivities from '../../../components/Activities';
import OnlineEvent from '../../../components/Activities/invalidTicket/onlineEvent';
import PaymentRequired from '../../../components/Activities/invalidTicket/paymentRequired';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const { ticket } = useTicket();

  const nameTicket = ticket?.TicketType.name;
  const ticketStatus = ticket?.status;

  if (ticketStatus !== 'PAID' || !ticket) {
    return <PaymentRequired />;
  }

  if (nameTicket === 'Online') {
    return <OnlineEvent />;
  }

  return <ChooseActivities />;
}
