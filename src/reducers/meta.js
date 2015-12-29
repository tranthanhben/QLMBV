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
    "phongbanif": {
      name: "phongbanif",
      label: "Phòng Ban",
      sort: false,
      type: "special",
      required: false,
      field: false,
      view: false
    },
    "chucvu": {
      name: "chucvu",
      label: "Chức Vụ",
      sort: false,
      type: "single",
      required: false,
      field: true
    }
  },
  user: {
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
      label: "Tên Hiển Thị",
      sort: true,
      type: "single",
      required: false,
      field: true
    },
    "avatar": {
      name: "avatar",
      label: "Avatar",
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
      unit: ' Chỗ',
      field: true
    },
    "trong": {
      name: "trong",
      label: "Còn Trống",
      sort: true,
      type: "number",
      unit: ' Chỗ',
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
      field: true,
      view: false
    },
    "mausac": {
      name: "mausac",
      label: "Màu Sắc",
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
      view: false
    },
    "giaban": {
      name: "giaban",
      label: "Giá Bán",
      sort: false,
      type: "gia",
      unit: " VND",
      required: false,
      disabled: true,
      field: false
    },
    "giamua": {
      name: "giamua",
      label: "Giá Mua",
      sort: false,
      type: "gia",
      unit: " VND",
      disabled: true,
      required: false,
      field: false
    },
    "tongnhap": {
      name: "tongnhap",
      label: "Đã Nhập",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: true,
      unit: ' Cây'
    },
    "tongxuat": {
      name: "tongxuat",
      label: "Đã Xuất",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: true,
      unit: ' Cây'
    },
    "conlai": {
      name: "conlai",
      label: "Còn",
      sort: false,
      type: "number",
      required: false,
      disabled: true,
      field: false,
      view: true,
      unit: ' Cây'
    },
  },
  phieudathang:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "nvdh": {
        name: "nhdh",
        label: "NV DH",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "NCCID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "ncc": {
        name: "ncc",
        label: "Nhà Cung Cấp",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        unit: ' VND',
        unitTable: '(vnd)',
        view: true
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        unit: ' VND',
        unitTable: '(vnd)',
        view: false
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Đặt",
        sort: false,
        required: true,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: true,
        view: true
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Nhập",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "ngaydat": {
        name: "ngaydat",
        label: "Ngày Đặt",
        sort: true,
        type: "date",
        required: true,
        field: true,
        view: true
      }
    },
    ctdh: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      soluong: {
        name: "soluong",
        label: "Số lượng",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unitTable: "(met)",
        unit: "met"
      },
      gia: {
        name: "gia",
        label: "Giá Dự Tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unitTable: "(vnd)",
        unit: " VND"
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unitTable: "(vnd)",
        unit: " VND"
      }
    }
  },
  phieunhaphang:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "nvnh": {
        name: "nvnh",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "NCCID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "ncc": {
        name: "ncc",
        label: "Nhà Cung Cấp",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: false,
        unitTable: "(vnd)",
        unit: ' VND'
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unitTable: "(vnd)",
        unit: ' VND'
      },
      "kho": {
        name: "kho",
        label: "So met nhap",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unitTable: '(met)',
        unit: ' met',
      },
      "donhang": {
        name: "donhang",
        label: "So cay nhap",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' Cay',
        unitTable: '(cay)'
      },
      "ngayhoanthanh": {
        name: "ngayhoanthanh",
        label: "Ngày Hoan Thanh",
        sort: true,
        type: "date",
        field: true,
        view: false
      },
      "ngaydat": {
        name: "ngaydat",
        label: "Ngày Đặt",
        sort: true,
        type: "date",
        required: true,
        field: false,
        view: false
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Đặt Hàng",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Nhập",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: true,
        view: true
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      }
    },
    ctk: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      khoid: {
        name: "khoid",
        label: "Kho Còn Trống",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      controng: {
        name: "controng",
        label: "Còn Trống",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      soluong: {
        name: "soluong",
        label: "Số lượng",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view:false
      },
      chieudai: {
        name: "chieudai",
        label: "Chieu dai",
        sort: false,
        up: false,
        type: "number",
        unit: ' met',
        unitTable: '(met)',
        field: true,
        view: true
      },
      gia: {
        name: "gia",
        label: "Giá",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view:true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      ngaynhap: {
        name: "ngaynhap",
        label: "Ngày Nhap",
        sort: true,
        type: "date",
        field: true,
        view: true
      }
    },
    ctdh: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      soluong: {
        name: "soluong",
        label: "Số lượng",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' met',
        unitTable: '(met)'
      },
      gia: {
        name: "gia",
        label: "Giá Dự Tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND/met',
        unitTable: '(vnd/met)'
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    }
  },
  phieumuahang:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "nvdh": {
        name: "nvdh",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "KHID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "kh": {
        name: "kh",
        label: "Khách Hàng",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: false,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Mua",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: true,
        required: true,
        view: true
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Xuất",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "ngaydat": {
        name: "ngaydat",
        label: "Ngày Đặt",
        sort: true,
        type: "date",
        required: true,
        field: true,
        view: true
      }
    },
    ctdh: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      slc: {
        name: "slc",
        label: "SL Còn",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' met',
        unitTable: '(met)'
      },
      soluong: {
        name: "soluong",
        label: "SL mua",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' met',
        unitTable: '(met)'
      },
      gia: {
        name: "gia",
        label: "Giá Bán(dt)",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND/met',
        unitTable: '(vnd/met)'
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    }
  },
  phieuxuathang:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "nvnh": {
        name: "nvnh",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "KHID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "kh": {
        name: "kh",
        label: "Khách Hàng",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: false,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Mua",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Xuất",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: true,
        required: true,
        view: true
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      }
    },
    ctk: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      slc: {
        name: "slc",
        label: "SL Còn",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' met',
        unitTable: '(met)'
      },
      khoid: {
        name: "khoid",
        label: "Kho Còn Hàng",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      htk: {
        name: "htk",
        label: "Còn TK",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true,
        unit: " Cây"
      },
      soluong: {
        name: "soluong",
        label: "Số lượng Xuất",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view:true,
        unit: ' cay',
        unitTable: '(cay)'
      },
      gia: {
        name: "gia",
        label: "Giá Bán",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view:true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    },
    ctdh: {
      loaivaiid: {
        name: "loaivaiid",
        label: "Loại Vải",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view: true
      },
      slc: {
        name: "slc",
        label: "SL Còn",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true
      },
      soluong: {
        name: "soluong",
        label: "Số lượng mua",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' cay',
        unitTable: '(cay)'
      },
      gia: {
        name: "gia",
        label: "Giá Bán(dt)",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND/met',
        unitTable: '(vnd/met)'
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    }
  },
  congno:{
    khachhang: {
      "id": {
        name: "id",
        label: "ID",
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
        field: true,
        view: false
      },
      "email": {
        name: "email",
        label: "Email",
        sort: false,
        type: "single",
        required: false,
        field: true,
        view: false
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
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "thanhtoan": {
        name: "thanhtoan",
        label: "Đã Thanh Toán",
        sort: false,
        type: "number",
        required: false,
        disabled: true,
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "congno": {
        name: "congno",
        label: "Còn Nợ",
        sort: false,
        type: "number",
        required: false,
        disabled: true,
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    },
    nhacungcap: {
      "id": {
        name: "id",
        label: "ID",
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
        field: true,
        view: false
      },
      "email": {
        name: "email",
        label: "Email",
        sort: false,
        type: "single",
        required: false,
        field: true,
        view: false
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
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "thanhtoan": {
        name: "thanhtoan",
        label: "Đã Thanh Toán",
        sort: false,
        type: "number",
        required: false,
        disabled: true,
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "congno": {
        name: "congno",
        label: "Còn Nợ",
        sort: false,
        type: "number",
        required: false,
        disabled: true,
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      }
    }
  },
  thanhtoanNCC:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "nvtt": {
        name: "nvtt",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "NCCID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "ncc": {
        name: "ncc",
        label: "Nhà Cung Cấp",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: false,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền hóa đơn",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "thanhtoan": {
        name: "thanhtoan",
        label: "Tổng tiền Thanh Toán",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Mua",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Xuất",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        required: true,
        field: true,
        view: true
      }
    },
    cttt:{
      thanhtoan: {
        name: "thanhtoan",
        label: "ST Thanh Toán",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      phuongthuc: {
        name: "phuongthuc",
        label: "Phương Thức Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options:[{
          value: "tienmat",
          label: "Tiền Mặt"
        },{
          value: "chuyenkhoan",
          label: "Chuyển Khoản"
        }],
        field: true,
        view: true
      },
      ngaythanhtoan:{
        name: 'ngaythanhtoan',
        label: 'Ngày Thanh Toán',
        type: 'date',
        field: true,
        view: true
      }
    }
  },
  thanhtoanKH:{
    giaodich:{
      "id": {
        name: "id",
        label: "GDID",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "nvtt": {
        name: "nvtt",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: false
      },
      "doitacid": {
        name: "doitacid",
        label: "KHID",
        sort: true,
        up: true,
        type: "single",
        required: true,
        field: false,
        view: true
      },
      "kh": {
        name: "kh",
        label: "Khách Hàng",
        sort: false,
        up: false,
        type: "single",
        field: false,
        view: true
      },
      "tongtiendutinh": {
        name: "tongtiendutinh",
        label: "Tổng tiền dự tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: false,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền hóa đơn",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "thanhtoan": {
        name: "thanhtoan",
        label: "Tổng tiền Thanh Toán",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng Mua",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng Xuất",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        field: false,
        view: false
      },
      "tinhtrangthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options: [{
          value: "chuaxuly",
          label: "Chưa Xử Lý"
        },{
          value: "dangxuly",
          label: "Đang xử lý"
        },{
          value: "hoanthanh",
          label: "Hoàn Thành"
        },{
          value: "huy",
          label: "Hủy"
        }],
        required: true,
        field: true,
        view: true
      }
    },
    cttt:{
      thanhtoan: {
        name: "thanhtoan",
        label: "ST Thanh Toán",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true,
        unit: ' VND',
        unitTable: '(vnd)'
      },
      phuongthuc: {
        name: "phuongthuc",
        label: "Phương Thức Thanh Toán",
        sort: false,
        up: false,
        type: "select",
        options:[{
          value: "tienmat",
          label: "Tiền Mặt"
        },{
          value: "chuyenkhoan",
          label: "Chuyển Khoản"
        }],
        field: true,
        view: true
      },
      ngaythanhtoan:{
        name: 'ngaythanhtoan',
        label: 'Ngày Thanh Toán',
        type: 'date',
        field: true,
        view: true
      }
    }
  }
}


export default function meta(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
