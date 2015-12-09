const initialState = {
  khachhang: {
    "id": {
      name: "id",
      label: "KHID",
      sort: true,
      up: true,
      type: "special",
      disabled: true,
      field: false
    },
    "ten": {
      name: "ten",
      label: "Tên Khách Hàng",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "sdt": {
      name: "sdt",
      label: "Điện Thoại",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "email": {
      name: "email",
      label: "Email",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "diachi": {
      name: "diachi",
      label: "Địa Chỉ",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "sotk": {
      name: "sotk",
      label: "Số TK",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "tennh": {
      name: "tennh",
      label: "Tên Ngân Hàng",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "ngaytao": {
      name: "ngaytao",
      label: "Ngày Tạo",
      sort: true,
      type: "date",
      required: false,
      disabled: true,
      field: false,
      view: true
    },
    "tongtien": {
      name: "tongtien",
      label: "Tổng Giao Dịch",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    },
    "thanhtoan": {
      name: "thanhtoan",
      label: "Đã Thanh Toán",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    },
    "congno": {
      name: "congno",
      label: "Còn Nợ",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    }
  },
  nhacungcap: {
    "id": {
      name: "id",
      label: "NCCID",
      sort: true,
      up: true,
      type: "special"
    },
    "ten": {
      name: "ten",
      label: "Tên Nhà Cung Cấp",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "sdt": {
      name: "sdt",
      label: "Điện Thoại",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "email": {
      name: "email",
      label: "Email",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "diachi": {
      name: "diachi",
      label: "Địa Chỉ",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "sotk": {
      name: "sotk",
      label: "Số TK",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "tennh": {
      name: "tennh",
      label: "Tên Ngân Hàng",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "tongtien": {
      name: "tongtien",
      label: "Tổng Giao Dịch",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    },
    "thanhtoan": {
      name: "thanhtoan",
      label: "Đã Thanh Toán",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    },
    "congno": {
      name: "congno",
      label: "Còn Nợ",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: false,
      unit: ' VND'
    }
  },
  nhanvien: {
    "id": {
      name: "id",
      label: "NVID",
      sort: true,
      up: true,
      type: "single",
      field: false
    },
    "ten": {
      name: "ten",
      label: "Tên Nhân Viên",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "sdt": {
      name: "sdt",
      label: "Điện Thoại",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "email": {
      name: "email",
      label: "Email",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "diachi": {
      name: "diachi",
      label: "Địa Chỉ",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "phongban": {
      name: "phongban",
      label: "Phòng Ban",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "chucvu": {
      name: "chucvu",
      label: "Chức Vụ",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "username": {
      name: "username",
      label: "User Name",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "password": {
      name: "password",
      label: "PassWord",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    }
  },
  phongban: {
    "pbid": {
      name: "id",
      label: "PBID",
      sort: true,
      up: true,
      type: "special",
      field: false
    },
    "ten": {
      name: "ten",
      label: "Tên Phòng Ban",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "nvid": {
      name: "nvid",
      label: "NVID",
      sort: true,
      up: true,
      type: "single",
      field: false
    }
  },
  kho: {
    "id": {
      name: "id",
      label: "KID",
      sort: true,
      up: true,
      type: "special",
      field: false
    },
    "ten": {
      name: "ten",
      label: "Tên Kho",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "diachi": {
      name: "diachi",
      label: "Địa Chỉ",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "succhua": {
      name: "succhua",
      label: "Sức Chứa",
      sort: true,
      type: "number",
      required: true,
      field: true
    },
    "trong": {
      name: "trong",
      label: "Còn Trống",
      sort: true,
      type: "number",
      field: false
    }
  },
  loaivai: {
    "id": {
      name: "id",
      label: "LVID",
      sort: true,
      up: true,
      type: "single",
      field: false
    },
    "ten": {
      name: "ten",
      label: "Tên Loại Vải",
      sort: true,
      type: "single",
      required: true,
      field: true
    },
    "mamau": {
      name: "mamau",
      label: "Mã Màu",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "chatlieu": {
      name: "chatlieu",
      label: "Chất Liệu",
      sort: false,
      type: "single",
      required: false,
      field: true
    },
    "ngaytao": {
      name: "ngaytao",
      label: "Ngày Tạo",
      sort: true,
      type: "date",
      required: false,
      disabled: true,
      field: false,
      view: true
    },
    "giaban": {
      name: "giaban",
      label: "Giá Bán",
      sort: false,
      type: "number",
      required: false,
      field: false
    },
    "giamua": {
      name: "giamua",
      label: "Giá Mua",
      sort: false,
      type: "number",
      required: false,
      field: false
    }
  },
  giaodich: {
    "id": {
      name: "id",
      label: "GDID",
      sort: true,
      up: true,
      type: "single",
      field: false
    },
    "nvid": {
      name: "nvid",
      label: "NVID",
      sort: true,
      up: false,
      type: "single",
      field: false
    },
    "doitacid": {
      name: "doitacid",
      label: "DTID",
      sort: true,
      up: false,
      type: "single",
      field: false
    },
    "hoanthanh":{
      name: "hoanthanh",
      label: "Hoàn Thành",
      sort: true,
      up: false,
      type: "select",
      field: false
    }
  },
  phieudathang:{
    giaodich: {
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false
      },
      "nvid": {
        name: "nvid",
        label: "NVID",
        sort: true,
        up: false,
        type: "special",
        field: false
      },
      "doitacid": {
        name: "doitacid",
        label: "Nha Cung Cap",
        sort: true,
        up: false,
        type: "special",
        field: false
      },
      "tongtien":{
        name: "tongtien",
        label: "Tong tien du tinh",
        type: "special",
        unit: " VND"
      },
      "trangthai":{
        name: "trangthai",
        label: "Trang Thai",
        type: "select",
        options:[{
          value: "chuaxuly",
          label: "Chua Xu Ly"
        },{
          value: "dangxuly",
          label: "Dang Xu Ly"
        },{
          value: "hoanthanh",
          label: "Hoan Thanh"
        },{
          value: "dahuy",
          label: "Da Huy"
        }],
        field: true
      },
      "ngayhoanthanh":{
        name: "ngayhoanthanh",
        label: "Ngay Hoan Thanh",
        type: "date",
      }
    },
    ctdh:{
      "gdid": {
        name: "gdid",
        label: "GDID",
        type: "special",
        field: false,
        view: false
      },
      "loaivaiid": {
        name: "loaivaiid",
        label: "Loai Vai",
        type: "special",
        field: false
      },
      "loaigd": {
        name: "loaigd",
        label: "Loai Giao Dich",
        type: "special",
        field: false,
        view: false
      },
      "soluong": {
        name: "soluong",
        label: "So Luong",
        type: "special",
        field: false
      },
      "gia": {
        name: "gia",
        label: "Gia du tinh",
        type: "number",
        field: false
      }
    }
  }
}


export default function meta(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
