import { CgEnter } from 'react-icons/cg';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import Typography from '@material-ui/core/Typography';
import useActivity from '../../hooks/api/useActivity';

export default function ChooseActivities() {
  const { activityDates } = useActivity();
  
  console.log(activityDates);

  function generateDateModel(date) {
    const currentWeekday = dayjs(date).locale('pt-br').format('dddd');
    const capitalizedWeekday = currentWeekday[0].toUpperCase() + currentWeekday.substring(1);
    const currentDate = dayjs(date).format('DD/MM');

    return `${capitalizedWeekday}, ${currentDate}`;
  }

  return(
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      <WeekDays>
        {activityDates?.map((dates) => (
          <WeekDaysButton>{generateDateModel(dates.date)}</WeekDaysButton>
        ))}
      </WeekDays>

      <ActivityContainer>
        <BlockListActivities>
          <h2>Auditório Principal</h2>
          <EachBlockListActivities>
            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>09:00 - 10:00</p>
              </ActivityDescription>
              <ActivityButtonSubscribedOrAvailable>
                <IoCheckmarkCircleOutline size="20px" color= "#078632" />
                <p>Inscrito</p>
              </ActivityButtonSubscribedOrAvailable>
            </ActivityOption>

            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>10:00 - 11:00</p>
              </ActivityDescription>
              <ActivityButtonSubscribedOrAvailable>
                <CgEnter size="20px" color= "#078632" />
                <p>27 vagas</p>
              </ActivityButtonSubscribedOrAvailable>
            </ActivityOption>
          </EachBlockListActivities>
        </BlockListActivities>

        <BlockListActivities>
          <h2>Auditório Principal</h2>
          <EachBlockListActivities>
            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>09:00 - 10:00</p>
              </ActivityDescription>
              <ActivityButtonSoldOff>
                <IoCloseCircleOutline size="20px" color= "#CC6666" />
                <p>Esgotado</p>
              </ActivityButtonSoldOff>
            </ActivityOption>

            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>10:00 - 11:00</p>
              </ActivityDescription>
              <ActivityButtonSubscribedOrAvailable>
                <CgEnter size="20px" color= "#078632" />
                <p>20 vagas</p>
              </ActivityButtonSubscribedOrAvailable>
            </ActivityOption>
          </EachBlockListActivities>
        </BlockListActivities>

        <BlockListActivities>
          <h2>Auditório Principal</h2>
          <EachBlockListActivities>
            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>09:00 - 10:00</p>
              </ActivityDescription>
              <ActivityButtonSoldOff>
                <IoCloseCircleOutline size="20px" color= "#CC6666" />
                <p>Esgotado</p>
              </ActivityButtonSoldOff>
            </ActivityOption>

            <ActivityOption>
              <ActivityDescription>
                <p>Minecraft: montando o PC ideal</p>
                <p>09:00 - 10:00</p>
              </ActivityDescription>
              <ActivityButtonSoldOff>
                <IoCloseCircleOutline size="20px" color= "#CC6666" />
                <p>Esgotado</p>
              </ActivityButtonSoldOff>
            </ActivityOption>
          </EachBlockListActivities>
        </BlockListActivities>
      </ActivityContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const WeekDays = styled.div`
  margin-bottom: 50px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
`;

const WeekDaysButton = styled.button`
  margin: 0 17px 10px 0;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;

  height: 37px;
  width: 131px;

  font-size: 14px;
  color: #000000;
`;

const ActivityContainer = styled.div`
  display: flex;
  height: 390px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
`;

const BlockListActivities = styled.div`
  width: 100%;

  h2 {
    font-size: 17px;
    color: #7B7B7B;
    text-align: center;
  }
`;

const EachBlockListActivities = styled.div`
  border: 1px solid #D7D7D7;
  margin-top: 13px;
  padding: 10px;

  height: 100%;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    width: 8px;
  }
`;

const ActivityOption = styled.div`
  background-color: #F1F1F1;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px 10px;

  display: flex;
  height: auto;   //vai mudar de acordo com a duração da atividade
`;

const ActivityDescription = styled.span`
  border-right: 1px solid #CFCFCF;
  padding-right: 5px;
  margin-right: 10px;

  width: calc(100% - 15px - 20px - 40px);

  font-size: 12px;
  word-break: normal;
  color: #343434;

  p:nth-child(1) {
    font-weight: bold;
    margin-bottom: 6px;
  }
`;

const ActivityButtonPattern = styled.button`
  border: none;
  padding: 2px;

  width: 70px;
  height: 50px;

  align-self: center;

  p {
    margin-top: 5px;
    
    font-size: 10px;
  }
`;

const ActivityButtonSoldOff = styled(ActivityButtonPattern)`
  p {
    color: #CC6666;
  }
`;

const ActivityButtonSubscribedOrAvailable = styled(ActivityButtonPattern)`
  p {
    color: #078632;
  }
`;
