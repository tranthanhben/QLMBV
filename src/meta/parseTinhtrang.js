export default function parseTinhTrang(tinhtrang){
  switch (tinhtrang){
    case "chuaxuly":
      return "Chưa Xử Lý";
    case "dangxuly":
      return "Đang xử lý";
    case "hoanthanh":
      return "Hoàn Thành";
    case "huy":
      return "Hủy";
    default:
      return "Chưa Cập Nhật";
  }
}
