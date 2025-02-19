import { reactive } from "vue";

export type ToastType = "success" | "error" | "info";

interface Toast {
  id: symbol;
  message: string;
  type: ToastType;
  timeout: number;
  hidden: boolean;
}

const state = reactive({
  toasts: [] as Toast[],
});

let counter = 0;

export const useToastStore = () => {
  const showToast = (config: Omit<Omit<Toast, "hidden">, "id">) => {
    const toast: Toast = {
      id: Symbol(++counter),
      hidden: true,
      ...config,
    };

    state.toasts.push(toast);

    setTimeout(() => {
      toggleToast(toast.id);
    }, 100);

    setTimeout(() => {
      toggleToast(toast.id);
      setTimeout(() => {
        dismissToast(toast.id);
      }, 1000);
    }, toast.timeout);

    return toast.id;
  };

  const toggleToast = (id: symbol) => {
    const index = state.toasts.findIndex(t => t.id === id);
    if (index > -1) {
      state.toasts[index].hidden = !state.toasts[index].hidden;
    }
  };

  const dismissToast = (id: symbol) => {
    const index = state.toasts.findIndex(t => t.id === id);
    if (index > -1) {
      state.toasts.splice(index, 1);
    }
  };

  return {
    toasts: state.toasts,
    showToast,
    dismissToast,
  };
};
