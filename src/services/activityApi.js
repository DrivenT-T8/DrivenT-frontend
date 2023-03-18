import api from './api';

export async function getActivityDates(token) {
  const response = await api.get('activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
