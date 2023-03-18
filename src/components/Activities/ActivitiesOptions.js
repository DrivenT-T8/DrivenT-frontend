import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

export default function ActivitiesOptions({ activityName }) {
  return(
    <>
      <ActivityOption>
        <ActivityDescription>
          <p>{activityName}</p>
          <p>09:00 - 10:00</p>
        </ActivityDescription>
        <ActivityButtonSubscribedOrAvailable>
          <CgEnter size="20px" color= "#078632" />
          <p>20 vagas</p>
        </ActivityButtonSubscribedOrAvailable>
      </ActivityOption>

      {/*  Esses são os outros tipos de ícones, dependendo se tem vagas, está esgotado ou foi inscrito:
        <ActivityButtonSoldOff>
          <IoCloseCircleOutline size="20px" color= "#CC6666" />
          <p>Esgotado</p>
        </ActivityButtonSoldOff>
      
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
