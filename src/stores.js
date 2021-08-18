import { writable } from 'svelte/store'

// default theme color
export const theme = writable('g100')

export const isFetching = writable(false)

export const article = writable("")
