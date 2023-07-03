
/**Tạo Đối Tượng DSSV */
var dssv = new DanhSachSV();
var validation = new VaLiVation();

getLocalStorage();

function getEle(ID) {
    return document.getElementById(ID);
};

function layThongTinSV(isAdd) {
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var email = getEle("txtEmail").value;
    var matKhau = getEle("txtPass").value;
    var ngaySinh = getEle("txtNgaySinh").value;
    var khoaHoc = getEle("khSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemLy = getEle("txtDiemLy").value;
    var diemHoa = getEle("txtDiemHoa").value;

    /**Check Validation */
    // Flag(Cờ)
    var isValid = true;

    if (isAdd) {
        isValid &= validation.kiemTraBaoNhieuKyTu(maSV, "spanMaSV", "(*) Vui lòng nhập Mã Sinh Viên Từ 1-3 ký số", 1, 3)
            && validation.kiemTraTrungSV(maSV, "spanMaSV", "(*) Vui lòng nhập Mã Sinh Viên bị trùng", dssv.arr)
            && validation.kiemTraBaoNhieuKyTu(maSV, "spanMaSV", "abc", 1, 3);
    };
    isValid &= validation.kiemTraRong(tenSV, "spanTenSV", "(*) Vui lòng nhập đúng Tên Sinh Viên");
    isValid &= validation.kiemTraRong(email, "spanEmailSV", "(*) Vui lòng nhập đúng Email Sinh Viên");
    isValid &= validation.kiemTraRong(matKhau, "spanMatKhau", "(*) Vui lòng nhập đúng Password Sinh Viên");
    isValid &= validation.kiemTraRong(ngaySinh, "spanNgaySinh", "(*) Vui lòng nhập đúng Ngày Sinh Sinh Viên");
    isValid &= validation.kiemTraRong(diemToan, "spanToan", "(*) Vui lòng nhập đúng Điểm Toán Sinh Viên");
    isValid &= validation.kiemTraRong(diemLy, "spanLy", "(*) Vui lòng nhập đúng Điểm Lý Sinh Viên");
    isValid &= validation.kiemTraRong(diemHoa, "spanHoa", "(*) Vui lòng nhập đúng Điểm Hóa Sinh Viên");

    if (!isValid) return;
    /**Tạo Object: Lớp đối tượng */
    var sv = new SinhVien(
        maSV,
        tenSV,
        email,
        matKhau,
        ngaySinh,
        khoaHoc,
        diemToan,
        diemLy,
        diemHoa,
    );
    sv.tinhDTB();
    return sv;
};

function btnAdd() {
    var sv = layThongTinSV(true);
    if (sv) {
        dssv.themSV(sv);
        renderTable(dssv.arr);
        setLocalStorage();
    };
};

function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var sv = data[i];
        // content+="<tr>";
        // content+="<td>"+sv.maSV+"</td>";
        // content+="<td>"+sv.tenSV+"</td>";
        // content+="<td>"+sv.email+"</td>";
        // content+="<td>"+sv.ngaySinh+"</td>";
        // content+="<td>"+sv.khoaHoc+"</td>";
        // content+="<td>"+sv.dtb+"</td>";
        // content+="</tr>";
        content += `<tr>
            <td>${sv.maSV}</td>
            <td>${sv.tenSV}</td>
            <td>${sv.email}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.dtb}</td>
            <td><button class="btn btn-info" onclick="eDit('${sv.maSV}')">Edit</button></td>
            <td><button class="btn btn-danger" onclick="deLeTe('${sv.maSV}')">Delete</button></td>
            
        </tr>`;
    };
    getEle("tbodySinhVien").innerHTML = content;
};


function setLocalStorage() {
    /**Convert JSON =>String */
    var dataString = JSON.stringify(dssv.arr);
    return localStorage.setItem("DSSV", dataString);
};

function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        var dataString = localStorage.getItem("DSSV");
        /**Convert string =>JSON */
        dssv.arr = JSON.parse(dataString);
        renderTable(dssv.arr);
    };
};

function xoather() {
    getEle("tbodySinhVien").innerHTML = "";
    return localStorage.setItem("DSSV", "");
};

function deLeTe(maSV) {
    dssv.xoaSV(maSV);
    renderTable(dssv.arr);
    setLocalStorage();
};

function eDit(maSV) {
    var sv = dssv.eDitSV(maSV);
    if (sv) {
        getEle("txtMaSV").value = sv.maSV;
        getEle("txtMaSV").disabled = true;

        getEle("txtTenSV").value = sv.tenSV;
        getEle("txtEmail").value = sv.email;
        getEle("txtPass").value = sv.matKhau;
        getEle("txtNgaySinh").value = sv.ngaySinh;
        getEle("khSV").value = sv.khoaHoc;
        getEle("txtDiemToan").value = sv.diemToan;
        getEle("txtDiemLy").value = sv.diemLy;
        getEle("txtDiemHoa").value = sv.diemHoa;

        getEle("upDataSV").style.display = "inline-block";
    };
};

getEle("upDataSV").onclick = function () {
    var sv = layThongTinSV(false);
    dssv.capNhatSV(sv);
    renderTable(dssv.arr);
    setLocalStorage();
    getEle("upDataSV").style.display = "none";
};

// Tìm kiếm
getEle("txtSearch").addEventListener("keyup", function () {
    var keyWord = getEle("txtSearch").value;
    var arrSearch = dssv.searchTenSV(keyWord);
    renderTable(arrSearch);
});





