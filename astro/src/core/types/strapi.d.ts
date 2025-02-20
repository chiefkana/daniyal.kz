export type Either<L, R> = Left<L> | Right<R>;

export interface Left<L> {
  readonly _tag: "Left";
  readonly error: L;
}

export interface Right<R> {
  readonly _tag: "Right";
  readonly value: R;
}

// Factory functions
export const left = <L, R = never>(error: L): Either<L, R> => ({
  _tag: "Left",
  error,
});

export const right = <R, L = never>(value: R): Either<L, R> => ({
  _tag: "Right",
  value,
});

export interface StrapiError {
  status: number;
  name: string;
  message: string;
}

export interface StrapiProduct {
  id: number;
  documentId: string;
  Name: string;
  Slug: string;
  Price: number;
  Featured: boolean;
  Description: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  Images: StrapiImage[];
  Colors: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface StrapiImage {
  url: string;
  formats: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse {
  data: StrapiProduct[];
  meta: {
    pagination: StrapiPagination;
  };
}

// Type guards
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> =>
  either._tag === "Left";

export const isRight = <L, R>(either: Either<L, R>): either is Right<R> =>
  either._tag === "Right";
