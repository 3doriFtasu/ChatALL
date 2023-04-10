import { createI18n } from "vue-i18n";

const messages = {
  en: {
    header: {
      singleColumn: "Single Column",
      doubleColumn: "Double Column",
      tripleColumn: "Triple Column",
    },
    footer: {
      sendPrompt: "Send",
    },
  },
  zh: {
    header: {
      singleColumn: "单列",
      doubleColumn: "双列",
      tripleColumn: "三列",
    },
    footer: {
      sendPrompt: "发送",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;