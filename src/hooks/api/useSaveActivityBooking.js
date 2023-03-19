import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityBookingApi from '../../services/activityBookingApi';

export default function useSaveActivityBooking() {
  const token = useToken();

  const {
    loading: saveActivityBookingLoading,
    error: saveActivityBookingError,
    act: saveActivityBooking
  } = useAsync((data) => activityBookingApi.createActivityBooking(data, token), false);

  return {
    saveActivityBookingLoading,
    saveActivityBookingError,
    saveActivityBooking
  };
}
