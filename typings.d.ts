export type Sneaker = {
  params: {
    id: string;
    name: string;
    price: number;
    description: string;
    highlights: string[];
    details: {
      material: string;
      sole: string;
      closure: string;
      origin: string;
    };
    images: string[];
  };
};

export type SneakersArray = {
  _id: string;
  name: string;
  price: number;
  description: string;
  highlights: string[];
  details: {
    material: string;
    sole: string;
    closure: string;
    origin: string;
  };
  images: string[];
};
