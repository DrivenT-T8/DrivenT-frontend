import api from './api';

export async function getActivityDates(token) {
  const response = await api.get('activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesByDateId(dateId, token) {
  const response = await api.get(`activity/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

