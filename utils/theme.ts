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
}

export default theme
