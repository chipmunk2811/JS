function SinhVien(_maSV, _tenSV, _email, _matKhau, _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa) {
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan*1;
    this.diemLy = _diemLy*1;
    this.diemHoa = _diemHoa*1;
    this.dtb=0;

    this.tinhDTB=function(){
        this.dtb= (parseFloat(this.diemToan)+parseFloat(this.diemLy)+parseFloat(this.diemHoa))/3;
    };
}