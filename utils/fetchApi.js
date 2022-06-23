import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ffa735c626msh4366a0f4766d4bep13edfbjsn90bd2372b9e4' ,
    },
  });
    
  return data;
}