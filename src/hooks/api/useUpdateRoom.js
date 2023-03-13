import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useUpdateRoom() {
  const token = useToken();

  const {
    data: dados,
    loading: saveRoomLoading,
    error: saveRoomError,
    act: saveRoom,
  } = useAsync((data) => ticketApi.updateRoom(data, token), false);

  return {
    dados,
    saveRoomLoading,
    saveRoomError,
    saveRoom,
  };
}
