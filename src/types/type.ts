export type Product = {
  id: number;
  img: string;        
  title: string;
  description: string;
  price: string;
};

export interface Testimonial {
  name: string;
  city: string;
  text: string;
}
export interface LocalType { locale: string };

export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coords: [number, number];
};