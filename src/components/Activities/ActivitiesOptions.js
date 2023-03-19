import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { CgEnter } from 'react-icons/cg';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import useSaveActivityBooking from '../../hooks/api/useSaveActivityBooking';
import styled from 'styled-components';
import { useState } from 'react';

export default function ActivitiesOptions({ activityBooking, activity }) {
  const { 
    id: activityId,
    name: activityName,
    startsAt: activityStartsAt,
    endsAt: activityEndsAt,
    capacity: activityCapacity,
  } = activity;

  const startsAt = dayjs(activityStartsAt);
  const endsAt = dayjs(activityEndsAt);
  const differenceEndAndStart = endsAt.diff(startsAt);
  const durationActivity = differenceEndAndStart / (1000 * 60 * 60);
  const heightOfActivityDuration = 80 * durationActivity;

  const vacanciesAvailable = activityCapacity - activityBooking;

  const { saveActivityBooking } = useSaveActivityBooking();
  const [ subscribed, setSubscribed ] = useState(false);
  const [ isSubscribed, setIsSubscribed ] = useState({});

  function generateHourModel(activityStartsAt, activityEndsAt) {
    const startsAt = dayjs(activityStartsAt).format('HH:mm');
    const endsAt = dayjs(activityEndsAt).format('HH:mm');

    return `${startsAt} - ${endsAt}`;
  }

  async function createActivityBooking(id, activity) {
    try {
      const data = { activityId: id };
      const booking = await saveActivityBooking(data);
      setSubscribed(true);
      setIsSubscribed(activity);
      toast('Inscrição realizada com sucesso!');
    } catch (err) {
      toast('Não foi possível realizar a inscrição!');
    }
  }

  return(
    <>
      <ActivityOption 
        heightOfActivityDuration={heightOfActivityDuration} 
        isSubscribedGreen={isSubscribed.id === activity.id}
      >
        <ActivityDescription>
          <p>{activityName}</p>
          <p>{generateHourModel(activityStartsAt, activityEndsAt)}</p>
        </ActivityDescription>
        {vacanciesAvailable > 0 && subscribed === false && (
          <ActivityButtonSubscribedOrAvailable 
            isSubscribedGreen={isSubscribed.id === activity.id}
            onClick={() => createActivityBooking(activityId, activity)}
          >
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
        {subscribed === true && (
          <ActivityButtonSubscribedOrAvailable 
            isSubscribedGreen={isSubscribed.id === activity.id}
          >
            <IoCheckmarkCircleOutline size="20px" color= "#078632" />
            <p>Inscrito</p>
          </ActivityButtonSubscribedOrAvailable> 
        )}
      </ActivityOption>
    </>
  );
}

const ActivityOption = styled.div`
  background-color: ${(props) => (props.isSubscribedGreen ? '#D0FFDB' : '#F1F1F1')};
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
  background-color: ${(props) => (props.isSubscribedGreen ? '#D0FFDB' : '#F1F1F1')};

  p {
    color: #078632;
  }
`;
