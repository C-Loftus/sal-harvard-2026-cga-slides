import { defineMermaidSetup } from '@slidev/types'

// CGS brand palette for every diagram in the deck.
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '16px',
    primaryColor: '#C9DEE8',
    primaryBorderColor: '#2C84B9',
    primaryTextColor: '#48535B',
    secondaryColor: '#86C1E2',
    tertiaryColor: '#FEFCF5',
    lineColor: '#82848B',
    textColor: '#48535B',
    edgeLabelBackground: '#FEFCF5',
  },
}))
