export default function parseError(message){
  let mess =''
  switch (message) {
      case 'not-found':
        mess = 'Username hoặc password không đúng!';
        break;
      case 'bad-request':
        mess = 'Username hoặc password không đúng!';
        break;
      default:
        break;
    }
  return mess;
}
