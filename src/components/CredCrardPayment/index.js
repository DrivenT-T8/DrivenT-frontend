import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CredCardScreen from './CredCardScreen';

export default function PersonalCredcard() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {/* Se tiver inscrição, vai aparecer essa primeira div abaixo para escolher o ticket e hotel, se não, vai aparecer a última section com a mensagem que não tem inscrição ainda */}
      <div>
        {/* Depois que apertar no botão de reservar ingresso do form de cima, vai aparecer essa section abaixo na tela para o pagamento */}
        <section>
          <div>
            {/* DESKTOP 6 E 7 DO FIGMA */}
          </div>
        </section>
      </div>

      <CardArea>
        <Title>Pagamento</Title>
        <CredCardScreen/>
      </CardArea>
      <FinisheButtom>FINALIZAR PAGAMENTO</FinisheButtom>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Title = styled.h3`
  color: grey;
  margin-bottom: 12px;
`;

const CardArea = styled.h3`
  color: grey;
  margin-bottom: 12px;
  margin-top: 210px;
`;

const FinisheButtom = styled.button`
  margin-top: 20px;
  width: 182px;
  height: 37px;
  left: 335px;
  top: 713px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
`;
