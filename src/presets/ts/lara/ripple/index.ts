import type { RippleDirectivePassThroughOptions } from 'primevue/ripple'

export default {
  root: {
    class: ['block absolute bg-surface-0/50 rounded-full pointer-events-none'],
    style: 'transform: scale(0)'
  }
} satisfies RippleDirectivePassThroughOptions
