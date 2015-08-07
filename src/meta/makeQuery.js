export default function makeQuery(query) {
  let result = {};
  for (let property in query) {
    let value = query[property];
    if (typeof value === 'boolean') {
      result[property] = value ? 1 : 0;
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        value = value.join(',');
      }
      result[property] = value;

    } else if(typeof value === "string"){
      result[property] = value.trim().split(" ").join(",");
    }else if (value) {
      result[property] = value;
    }
  }
  return result;
}
