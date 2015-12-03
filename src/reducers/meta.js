const initialState = {
  khachhang: {
    "khid": {
      name: "id",
      label: "KHID",
      sort: true,
      up: true,
      type: "special",
      field: false
    },
    "tenkh": {
      name: "tenkh",
      label: "Khách Hàng",
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
      field: true
    },
    "sotknh": {
      name: "sotknh",
      label: "Số TK",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "tennh": {
      name: "tennh",
      label: "Ngân Hàng",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    }
  },
  nhacungcap: {
    "nccid": {
      name: "id",
      label: "NCCID",
      sort: true,
      up: true,
      type: "special"
    },
    "tenncc": {
      name: "tenncc",
      label: "Nhà Cung Cấp",
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
      field: true
    },
    "sotknh": {
      name: "sotknh",
      label: "Số TK",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    },
    "tennh": {
      name: "tennh",
      label: "Ngân Hàng",
      sort: false,
      type: "single",
      required: false,
      field: true,
      view: false
    }
  },
  nhanvien: {
    "nvid": {
      name: "id",
      label: "NVID",
      sort: true,
      up: true,
      type: "single",
      field: false
    },
    "tennv": {
      name: "tennv",
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
      type: "",
      required: false,
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
    "phongban": {
      name: "phongban",
      label: "Phòng Ban",
      sort: false,
      type: "single",
      required: false,
      field: true
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
    "tenpb": {
      name: "tenpb",
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
    "kid": {
      name: "id",
      label: "KID",
      sort: true,
      up: true,
      type: "special",
      field: false
    },
    "tenk": {
      name: "tenk",
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
    "controng": {
      name: "controng",
      label: "Còn Trống",
      sort: true,
      type: "number",
      field: false
    }
  },
  loaivai: {
    "lvid": {
      name: "id",
      label: "LVID",
      sort: true,
      up: true,
      type: "single",
      field: false
    },
    "tenlv": {
      name: "tenlv",
      label: "Loại Vải",
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
    "gdid": {
      name: "id",
      label: "gdid",
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
    "dtid": {
      name: "dtid",
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
  }
}


export default function meta(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
