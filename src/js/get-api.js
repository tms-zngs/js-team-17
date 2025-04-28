import axios from 'axios';

export async function getResponse() {
  const response = await axios('https://portfolio-js.b.goit.study/api/reviews');
  return response.data;
}
