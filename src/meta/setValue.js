export function setValue(event, item) {
  let tempItem = item;
  let addr = event.target.dataset.addr;
  tempItem[addr] = event.target.value.trim();
  return tempItem;
}
