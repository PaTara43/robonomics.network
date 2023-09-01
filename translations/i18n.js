import { initI18n } from 'i18n-pro'
import ar from './Arabic.json';
import ru from './Russian.json';
import zh from './Chinese.json';
import en from './English.json';
import es from './Spanish.json';
import ja from './Japanese.json';
import de from './German.json';
import az from './Azerbaijani.json';
import fr from './French.json';
import it from './Italian.json';
import ko from './Korean.json';
import pt from './Portuguese.json';
import tr from './Turkish.json';
import uk from './Ukrainian.json';

// for blog
// import arBlog from './blog/Arabic.json';
// import ruBlog from './blog/Russian.json';
// import zhBlog from './blog/Chinese.json';
// import enBlog from './blog/English.json';
// const en = Object.assign(enBlog, enDefault);
// const ar = Object.assign(arBlog, arDefault);
// const ru = Object.assign(ruBlog, ruDefault);
// const zh = Object.assign(zhBlog, zhDefault);




const {
  t,
  setI18n,
  withI18n,
  
} = initI18n({
  namespace: 'networkTranslations',
  langs: {
    en,
    ar,
    ru,
    zh,
    es,
    ja,
    de,
    az,
    fr,
    it,
    ko,
    pt,
    tr,
    uk
  },
  locale: typeof window !== "undefined" ? (window.localStorage.getItem('locale') || 'en') : 'en'
})



export {
  t,
  setI18n,
  withI18n,
}