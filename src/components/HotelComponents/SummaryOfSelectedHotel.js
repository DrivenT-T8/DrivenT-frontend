import { ButtonHotel } from './ButtonHotel';

export default function SummaryOfSelectedHotel() {
  return(
    <>
      <ButtonHotel isColorButtonSelected={true} >
        <img src='https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/resort-salinas-maragogi-capa-05.jpg' alt="hotel" />
        <h3>Driven Resort</h3>
        <span>
          <p>Quarto reservado:</p>
          <p>101 (Triple)</p>
        </span>
        <span>
          <p>Pessoas no seu quarto</p>
          <p>Você e mais 2</p>
        </span>
      </ButtonHotel>
    </>
  );
};
