import InvalidEnrollment from '../../../components/invalidEnrollment';
import PersonalTicketAndPayment from '../../../components/PersonalTicketAndPayment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  return !enrollment ? <InvalidEnrollment /> : <PersonalTicketAndPayment />;
}
