
import i18n from "@lib/localization/vue-i18n"; // Import your i18n instance
import type { App } from "vue";

export default (app: App) => {
  app.use(i18n);
};