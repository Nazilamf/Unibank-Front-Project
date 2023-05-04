let cards = JSON.parse(localStorage.getItem('cardslist'))

if (cards.length > 0) {
    document.querySelector('.alert').classList.add('d-none');
}
else {
    document.querySelector('.alert').classList.remove('d-none');
}

function GetCards() {
    let cards = JSON.parse(localStorage.getItem('cardslist'))

    let x = '';
    let total =0;
    cards.forEach(item => {
        x += `
        <div class="col-lg-3">
        <div id="${item.Id}" class="card ">
            <img src="${item.Image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.Name}</h5>
                <span class="price">Price:${item.Price}</span><span>AZN</span>

                <button class=" ms-5 btn btn-warning" onclick="Del(this)">Delete</button>
                <div>
                   <button onclick="Minus(this)" class= "border-0"><i class="minus fa-solid fa-minus bg-warning rounded-5 p-1 mb-2"></i> </button>
                     <p>Count:${item.Count}</p>
                    <button onclick="Plus(this)" class= "border-0"><i class="plus fa-solid fa-plus bg-warning rounded-5 p-1 mb-2"></i> </button>
                </div>
            </div>
        </div>
    </div>`


        total+= (item.Price*item.Count);
   
    });
    document.querySelector('#cnt').innerHTML = cards.length;
    document.querySelector('#sum').innerHTML += total;
    

    document.querySelector('.rowlist').innerHTML = x;


}

GetCards();



 function Del(x){
    let cards = JSON.parse(localStorage.getItem('cardslist'));
    let min = x.parentElement.parentElement.id;
    
    let existCard = cards.find(item =>item.Id === min);
    let ubasket = cards.filter(function(obj){ 
        return obj.Id != existCard.Id;
    });
    localStorage.setItem('cardslist',JSON.stringify(ubasket));
    location.reload();
    
   
    GetCards();
}




function Minus(x){
    let cards = JSON.parse(localStorage.getItem('cardslist'));
    let min = x.parentElement.parentElement.parentElement.id;
    
        
    if(cards.length>1){
        let existCard = cards.find(item => item.Id === min);
        if(Number(existCard.Count)>1){
            existCard.Count -=1;
            localStorage.setItem('cardslist',JSON.stringify(cards));
            location.reload();
            GetItems()
            
            
           
        }else{
        let cards = cards.filter(function(obj){ 
            return obj.Id != existCard.Id; 
        });
        localStorage.setItem('cardslist',JSON.stringify(cards));
       
            
    }
    }else{
        let existCard = cards.find(item => item.Id === min);
    if(Number(existCard.Count)>1){
      existCard.Count -=1;
        localStorage.setItem('cardslist',JSON.stringify(cards));
    }else{
        localStorage.removeItem('cardslist')
        location.reload();
        GetItems()
        
    }
    }
    GetItems()
}


function Plus(x){
    let cards = JSON.parse(localStorage.getItem('cardslist'));
    let iid = x.parentElement.parentElement.parentElement.id;
   
    let existCard = cards.find(item => item.Id === iid);
    existCard.Count += 1
    
    localStorage.setItem('cardslist',JSON.stringify(cards));
    location.reload();
    GetItems()
}
