let st="";
let button=document.querySelectorAll('.btn');
Array.from(button).forEach((item)=>{
  item.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
    {
      st=eval(st);
      document.querySelector('input').value=st;
    }
    else if(e.target.innerHTML=='CLR')
    {
      st="";
      document.querySelector('input').value=st;
    }
    else{
    
    console.log(e.target)
    st=st+e.target.innerHTML;
    document.querySelector('input').value=st;
    }
  })
})