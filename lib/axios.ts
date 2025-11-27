import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Generic axios client for API calls
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response?.status === 401) {
      console.error('Unauthorized: Please check your credentials');
    } else if (error.response?.status === 429) {
      console.error('Rate limit exceeded');
    } else if (error.response?.status && error.response.status >= 500) {
      console.error('Server error occurred');
    }
    return Promise.reject(error);
  }
);

export default apiClient; 