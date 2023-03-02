import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { FormChooseTicketBooking, TicketOption, TicketType } from './FormChooseTicketBooking';

export default function PersonalTicketAndPayment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {/* Se tiver inscrição, vai aparecer essa primeira div para escolher o ticket e hotel, se não, vai aparecer a última section com a mensagem */}
      <div>
        <FormChooseTicketBooking>
          {/* Depois que escolher a modalidade de ingresso, abre as opções do próximo TicketOption */}
          <TicketOption>
            <span>Primeiro, escolha sua modalidade de ingresso</span>
            <TicketType>
              <button>
                <p>Presencial</p>
                <p>R$ 250</p>
              </button>
              <button>
                <p>Online</p>
                <p>R$ 100</p>
              </button>
            </TicketType>
          </TicketOption>

          <TicketOption>
            <span>Ótimo! Agora escolha sua modalidade de hospedagem</span>
            <div>
              <button>
                <p>Sem Hotel</p>
                <p>+ R$ 0</p>
              </button>
              <button>
                <p>Com Hotel</p>
                <p>+ R$ 350</p>
              </button>
            </div>
          </TicketOption>

          {/* Depois que os TicketsOptions tiverem sido selecionados, aparece esse botão para reservar o ingresso */}
          <div>
            <span></span>
            <button>RESERVAR INGRESSO</button>
          </div>
        </FormChooseTicketBooking>

        {/* Depois que apertar no botão de reservar ingresso do form de cima, vai aparecer essa section na tela para o pagamento*/}
        <section>
          <div>
            <span>Ingresso escolhido</span>
                DESKTOP 6 E 7 DO FIGMA
          </div>
        </section>
      </div>

      <section>
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      </section>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
