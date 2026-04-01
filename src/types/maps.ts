export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Country {
  _id: string;
  name: string;
  slug: string;
  isoCode: string;
  coordinates: Coordinates;
  description?: string;
  travelledAt?: string;
  coverImage?: string;
  zoomLevel: number;
  cityCount?: number;
}

export interface Photo {
  url: string;
  caption?: string;
  takenAt?: string;
}

export interface City {
  _id: string;
  name: string;
  slug: string;
  countrySlug: string;
  countryName: string;
  coordinates: Coordinates;
  description?: string;
  travelledAt?: string;
  coverImage?: string;
  photos: Photo[];
}

export interface CountryWithCities extends Country {
  cities: City[];
}

export interface PlacesResponse {
  ok: boolean;
  countries: Country[];
}

export interface CountryResponse {
  ok: boolean;
  country: CountryWithCities;
}

export interface CityResponse {
  ok: boolean;
  city: City;
}
