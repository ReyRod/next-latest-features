"use server";
import apiClient from "@/libs/apiClient";
import { MoviesResponse } from "@/types/movie";

export async function getMoviesByYear(year: number) {
  const moviesResponse: MoviesResponse = await apiClient.getMoviesByYear(year);
  return moviesResponse;
}
