export type ArticleType =  {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  categories: number[];
  tags: number[];
  meta: {
    footnotes: string;
    [key: string]: any;
  };
  acf: any[]; // Если ACF (Advanced Custom Fields) не используется, можно заменить на Record<string, any>
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about?: { href: string }[];
    author?: { embeddable: boolean; href: string }[];
    replies?: { embeddable: boolean; href: string }[];
    'version-history'?: { count: number; href: string }[];
    [key: string]: any;
  };
}

export type ArticlesType = ArticleType[]
