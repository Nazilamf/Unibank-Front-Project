var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


let buttonss = document.querySelectorAll('.tab-link button')

for (let btn of buttonss) {
    btn.onclick = function () {
        let active = document.querySelector('.active');
        active.classList.remove('active')
        this.classList.add('active')

        let data_id = this.getAttribute('data-id');
     
        let contents = document.querySelectorAll('.tab-content div')
        let cont = document.querySelectorAll('.tab-content div div')
   
        

        for(let content of contents){

            if(content.id === data_id) {
                
                content.classList.remove('d-none');
                cont.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
              
                
            }

        }
    }


}

let dots = document.querySelectorAll('.tab-links i');

for (let btn of dots) {
    btn.onclick = function() {
        let active = document.querySelector('.active-dots');
        active.classList.remove('active-dots');
        this.classList.add('active-dots');

        let data_id = this.getAttribute('data-id');
        let contents = document.querySelectorAll('.tab-content div')

        for(let content of contents){

            if(content.id === data_id) {
                
                content.classList.remove('d-none');
               
            }
            else {
                content.classList.add('d-none');
           
                
            }

        }
    }


}

