import {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    config,
    createTheme,
} = createStitches({
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        radii,
        space,
    },
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
    }
})
