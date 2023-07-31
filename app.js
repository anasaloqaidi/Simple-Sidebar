const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const listitemactive = document.querySelector(".list-item.active");


dark.addEventListener("click",()=>{
    sidebar.className="sidebar";
    listitemactive.className="list-item active";
});

night.addEventListener("click",()=>{
    sidebar.className="sidebar night";
    listitemactive.className="list-item active night";
});


light.addEventListener("click",()=>{
    sidebar.className="sidebar light";
    listitemactive.className="list-item active light";
});

