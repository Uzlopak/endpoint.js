import { isPlainObject } from "is-plain-object";

export function mergeDeep(defaults: any, options: any): object {
  const result = { __proto__: true, ...defaults };

  for (const key of Object.keys(options)) {
    if (isPlainObject(options[key])) {
      if (!(key in defaults)) result[key] = options[key];
      else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      result[key] = options[key];
    }
  }

  return result;
}
