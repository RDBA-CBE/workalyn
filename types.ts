
export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  features?: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  image: string;
}
