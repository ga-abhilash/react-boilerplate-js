import {isObject, isString, isArray} from 'lodash';

export const convertJsonToFormData = (data) => {
  const formData = new FormData();
  for (let field in data) {
    const value = data[field];
    if (isString(value)) {
      formData.append(field, value);
    }
    if (isObject(value)) {
      formData.append(field, value, value.name);
    }
    if(isArray(value)) {
      formData.append(field, JSON.stringify(value));
    }
  }

  return formData;
};

export const stringToSlug = (str) => {
  return str
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
};

export function getQueryVariable(variable, searchString) {
  let query = searchString.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.info('Query variable %s not found', variable);
  return '';
}
