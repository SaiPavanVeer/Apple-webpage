const btn = document.querySelector('.show-filters');
const div =document.querySelector('.filters-list');

btn.addEventListener('click',() =>{
    if(div.style.display === 'none'){
        div.style.display = 'block';
        btn.innerText ='Hide Filters';
    }else{
        div.style.display = 'none';
        btn.innerText = 'Show Filters';
    }
});