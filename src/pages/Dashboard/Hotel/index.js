import HotelComponents from '../../../components/HotelComponents';
import HotelNotIncluded from '../../../components/HotelComponents/invalidTicket/hotelNotIncluded';
import PaymentRequired from '../../../components/HotelComponents/invalidTicket/paymentRequired';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const { ticket } = useTicket();

  const includesHotel = ticket?.TicketType.includesHotel;
  const ticketStatus = ticket?.status;

  console.log(ticket);

  if (ticketStatus !== 'PAID' || !ticket) {
    return <PaymentRequired />;
  }

  if (!includesHotel) {
    return <HotelNotIncluded />;
  }

  return <HotelComponents />;
}
