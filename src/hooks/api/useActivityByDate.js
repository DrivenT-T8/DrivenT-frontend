import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivityByDate() {
  const token = useToken();

  const {
    data: activitiesByDate,
    loading: activitiesByDateLoading,
    error: activitiesByDateError,
    act: getActivitiesByDateId,
  } = useAsync((data) => activityApi.getActivitiesByDateId(data, token));

  return {
    activitiesByDate,
    activitiesByDateLoading,
    activitiesByDateError,
    getActivitiesByDateId,
  };
}
