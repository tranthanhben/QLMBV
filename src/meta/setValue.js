export function setValueLogin(event, item) {
  let tempItem = item;
  let addr = event.target.dataset.addr;
  tempItem[addr] = event.target.value.trim();
  return tempItem;
}
export function setValue(object, addr, value) {
  let re = /\.|\|/g;
  let startIndex = 0;
  let match = re.exec(addr);
  if (match) {
    let addrElem = addr.slice(startIndex, re.lastIndex - 1);
    let child = object[addrElem];
    if (child === undefined || child === null) {
      child = match[0] === '.' ? {} : [];
    }
    let lastElem = addr.slice(re.lastIndex, addr.length);
    object[addrElem] = setValue(child, lastElem, value);
  } else {
    let lastElem = addr.slice(startIndex);
    object[lastElem] = value;
  }
  return object;
}
