const { hash }= window.location;
 const message=atob(hash.replace('#','' ));
 if(message){
    
    document.querySelector('#enter-form').classList.add('hide');
    document.querySelector('#enter-show').classList.remove('hide');
    document.querySelector('h1').innerHTML=message
 }



document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault();
    document.querySelector('#enter-form').classList.add('hide');
    document.querySelector('#share-form').classList.remove('hide')
    const input=document.querySelector('#enter');
    const encrypted=btoa(input.value);
  const  shareinput= document.querySelector('#share');
  shareinput.value=`${window.location}#${encrypted}`;
  shareinput.select();

});