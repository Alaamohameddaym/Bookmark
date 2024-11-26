var BookName=document.getElementById('one');
var websiteURL=document.getElementById('two');
var addbtn=document.getElementById('addbtn')

var library=[];
addbtn.onclick=add_BookName
if(localStorage.getItem('details')!==null)
{
    library=JSON.parse(localStorage.getItem('details'))
    display()
}else{
     library=[];
}

function add_BookName(){
    if( (nameVlid()&&urlValid())==true){
   BookName.classList.remove('is-valid');
   websiteURL.classList.remove('is-valid');
    var book={
    
    name:BookName.value,
    url:websiteURL.value,
}


library.push(book)
localStorage.setItem('details',JSON.stringify(library));
display();
rest()

    }


}

function display(){
    var cartona=``;
    for (var i=0;i<library.length;i++)
    { 
        cartona+=` <tr>
        <td>${i+1}</td>
        <td>${library[i].name}</td>
        <td><button class="btne visit byby mx-auto"> <a href='${library[i].url}' target='_blank' class=" text-light  text-decoration-none"><i class="fa-solid fa-eye pe-2"></i> Visit</a></button></td>
        <td><button  onclick='delet_details(${i})' class="btne bzbz delete mx-auto"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>`
    }
    document.getElementById('contant').innerHTML=cartona;
}


function rest(){
    BookName.value=null;
    websiteURL.value=null;
}

function delet_details(index){

    library.splice(index,1)
    display()
    localStorage.setItem('details',JSON.stringify(library));

}


function nameVlid(){
    const regex=/^[a-zA-Z0-9_]{3,}$/
    if(regex.test(BookName.value))
    {
        BookName.classList.remove('is-invalid')
        BookName.classList.add('is-valid')
        return true;
    }
    else{
        BookName.classList.add('is-invalid')
        return false;
    }
}

function urlValid(){
    const regex=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])\/?$/;
    if(regex.test(websiteURL.value)){
        
            websiteURL.classList.remove('is-invalid')
            websiteURL.classList.add('is-valid')
            return true;
        }
        else{
            websiteURL.classList.add('is-invalid')
            return false;
        }
}