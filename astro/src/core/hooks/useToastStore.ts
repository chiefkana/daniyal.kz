import { reactive } from "vue";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  timeout: number;
}

const toastState = reactive({
  queue: [] as Toast[],
  nextId: 0,
});

export const useToastStore = () => {
  const showToast = (
    config: Omit<Toast, "id" | "timeout"> & { timeout?: number }
  ) => {
    const toast: Toast = {
      id: toastState.nextId++,
      timeout: 3000,
      ...config,
    };

    toastState.queue.push(toast);

    setTimeout(() => {
      removeToast(toast.id);
    }, toast.timeout);
  };

  const removeToast = (id: number) => {
    toastState.queue = toastState.queue.filter(t => t.id !== id);
  };

  return {
    queue: toastState.queue,
    showToast,
    removeToast,
  };
};
