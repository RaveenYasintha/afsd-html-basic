console.log("User");


let Detail = [];

const onWindowLoad =() =>{
    let data=""
    for(let i = 0; i < Detail.length; i++){
        data += `<div class="card p-2 m-2" style="width: 18rem;">
        <h6 class="card-subtitle m-1 text-body-secondary">First Name : ${Detail[i].F_Name}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Last Name : ${Detail[i].L_Name}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Age : ${Detail[i].Age}</h6>
        <h6 class="card-subtitle m-1 text-body-secondary">Address : ${Detail[i].Addre}</h6>
        <button id="btn-${i}" onclick="deleteUser(${i})"type="button" class="btn btn-danger"> Delete </button>
    </div>`

   
    }
   document.getElementById('Display').innerHTML = data;

}

function deleteUser(val){
    Detail.splice(val,1);
    onWindowLoad();
   }

//  function deleteUser(val){
//      console.log(val);
//  }



const clear = () => {
    document.getElementById('1').value =''
    document.getElementById('2').value =''
    document.getElementById('3').value =''
    document.getElementById('4').value =''
}

function save() {
    const fn = document.getElementById("1").value;
    const ln = document.getElementById("2").value;
    const ag = document.getElementById("3").value;
    const ad = document.getElementById("4").value;

    if(fn !== '' && ln !== '' && ag !== '' && ad !== ''){
        Detail.push({
            F_Name : fn,
            L_Name : ln,
            Age : ag,
            Addre : ad
    
        });

        
    clear();

    onWindowLoad();
   
    }else{
        alert('Please Fill Text...!')
    }

   
    
}




