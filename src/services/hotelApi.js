import api from './api';

export async function getHotel(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(`getHotelById: ${response.data}`);
  return response.data;
}

export async function getAllHotels(token) {
  const response = await api.get('hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.data);

  return response.data;
}
