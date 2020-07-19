import {
  faHeart,
  faCoffee,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import { ThemeConfig, PaletteThemeConfig } from 'fannypack/types'

interface CILMPaletteThemeConfig extends PaletteThemeConfig {
  yellow: string
  warningBg: string
  warningHover: string
}

interface CILMThemeConfig extends ThemeConfig {
  palette: CILMPaletteThemeConfig
}

const theme: CILMThemeConfig = {
  palette: {
    yellow: '#FFEA00',
    warningBg: '#263238',
    warningHover: '#37474f',
  },
  Icon: {
    iconSets: [
      {
        icons: [faHeart, faCoffee, faTimesCircle],
        prefix: 'solid-',
        type: 'font-awesome',
      },
      {
        icons: [faTwitter, faInstagram, faLinkedinIn, faGithub],
        prefix: 'brand-',
        type: 'font-awesome',
      },
    ],
  },
}

export default theme
