import {
  faHeart,
  faCoffee,
  faTimesCircle,
  faShoppingBag,
  faBriefcase,
  faRunning,
  faClinicMedical,
  faHandsHelping,
  faRing,
  faPlaceOfWorship,
  faExclamation,
  faShareAlt,
  faSyringe,
  faPaw,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faCreativeCommons,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

import { ThemeConfig, PaletteThemeConfig, ButtonProps } from 'bumbag'

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
  Button: {
    variants: {
      'inverted-outline': {
        styles: {
          base: {
            border: '2px solid white',
            color: 'white',
            background: 'transparent',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          },
          hover: (props: ButtonProps) => ({
            background: 'white',
            color: props.palette,
          }),
        },
      },
    },
  },
  Icon: {
    iconSets: [
      {
        icons: [
          faHeart,
          faCoffee,
          faTimesCircle,
          faShoppingBag,
          faRunning,
          faClinicMedical,
          faBriefcase,
          faHandsHelping,
          faRing,
          faPlaceOfWorship,
          faExclamation,
          faShareAlt,
          faSyringe,
          faPaw,
        ],
        prefix: 'solid-',
        type: 'font-awesome',
      },
      {
        icons: [
          faTwitter,
          faInstagram,
          faLinkedinIn,
          faGithub,
          faFacebook,
          faCreativeCommons,
        ],
        prefix: 'brand-',
        type: 'font-awesome',
      },
    ],
  },
}

export default theme
