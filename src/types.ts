export interface Anime {
  id: string;
  movieName: string;
  description: string;
  image: string;
  episode: string;
  type: string;
  status: string;
  studios: string;
  duration: string;
  genres: string;
}

export type Page = "landing" | "home" | "detail";
