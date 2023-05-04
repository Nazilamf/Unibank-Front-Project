
let buttonss = document.querySelectorAll('.exchange-mobile .tab-link button')

for (let btn of buttonss) {
    btn.onclick = function () {
        let active = document.querySelector('.active');
        active.classList.remove('active')
        this.classList.add('active')

        let data_id = this.getAttribute('data-id');
     
        let content_s = document.querySelectorAll('.mobile-content div')
      
   
        

        for(let content_ of content_s){

            if(content_.id === data_id) {
                
                content_.classList.remove('d-none');
              
            }
            else {
                content_.classList.add('d-none');
              
                
            }

        }
    }


}

