const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
