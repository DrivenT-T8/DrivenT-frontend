import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';
import { useEffect } from 'react';
import useHotel from '../../hooks/api/useHotel';

export default function ChooseRoom() {
  // const [buttonClickedId, setButtonClickedId] = useState(false);
  const { getHotel } = useHotel();
  useEffect(() => {
    getHotel(1).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <ContainerRoom>
        <span>Ótima pedida! Agora escolha seu quarto</span>
        <Rooms>
          {/* <ButtonRoom key={e.id} isButtonClicked={buttonClickedId === e.id} onClick={() => setButtonClickedId(e.id)}>
            <h2>144</h2>
            <Vacancies>
              <BsPerson fontSize={22} />
              <BsPerson fontSize={22} />
              <BsPerson fontSize={22} />
            </Vacancies>
          </ButtonRoom> */}
          <ButtonRoom isButtonClicked={true}>
            <h2>144</h2>
            <Vacancies>
              <BsPerson fontSize={22} />
              <IoMdPerson fontSize={22} color="#FF4791" />
            </Vacancies>
          </ButtonRoom>
          <ButtonRoom>
            <h2>144</h2>
            <Vacancies>
              <BsPerson fontSize={22} />
              <IoMdPerson fontSize={22} color="#FF4791" />
              <IoMdPerson fontSize={22} />
            </Vacancies>
          </ButtonRoom>
          <ButtonRoom disabled={true}>
            <h2>144</h2>
            <Vacancies>
              <IoMdPerson fontSize={22} />
              <IoMdPerson fontSize={22} />
            </Vacancies>
          </ButtonRoom>
          <ButtonRoom>
            <h2>144</h2>
            <Vacancies>
              <BsPerson fontSize={22} />
              <IoMdPerson fontSize={22} />
            </Vacancies>
          </ButtonRoom>
          <ButtonRoom>
            <h2>144</h2>
            <Vacancies>
              <BsPerson fontSize={22} />
              <BsPerson fontSize={22} />
              <IoMdPerson fontSize={22} />
            </Vacancies>
          </ButtonRoom>
        </Rooms>
      </ContainerRoom>
    </>
  );
}

const ContainerRoom = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;

const Rooms = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonRoom = styled.button`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 45px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.disabled ? '#E9E9E9' : props.isButtonClicked ? '#FFEED2' : '#FFFFFF')};

  border: 1px solid #cecece;
  border-radius: 10px;

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #454545;
  }
`;

const Vacancies = styled.div`
  display: flex;
  justify-content: space-around;
`;
