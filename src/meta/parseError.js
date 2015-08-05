export default function parseError(message){
  let mess =''
  switch (message) {
      case 'not-found':
        mess = 'Email hoặc password không đúng!';
        break;
      case 'bad-request':
        mess = 'Email hoặc password không đúng!';
        break;
      default:
        break;
    }
  return mess;
}
