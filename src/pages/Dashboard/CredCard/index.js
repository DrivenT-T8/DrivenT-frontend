import useEnrollment from '../../../hooks/api/useEnrollment';
import PersonalCredcard from '../../../components/CredCrardPayment';

export default function CredCard() {
  const { enrollment } = useEnrollment();
  return  <PersonalCredcard />;
}
