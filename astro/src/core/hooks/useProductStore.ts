import { reactive, readonly, ref } from "vue";
import { fetchProducts } from "../api/api";
import type {
  Either,
  StrapiError,
  StrapiProduct,
  StrapiResponse,
} from "../types/strapi.d";
import { isLeft } from "../types/strapi.d";

// Singleton state outside the composable
const state = reactive({
  products: [] as StrapiProduct[],
  filters: {
    category: "",
    type: "",
  },
  pagination: {
    page: 1,
    pageSize: 9,
    hasMore: true,
  },
  locale: "ru",
});

const loading = ref(false);
const error = ref<string | null>(null);

export const useProductStore = () => {
  const updateFilters = (newFilters: Partial<typeof state.filters>) => {
    state.filters = { ...state.filters, ...newFilters };
    state.pagination.page = 1;
    state.products = [];
  };

  const loadProducts = async () => {
    loading.value = true;
    error.value = null;

    const result: Either<StrapiError, StrapiResponse> = await fetchProducts(
      state.locale,
      state.filters,
      state.pagination.page,
      state.pagination.pageSize
    );

    if (isLeft(result)) {
      error.value = result.error.message;
      loading.value = false;
      return;
    }

    state.products = result.value.data;
    state.pagination.hasMore =
      result.value.meta.pagination.page <
      result.value.meta.pagination.pageCount;

    loading.value = false;
  };

  return {
    // Return readonly state reference
    state,
    loading: readonly(loading),
    error: readonly(error),
    updateFilters,
    loadProducts,
  };
};
