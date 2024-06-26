import type { OrderListPassThroughOptions } from 'primevue/orderlist'
export default {
  root: {
    class: ['flex']
  },
  controls: {
    class: ['flex flex-col justify-center gap-2', 'p-5']
  },
  moveUpButton: {
    root: ({ context }) => ({
      class: [
        // Flexbox & Alignment
        'relative inline-flex items-center justify-center',
        // Shape
        'rounded-md',
        // Color
        'text-primary-inverse',
        'bg-primary',
        'border border-primary',
        // Spacing & Size
        'w-12',
        'm-0',
        'px-0 py-3',
        // Transitions
        'transition duration-200 ease-in-out',
        // State
        'hover:bg-primary-hover hover:border-primary-hover',
        'focus:outline-none focus:outline-offset-0 focus:ring',
        'focus:ring-primary/50',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
        // Interactivity
        'cursor-pointer user-select-none'
      ]
    }),
    label: {
      class: ['flex-initial', 'w-0']
    }
  },
  moveDownButton: {
    root: ({ context }) => ({
      class: [
        // Flexbox & Alignment
        'relative inline-flex items-center justify-center',
        // Shape
        'rounded-md',
        // Color
        'text-primary-inverse',
        'bg-primary',
        'border border-primary',
        // Spacing & Size
        'w-12',
        'm-0',
        'px-0 py-3',
        // Transitions
        'transition duration-200 ease-in-out',
        // State
        'hover:bg-primary-hover hover:border-primary-hover',
        'focus:outline-none focus:outline-offset-0 focus:ring',
        'focus:ring-primary/50',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
        // Interactivity
        'cursor-pointer user-select-none'
      ]
    }),
    label: {
      class: ['flex-initial', 'w-0']
    }
  },
  moveTopButton: {
    root: ({ context }) => ({
      class: [
        // Flexbox & Alignment
        'relative inline-flex items-center justify-center',
        // Shape
        'rounded-md',
        // Color
        'text-primary-inverse',
        'bg-primary',
        'border border-primary',
        // Spacing & Size
        'w-12',
        'm-0',
        'px-0 py-3',
        // Transitions
        'transition duration-200 ease-in-out',
        // State
        'hover:bg-primary-hover hover:border-primary-hover',
        'focus:outline-none focus:outline-offset-0 focus:ring',
        'focus:ring-primary/50',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
        // Interactivity
        'cursor-pointer user-select-none'
      ]
    }),
    label: {
      class: ['flex-initial', 'w-0']
    }
  },
  moveBottomButton: {
    root: ({ context }) => ({
      class: [
        // Flexbox & Alignment
        'relative inline-flex items-center justify-center',
        // Shape
        'rounded-md',
        // Color
        'text-primary-inverse',
        'bg-primary',
        'border border-primary',
        // Spacing & Size
        'w-12',
        'm-0',
        'px-0 py-3',
        // Transitions
        'transition duration-200 ease-in-out',
        // State
        'hover:bg-primary-hover hover:border-primary-hover',
        'focus:outline-none focus:outline-offset-0 focus:ring',
        'focus:ring-primary/50',
        { 'cursor-default pointer-events-none opacity-60': context.disabled },
        // Interactivity
        'cursor-pointer user-select-none'
      ]
    }),
    label: {
      class: ['flex-initial', 'w-0']
    }
  },
  container: {
    class: ['flex-auto']
  },
  header: {
    class: [
      'font-bold',
      'border-b-0 rounded-t-md',
      'p-5',
      'text-surface-700 dark:text-white/80',
      'bg-surface-50 dark:bg-surface-800',
      'border border-surface-200 dark:border-surface-700'
    ]
  },
  list: {
    class: [
      'list-none m-0 p-0',
      'min-h-[12rem] max-h-[24rem]',
      'rounded-b-md',
      'text-surface-600 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-800',
      'border border-surface-200 dark:border-surface-700',
      'py-3 px-0',
      'outline-none',
      'overflow-auto'
    ]
  },
  item: ({ context }) => ({
    class: [
      // Position
      'relative',
      // Spacing
      'py-3 px-5 m-0',
      // Shape
      'border-none',
      // Transition
      'transition duration-200',
      // Color
      { 'text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900': !context.active },
      { 'text-primary-highlight-inverse bg-primary-highlight': context.active },
      // State
      {
        'hover:bg-surface-100 dark:hover:bg-surface-700': !context.active,
        'hover:bg-primary-highlight-hover': context.active
      },
      // Misc
      'cursor-pointer overflow-hidden'
    ]
  })
} satisfies OrderListPassThroughOptions
