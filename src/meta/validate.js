export function validateEmail(email){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat)){
    return "";
  }else{
    // email.focus();
    return "Email không đúng định dạng, vui lòng nhập lại!";
  }
}
