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
    }
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
      "nhanvienid": {
        name: "nhanvienid",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "doitacid": {
        name: "doitacid",
        label: "Nhà Cung Cấp",
        sort: true,
        up: true,
        type: "single",
        required: true,
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
        view: false
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng",
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
      "tinhtrangnhaphang": {
        name: "tinhtrangnhaphang",
        label: "Tình Trạng",
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
      "tinhtranthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng",
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
        view: true
      },
      gia: {
        name: "gia",
        label: "Giá Dự Tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true
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
        field: false,
        view: true
      },
      "nhanvienid": {
        name: "nhanvienid",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "doitacid": {
        name: "doitacid",
        label: "Nhà Cung Cấp",
        sort: true,
        up: true,
        type: "single",
        required: true,
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
        view: false
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng",
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
      "tinhtrangnhaphang": {
        name: "tinhtrangnhaphang",
        label: "Tình Trạng",
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
      "tinhtranthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng",
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
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      khoid: {
        name: "khoid",
        label: "Kho",
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
        view:true
      },
      gia: {
        name: "gia",
        label: "Giá",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view:true
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
        view: true
      },
      gia: {
        name: "gia",
        label: "Giá Dự Tính",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true
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
      "nhanvienid": {
        name: "nhanvienid",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "doitacid": {
        name: "doitacid",
        label: "Khách Hàng",
        sort: true,
        up: true,
        type: "single",
        required: true,
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
        view: false
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng",
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
      "tinhtrangkho": {
        name: "tinhtrangkho",
        label: "Tình Trạng",
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
      "tinhtranthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng",
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
        view: true
      },
      gia: {
        name: "gia",
        label: "Giá Bán(dt)",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true
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
      "nhanvienid": {
        name: "nhanvienid",
        label: "Nhân Viên",
        sort: true,
        up: true,
        type: "single",
        field: false,
        view: true
      },
      "doitacid": {
        name: "doitacid",
        label: "Khách Hàng",
        sort: true,
        up: true,
        type: "single",
        required: true,
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
        view: false
      },
      "tongtien": {
        name: "tongtien",
        label: "Tổng tiền",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      "tinhtrangdonhang": {
        name: "tinhtrangdonhang",
        label: "Tình Trạng",
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
        label: "Tình Trạng",
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
      "tinhtranthanhtoan": {
        name: "tinhtrangthanhtoan",
        label: "Tình Trạng",
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
      mausac: {
        name: "mausac",
        label: "Màu Sắc",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      chatlieu: {
        name: "chatlieu",
        label: "Chất Liệu",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      khoid: {
        name: "khoid",
        label: "Kho",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true
      },
      htk: {
        name: "htk",
        label: "Còn",
        sort: false,
        up: false,
        type: "special",
        field: false,
        view:true,
        unit: " Cây"
      },
      soluong: {
        name: "soluong",
        label: "Số lượng",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view:true
      },
      giatk: {
        name: "giatk",
        label: "Giá Mua(tk)",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view: true
      },
      gia: {
        name: "gia",
        label: "Giá Bán",
        sort: false,
        up: false,
        type: "number",
        field: true,
        view: true
      },
      thanhtien: {
        name: "thanhtien",
        label: "Thành Tiền",
        sort: false,
        up: false,
        type: "number",
        field: false,
        view:true
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
      view: true,
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
      view: true,
      unit: ' VND'
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
      view: true,
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
      view: true,
      unit: ' VND'
    }
  }
  }
}


export default function meta(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
