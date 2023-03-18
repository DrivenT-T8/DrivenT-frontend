import styled from 'styled-components';

export default function OnlineEvent() {
  return (
    <PageOnlineEvent>
      <p>Sua modalidade de ingresso não necessita escolher atividade. </p>
      <p>Você terá acesso a todas as atividades.</p>
    </PageOnlineEvent>
  );
}

const PageOnlineEvent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
`;
