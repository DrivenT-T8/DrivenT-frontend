import styled from 'styled-components';

export default function CredCardScreen() {
  return (
    <>
      {/* Depois que escolher a modalidade de ingresso abaixo, abre as opções (ou não, dependendo do tipo de ingresso)do próximo TicketOption */}
      <PaymentContainer>
        <CredCardArea>
        </CredCardArea>
      </PaymentContainer>
    </>
  );
}

const PaymentContainer= styled.div`
    background-color: bisque;

    > span {
        color: #8E8E8E;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
`;

const CredCardArea = styled.div`
    margin: 17px 0 35px 0;
    display: flex;
    gap: 5%;

    button {
        background-color: #FFFFFF;

        border: 1px solid #CECECE;
        border-radius: 20px;

        height: 145px;
        width: 145px;

        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;

        cursor: pointer;
    }

    button p:first-of-type {
        color: #454545;
        font-size: 16px;
    }

    button p:last-child {
        color: #898989;
        font-size: 14px;
    }
`;

