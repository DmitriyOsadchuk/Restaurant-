var count = 12;
var cnt = 6;
var cnt_page = Math.ceil(count / cnt);

// Display a list of pages
var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < cnt_page; i++) {
    page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
}
paginator.innerHTML = page;

// Show the first records
var div_num = document.querySelectorAll(".gallery-item");
for (var i = 0; i < div_num.length; i++) {
    if (i < cnt) {
        div_num[i].style.display = "block";
    }
}

var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

// Switch page
function pagination(event) {
    var e = event || addEventListener("click", event);
    var target = e.target;
    var id = target.id;

    if (target.tagName.toLowerCase() != "span") return;

    var num_ = id.substr(4);
    var data_page = +target.dataset.page;
    main_page.classList.remove("paginator_active");
    main_page = document.getElementById(id);
    main_page.classList.add("paginator_active");

    var j = 0;
    for (var i = 0; i < div_num.length; i++) {
        var data_num = div_num[i].dataset.num;
        if (data_num <= data_page || data_num >= data_page)
            div_num[i].style.display = "none";

    }
    for (var i = data_page; i < div_num.length; i++) {
        if (j >= cnt) break;
        div_num[i].style.display = "block";
        j++;
    }
}