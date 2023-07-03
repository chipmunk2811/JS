function VaLiVation() {
    this.kiemTraRong = function (value, spanID, mess) {

        if (value === "") {
            getEle(spanID).innerHTML = mess;
            return false;
        } else {
            getEle(spanID).innerHTML = "";
            return true;
        };
    };


    this.kiemTraBaoNhieuKyTu = function (value, spanID, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
            return true;
        };
        getEle(spanID).innerHTML = mess;
        return false;
    };


    this.kiemTraChuoiKyTu = function (value, spanID, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.math(letter)) {
            return true;
        };
        getEle(spanID).innerHTML = mess;
        return false;
    };


    this.kiemTraEmail = function (value, spanID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.math(letter)) {

            return true;
        };
        getEle(spanID).innerHTML = mess;
        return false;
    };


    this.checkKH = function (idSelect, spanID, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            return true;
        };
        getEle(spanID).innerHTML = mess;
        return false;
    };


    this.kiemTraTrungSV = function (value, spanID, mess, data) {
        var exist = false;
        for (var i = 0; i < data.length; i++) {
            var sv = data[i];
            if (sv.maSV === value) {
                exist = true;
                break;
            };
        };

        if (exist) {
            getEle(spanID).innerHTML = mess;
            return false;
        };

        getEle(spanID).innerHTML = "";
        return true;

    };
};

