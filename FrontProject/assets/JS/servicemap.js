let buttons = document.querySelectorAll('.tab-links button')

for (let btn of buttons) {
    btn.onclick = function () {
        let active = document.querySelector('.active');
        active.classList.remove('active')
        this.classList.add('active')

        let data_id = this.getAttribute('data-id');
     
        let contents = document.querySelectorAll('.tab-content div')
        let content2 = document.querySelectorAll('.tab-content div div')
   
        

        for(let content of contents){

            if(content.id === data_id) {
                
                content.classList.remove('d-none');
                content2.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
              
                
            }

        }
    }


}

