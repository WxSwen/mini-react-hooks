export const isClient = typeof window === 'object';

export const on = (obj: HTMLElement|any, ...args: any[]) => obj.addEventListener(...args);

export const off = (obj: HTMLElement|any, ...args: any[]) => obj.removeEventListener(...args);