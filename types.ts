
export interface SolutionGroup {
  subtitle?: string;
  features: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  subtitle?: string;
  features?: string[];
  groups?: SolutionGroup[];
}

export interface AmenityItem {
  id: string;
  title: string;
  image: string;
}
