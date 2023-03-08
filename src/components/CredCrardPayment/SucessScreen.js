import imgOk from '../../assets/images/Vector-2.svg';
import styled from 'styled-components';

export default function SucessOk() {
  return (
    <ConfirmOK>
      <ImgeOk src={imgOk} />
      <TextArea>
        <h2>Pagamento confirmado!</h2>
        <h3>Prossiga para escolha de hospedagem e atividades</h3>
      </TextArea>
    </ConfirmOK>
  );
}

const ConfirmOK = styled.div`
  display: flex;
`;

const ImgeOk = styled.img`
  height: 40.33333206176758px;
  width: 40.33333206176758px;
  left: 1.83349609375px;
  top: 1.8333320617675781px;
  border-radius: 0px;
`;

const TextArea = styled.div`
  margin-left: 15px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
