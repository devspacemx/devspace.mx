window.addEventListener("resize", adjustListBorder);

let listRemoveWidth = window.matchMedia("(max-width: 1070px)");
let listAddWidth = window.matchMedia("(min-width: 1070px)");

function adjustListBorder(){
    if (listRemoveWidth.matches) {
        document.getElementById("articles-list").classList.remove("author-alc");
    }
    else if (listAddWidth.matches) {
        document.getElementById("articles-list").classList.add("author-alc");
    }
}