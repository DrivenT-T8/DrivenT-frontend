import dayjs from 'dayjs';
import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

export default function ActivitiesOptions({ activityName, activityStartsAt, activityEndsAt, activityCapacity, activityBooking }) {
  const startsAt = dayjs(activityStartsAt);
  const endsAt = dayjs(activityEndsAt);
  const differenceEndAndStart = endsAt.diff(startsAt);
  const durationActivity = differenceEndAndStart / (1000 * 60 * 60);
  const heightOfActivityDuration = 80 * durationActivity;
  const vacanciesAvailable = activityCapacity - activityBooking;

  function generateHourModel(activityStartsAt, activityEndsAt) {
    const startsAt = dayjs(activityStartsAt).format('HH:mm');
    const endsAt = dayjs(activityEndsAt).format('HH:mm');

    return `${startsAt} - ${endsAt}`;
  }

  return(
    <>
      <ActivityOption heightOfActivityDuration={heightOfActivityDuration}>
        <ActivityDescription>
          <p>{activityName}</p>
          <p>{generateHourModel(activityStartsAt, activityEndsAt)}</p>
        </ActivityDescription>
        {vacanciesAvailable > 0 && (
          <ActivityButtonSubscribedOrAvailable>
            <CgEnter size="20px" color= "#078632" />
            <p>{vacanciesAvailable} vagas</p>
          </ActivityButtonSubscribedOrAvailable>
        )}
        {vacanciesAvailable === 0 && (
          <ActivityButtonSoldOff>
            <IoCloseCircleOutline size="20px" color= "#CC6666" />
            <p>Esgotado</p>
          </ActivityButtonSoldOff>
        )}
      </ActivityOption>

      {/*  Esses são os outros tipos de ícones, dependendo se tem vagas, está esgotado ou foi inscrito:
      
        <ActivityButtonSubscribedOrAvailable>
          <IoCheckmarkCircleOutline size="20px" color= "#078632" />
          <p>Inscrito</p>
        </ActivityButtonSubscribedOrAvailable> 
      */}
    </>
  );
}

const ActivityOption = styled.div`
  background-color: #F1F1F1;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px 10px;

  display: flex;
  height: ${props => `${props.heightOfActivityDuration}px`};
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
