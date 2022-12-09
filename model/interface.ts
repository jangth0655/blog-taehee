export interface Post {
  title: string;
  subTitle?: string;
  category: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Data {
  title: string;
  category: string;
  name: string;
  subTitle?: string;
  description?: string;
}
