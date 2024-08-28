const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const title = item.querySelector(".faq-title");
    const content = item.querySelector(".faq-content");

    title.addEventListener('click',() => {
        for(var i = 0; i < faqItems.length; i++){
            if(faqItems[i] != item){
                faqItems[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
        

        
        
    });
});