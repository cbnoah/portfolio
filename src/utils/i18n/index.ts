import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import aboutFr from "./locales/fr/about.json"
import contactFr from "./locales/fr/contact.json"
import educationFr from "./locales/fr/education.json"
import footerFr from "./locales/fr/footer.json"
import careerFr from "./locales/fr/career.json"
import projectsFr from "./locales/fr/projects.json"
import titleFr from "./locales/fr/title.json"
import topBarFr from "./locales/fr/topBar.json"

import aboutEn from "./locales/en/about.json"
import contactEn from "./locales/en/contact.json"
import educationEn from "./locales/en/education.json"
import footerEn from "./locales/en/footer.json"
import careerEn from "./locales/en/career.json"
import projectsEn from "./locales/en/projects.json"
import titleEn from "./locales/en/title.json"
import topBarEn from "./locales/en/topBar.json"

const resources = {
    fr: {
        translation: {
            ...aboutFr,
            ...contactFr,
            ...educationFr,
            ...footerFr,
            ...careerFr,
            ...projectsFr,
            ...titleFr,
            ...topBarFr,
        },
    },
    en: {
        translation: {
            ...aboutEn,
            ...contactEn,
            ...educationEn,
            ...footerEn,
            ...careerEn,
            ...projectsEn,
            ...titleEn,
            ...topBarEn,
        },
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en",
        lng: "fr",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
