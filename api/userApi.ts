import axios from 'axios';

export async function getDateArticles(urlOrder: string) {
  try {
    const response = await axios.get(urlOrder);
    return {
      data: response.data,
      loading: false,
      error: null,
    };
  } catch (error: any) {
    return {
      data: null,
      loading: false,
      error: error.message || 'Ошибка загрузки',
    };
  }
}