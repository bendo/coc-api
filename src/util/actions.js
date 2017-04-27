export function action(type, data = {}) {
    return {
        type: type,
        payload: data
    };
}

export function asyncAction(type, promise) {
    return action(type, {promise: promise});
}
