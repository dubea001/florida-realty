export interface fetchRealtyOptions {
  city?: string;
  price_max?: string;
  limit?: string;
  offset?: string;
  sort?: string;
}

export interface ButtonProps {
  title: string;
  style?: string;
  type?: string;
  onClick?: () => void;
}