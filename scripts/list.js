const wrapper = document.querySelectorAll('.list-btn');
const list_view = document.getElementById('list-view');
const map_view = document.getElementById('map-view');

console.log(wrapper);

wrapper.forEach(x =>{
    x.addEventListener('click', (event) => {
        if(event.target.id === "list-btn2"){
           x.classList.toggle('btn');
           x.classList.toggle('btn-primary');
           wrapper[0].classList.toggle('btn');
           wrapper[0].classList.toggle('btn-primary');
           map_view.style.display = "block";
           list_view.style.display = "none";
        }else {
            x.classList.toggle('btn');
            x.classList.toggle('btn-primary');
            wrapper[1].classList.toggle('btn');
            wrapper[1].classList.toggle('btn-primary');
            map_view.style.display = "none";
            list_view.style.display = "flex";
        }
      }) ;
});