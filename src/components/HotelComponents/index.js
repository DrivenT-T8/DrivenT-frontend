import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function HotelComponents() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      <div>
        <section>
          <div>
            <span>Ingresso escolhido</span>
          </div>
        </section>
      </div>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
