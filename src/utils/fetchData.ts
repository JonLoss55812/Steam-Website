```typescript
import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('FETCH_ERROR', error);
    throw new Error('An error occurred while fetching data');
  }
};
```