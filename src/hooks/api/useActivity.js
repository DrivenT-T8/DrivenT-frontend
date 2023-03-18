import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivity() {
  const token = useToken();

  const {
    data: activityDates,
    loading: activityDatesLoading,
    error: activityDatesError,
    act: getActivityDates,
  } = useAsync(() => activityApi.getActivityDates(token));

  return {
    activityDates,
    activityDatesLoading,
    activityDatesError,
    getActivityDates,
  };
}
