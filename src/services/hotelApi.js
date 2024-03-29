import api from './api';

export async function getHotelById(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllHotels(token) {
  const response = await api.get('hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
