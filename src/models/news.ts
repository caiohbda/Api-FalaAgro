export interface Noticia {
  id: string;
  userId: string;
  title: string;
  content: string;
  state: string;
  city: string;
  image: string;
}

export interface CreateNoticiaBody {
  userId: string;
  title: string;
  content: string;
  state: string;
  city: string;
  image: string;
}
