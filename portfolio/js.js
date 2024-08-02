
var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tablcontent.classList.remove("active-tab");
    }
}