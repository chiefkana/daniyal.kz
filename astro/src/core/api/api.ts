import { useToastStore } from "../hooks/useToastStore";
import type { Either, StrapiError, StrapiResponse } from "../types/strapi.d";
import { left, right } from "../types/strapi.d";

type FilterParams = {
  [key: string]: string | number | boolean;
};

export const fetchProducts = async (
  locale: string = "ru",
  filters: FilterParams = {},
  page: number = 1,
  pageSize: number = 9
): Promise<Either<StrapiError, StrapiResponse>> => {
  try {
    const params = new URLSearchParams({
      locale,
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
      ...Object.entries(filters).reduce(
        (acc, [key, value]) => {
          acc[`filters[${key}]`] = String(value);
          return acc;
        },
        {} as Record<string, string>
      ),
    });

    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/products?${params}`
    );

    if (!response.ok) {
      const error: StrapiError = {
        status: response.status,
        name: `HTTP-${response.status}`,
        message: await response.text(),
      };

      useToastStore().showToast({
        type: "error",
        message: `Ошибка вывода данных`,
        timeout: 3000,
      });

      return left(error);
    }

    const data: StrapiResponse = await response.json();

    useToastStore().showToast({
      type: "success",
      message: `Успех`,
      timeout: 3000,
    });

    console.log(data);

    return right(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Неизвестная ошибка!";

    useToastStore().showToast({
      type: "error",
      message,
      timeout: 3000,
    });

    return left({
      status: 500,
      name: "Network Error",
      message,
    });
  }
};
