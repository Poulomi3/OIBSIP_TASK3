const input=document.querySelector('input');
const btn=document.querySelector('.addTask >button');

btn.addEventListener('click',list);
function list(e){
    const pendingTask=document.querySelector('.pendingTask');
    const completeTask=document.querySelector('.completeTask');

    const newLi=document.createElement('li');
    const checkBtn=document.createElement('button');
    const delBtn=document.createElement('button');

checkBtn.innerHTML='<i class="fa fa-check"></i>';
delBtn.innerHTML='<i class="fa fa-trash"></i>';

if(input.value !==''){
    newLi.textContent=input.value;
    input.value='';
    pendingTask.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);

}
checkBtn.addEventListener('click',function(){
    const parent=this.parentNode;
    parent.remove();
    completeTask.appendChild(parent);
    checkBtn.style.display='none';

});
delBtn.addEventListener('click',function(){
    const parent= this.parentNode;
    parent.remove();
    
});


}
