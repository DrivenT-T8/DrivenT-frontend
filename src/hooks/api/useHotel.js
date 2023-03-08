import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel() {
  const token = useToken();

  const {
    response: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync((hotelId) => {
    if (hotelId) hotelApi.getHotel(token, hotelId);
  });

  return {
    hotel,
    hotelLoading,
    hotelError,
    getHotel,
  };
}
