import api from './api';

export async function createActivityBooking(body, token) {
  const response = await api.post('activitybooking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    
  return response.data;
}
