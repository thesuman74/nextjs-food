export interface ResturantTypes {
  id: string;
  resturant_name: string;
  resturant_location: string;
  imageLink: string;
}

export interface DealsTypes {
  id: string;
  title: string;
  subtitle: string;
  imageLink: string;
}

export interface ResturantProductTypes {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  imageLink: string;
}

export interface User {
  name: string;
  image: string;
  id: string;
  email: string;
  username: string;
  qr_code: string;
  user_profile: {
    phone_prefix: string;
    date_of_birth: string;
    secondary_phone_number: string;
    secondary_email: string;
    country_code: string;
    country: string | null;
    address: string | null;
    city: string | null;
    street: string | null;
    zip_code: string | null;
    house_no: string | null;
    gender: string;
    display_picture: string;
    expertise: string;
    interest: string;
  };
  token: string;
}

export interface Todotypes {
  checked: boolean;
  title: string;
  description: string;
  id: string;
}
