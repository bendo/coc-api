const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

export function pending(type) { return type + '_' + PENDING; }

export function fulfilled(type) { return type + '_' + FULFILLED; }

export function rejected(type) { return type + '_' + REJECTED; }

export const SUFFIXES_FOR_MIDDLEWARE = [PENDING, FULFILLED, REJECTED];
