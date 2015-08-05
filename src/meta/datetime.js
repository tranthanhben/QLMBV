/**
  new Date(input)=> mm/dd/yyyy
**/
export default function datetime(n) {
  var d = new Date(n);
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString();
}
