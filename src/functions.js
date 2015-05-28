export function swap(atom, func, ...args) {return atom.swap(func, ...args); }
export function deref(ref) {return ref.deref(); }
export function updateIn(val, keyPath, func, ...args) {return val.updateIn(keyPath, (x) => func(x, ...args)); }
export function update(val, key, func, ...args) {return updateIn(val, [key], func, ...args); }
export function getIn(val, keyPath, notSetValue) {return val.getIn(keyPath, notSetValue); }
export function get(val, key, notSetValue) {return val.get(key, notSetValue); }
export function setIn(val, keyPath, newValue) {return val.setIn(keyPath, newValue); }
export function set(val, key, newValue) {return val.set(key, newValue); }
export function hasIn(val, keyPath) {return val.hasIn(keyPath); }
export function has(val, key) {return val.has(key); }
export function removeIn(val, keyPath) {return val.removeIn(keyPath); }
export function remove(val, key) {return val.remove(key); }
export function clear(val) {return val.clear(); }
