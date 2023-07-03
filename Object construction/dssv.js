function DanhSachSV() {
    this.arr = [];

    this.themSV = function (sv) {
        this.arr.push(sv);
    };


    this.tiemViTriSV = function (maSV) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var sv = this.arr[i];
            if (sv.maSV === maSV) {
                index = i;
                break;
            };
        };
        return index;
    };

    this.xoaSV = function (maSV) {
        var index = this.tiemViTriSV(maSV);
        if (index !== -1) {
            this.arr.splice(index, 1);
        };
    };

    this.eDitSV = function (maSV) {
        var index = this.tiemViTriSV(maSV);
        if (index !== -1) {
            return this.arr[index];
        };
    };

    this.capNhatSV = function (sv) {
        var index = this.tiemViTriSV(sv.maSV);
        if (index != -1) {
            this.arr[index] = sv;
        };
    };



    this.searchTenSV = function (keyWord) {
        var arrSearch = [];
        for (var i = 0; i < this.arr.length; i++) {
            var sv = this.arr[i];
            
            // Convert tên sv để người tìm kiếm bật or tắt caplock
            var tenSVLowerCase = sv.tenSV.toLowerCase();
            var keyWordLowerCase=keyWord.toLowerCase();
            if (tenSVLowerCase.indexOf(keyWordLowerCase)!==-1) {
                arrSearch.push(sv);
            };
        };
        return arrSearch;
    };
};