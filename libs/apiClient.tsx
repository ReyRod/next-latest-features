import axios, { AxiosInstance, AxiosResponse } from "axios";
import { MoviesResponse } from "@/types/movie";

const API_BASE_URL = "https://api.themoviedb.org/3/";

interface ApiClientOptions {
  apiKey: string;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(options: ApiClientOptions) {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
    });

    this.axiosInstance.interceptors.request.use((config) => {
      config.params = {
        ...config.params,
        api_key: options.apiKey,
      };
      return config;
    });
  }

  async getPopularMovies(page?: number): Promise<MoviesResponse> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response: AxiosResponse = await this.axiosInstance.get(
          "/movie/popular",
          {
            params: {
              page,
            },
          },
        );
        resolve(response.data);
      }, 2000);
    });
  }

  async getUpcomingMovies(page?: number): Promise<MoviesResponse> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response: AxiosResponse = await this.axiosInstance.get(
          "/movie/upcoming",
          {
            params: {
              page,
            },
          },
        );
        resolve(response.data);
      }, 5000);
    });
  }

  async getMoviesByYear(year?: number): Promise<MoviesResponse> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response: AxiosResponse = await this.axiosInstance.get(
          "/discover/movie",
          {
            params: {
              primary_release_year: year,
            },
          },
        );
        resolve(response.data);
      }, 2000);
    });
  }
}

const apiKey = "9a2cb8a9a27bcdeb584a3d1bad81067b";

if (!apiKey) {
  throw new Error("API key is missing");
}

const apiClient = new ApiClient({ apiKey });

export default apiClient;
