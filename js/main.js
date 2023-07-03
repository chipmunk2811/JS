var infoStudent = {
maSV:"",
tenSV:"",
loaiSV:"",
diemToan:0,
diemVan:0,
diemTB: function(){
    return (this.diemToan+this.diemVan)/2;
},
xepLoai: function(){
    var ranK=this.diemTB();
    if (ranK>=5&&ranK<=7.5) {
        return "Trung Bình";
    } else if (ranK>7.5&&ranK<=8.5) {
        return "Khá";
    } else if (ranK>8.5) {
        return "Giỏi";
    } else if (ranK<5&&ranK>=3.5) {
        return "Yếu";
    } else{return "Kém"}
},
};

function getEle(id){
    return document.getElementById(id);
};

function layThongTinSV() {
    infoStudent.maSV= getEle("txtMaSV").value;
    infoStudent.tenSV=getEle("txtTenSV").value;
    infoStudent.loaiSV=getEle("loaiSV").value;
    infoStudent.diemToan=getEle("txtDiemToan").value*1;
    infoStudent.diemVan=getEle("txtDiemVan").value*1;

    if (infoStudent.diemToan<0||infoStudent.diemToan>10) {
        alert("Vui lòng nhập dữ liệu đúng");
    } else if (infoStudent.diemVan<0||infoStudent.diemVan>10) {
        alert("Vui lòng nhập dữ liệu đúng");
    };

    getEle("spanTenSV").innerHTML=infoStudent.tenSV;
    getEle("spanMaSV").innerHTML=infoStudent.maSV;
    getEle("spanLoaiSV").innerHTML=infoStudent.loaiSV;
    getEle("spanDTB").innerHTML=infoStudent.diemTB();
    getEle("spanXepLoai").innerHTML=infoStudent.xepLoai();
};




