import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import useActivity from '../../hooks/api/useActivity';
import useActivityByDate from '../../hooks/api/useActivityByDate';
import ActivitiesOptions from './ActivitiesOptions';

export default function ChooseActivities() {
  const { activityDates } = useActivity();
  const { getActivitiesByDateId } = useActivityByDate();
  const [ chosenDateSelected, setChosenDateSelected ] = useState({});
  const [ activitiesOfDateSelected, setActivitiesOfDateSelected ] = useState([]);

  function generateDateModel(date) {
    const currentWeekday = dayjs(date).locale('pt-br').format('dddd');
    const capitalizedWeekday = currentWeekday[0].toUpperCase() + currentWeekday.substring(1);
    const currentDate = dayjs(date).format('DD/MM');

    return `${capitalizedWeekday}, ${currentDate}`;
  }

  async function getActivitiesChosenDate(dateId) {
    try {
      await getActivitiesByDateId(dateId).then((res) => {
        console.log(res);
        setActivitiesOfDateSelected(res);
      });
    } catch (err) {
      return err;
    }
  }

  return(
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      <WeekDays>
        {activityDates?.map((dates) => (
          <WeekDaysButton isSelected={chosenDateSelected.id === dates.id} onClick={() => {
            setChosenDateSelected(dates);
            getActivitiesChosenDate(dates.id);
          }}>
            {generateDateModel(dates.date)}</WeekDaysButton>
        ))}
      </WeekDays>
      
      {chosenDateSelected !== undefined && (
        <ActivityContainer>
          {activitiesOfDateSelected?.map((localActivity) => (
            <>
              {localActivity.name === 'Auditório Principal' && (
                <BlockListActivities>
                  <h2>{localActivity.name}</h2>
                  <EachBlockListActivities>
                    {localActivity.Activities?.map((activity) => (
                      <ActivitiesOptions activityName={activity.name} activityStartsAt={activity.startsAt} activityEndsAt={activity.endsAt} activityCapacity={activity.capacity} activityBooking={activity.ActivityBooking.length}/>
                    ))}
                  </EachBlockListActivities>
                </BlockListActivities>
              )}

              {localActivity.name === 'Auditório Lateral' && (
                <BlockListActivities>
                  <h2>{localActivity.name}</h2>
                  <EachBlockListActivities>
                    {localActivity.Activities?.map((activity) => (
                      <ActivitiesOptions activityName={activity.name} activityStartsAt={activity.startsAt} activityEndsAt={activity.endsAt} activityCapacity={activity.capacity} activityBooking={activity.ActivityBooking.length} />
                    ))}
                  </EachBlockListActivities>
                </BlockListActivities>
              )}

              {localActivity.name === 'Auditório Superior' && (
                <BlockListActivities>
                  <h2>{localActivity.name}</h2>
                  <EachBlockListActivities>
                    {localActivity.Activities?.map((activity) => (
                      <ActivitiesOptions activityName={activity.name} activityStartsAt={activity.startsAt} activityEndsAt={activity.endsAt} activityCapacity={activity.capacity} activityBooking={activity.ActivityBooking.length} />
                    ))}
                  </EachBlockListActivities>
                </BlockListActivities>
              )}
            </>
          ))}
        </ActivityContainer>
      )}
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
  background-color: ${(props) => (props.isSelected ? '#FFD37D' : '#E0E0E0')};
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
