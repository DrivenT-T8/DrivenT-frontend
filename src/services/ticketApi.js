import api from './api';

export async function tsType(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createTicket(body, token) {
  const response = await api.post('tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateRoom(body, token) {
  const { roomId, bookingId } = body;
 
  const response = await api.put(`/booking/${bookingId}`, { roomId: roomId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getTicket(token) {
  const response = await api.get('tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
