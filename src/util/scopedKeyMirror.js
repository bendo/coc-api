export default function scopedKeyMirror(scope, obj) {
    const ret = {};
    Object.keys(obj).forEach((k) => (ret[k] = scope + '/' + k));
    return ret;
}
