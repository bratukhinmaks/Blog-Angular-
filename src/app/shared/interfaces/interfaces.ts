export interface Post {
  date: Date;
  auther: {
    name: string,
    surname: string,
  };
  mail: string;
  img?: string;
  title: string;
  text: string;
}
