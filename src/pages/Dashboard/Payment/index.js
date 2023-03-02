import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
export default function Payment() {
  const { enrollment } = useEnrollment();
  return !enrollment ? (
    <PaymentContainer>
      Você precisa completar sua inscrição antes <br /> de prosseguir pra escolha de ingresso
    </PaymentContainer>
  ) : (
    <PaymentContainer>incrição existe presencial ou online</PaymentContainer>
  );
}
const PaymentContainer = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;
