import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faChevronRight, 
  faChevronLeft, 
  faFolder, 
  faPaperPlane,
  faPlus,
  faFileExport,
  faRocket,
  faHistory,
  faBook,
  faBookOpen,
  faFileAlt,
  faEdit,
  faArrowLeft,
  faArrowRight,
  faFolderOpen,
  faTimes,
  faFile,
  faFileCode,
  faSearch,
  faMicrophone,
  faSync,
  faVial,
  faSave,
  faShare,
  faCode,
  faPlay,
  faSitemap,
  faCheck,
  faClipboardList,
  faDraftingCompass,
  faExternalLinkAlt,
  faRobot,
  faTasks
} from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin(nuxtApp => {
  // Add all icons to the library
  library.add(
    faChevronRight, 
    faChevronLeft, 
    faFolder, 
    faPaperPlane,
    faPlus,
    faFileExport,
    faRocket,
    faHistory,
    faBook,
    faBookOpen,
    faFileAlt,
    faEdit,
    faArrowLeft,
    faArrowRight,
    faFolderOpen,
    faTimes,
    faFile,
    faFileCode,
    faSearch,
    faMicrophone,
    faSync,
    faVial,
    faSave,
    faShare,
    faCode,
    faPlay,
    faSitemap,
    faCheck,
    faClipboardList,
    faDraftingCompass,
    faExternalLinkAlt,
    faRobot,
    faTasks
  )

  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
