import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelId() {
  const token = useToken();

  const {
    data: hotelId,
    loading: saveHotelLoading,
    error: saveHotelIdError,
    act: saveHotelId
  } = useAsync((data) => hotelApi.getHotelById(data, token));

  return {
    hotelId,
    saveHotelLoading,
    saveHotelIdError,
    saveHotelId
  };
}
