export interface StrapiProduct {
  id: number;
  attributes: {
    name: string;
    slug: string;
    price: number;
    featured: boolean;
    colors: string[];
    category: string;
    type: string;
    images: {
      data: Array<{
        attributes: {
          url: string;
          formats: {
            thumbnail?: { url: string };
            medium?: { url: string };
          };
        };
      }>;
    };
  };
}

export const fetchProducts = async (params: {
  page?: number;
  filters?: Record<string, any>;
}) => {
  const query = new URLSearchParams({
    "pagination[pageSize]": "9",
    "pagination[page]": String(params.page || 1),
    populate: "*",
    ...params.filters,
  });

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/api/products?${query}`
  );
  const { data, meta } = await response.json();
  return {
    products: (data as StrapiProduct[]) ?? [],
    pagination: meta?.pagination,
  };
};
