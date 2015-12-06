export default function checkRequire(meta, item) {
  for (let field in item) {
    if (!meta[field])
      continue;
    let metaField = meta[field];
    if (metaField.required && !item[field]) {
      return 'Vui lòng nhập: ' + metaField.label;
    }
  }
  return '';
}

