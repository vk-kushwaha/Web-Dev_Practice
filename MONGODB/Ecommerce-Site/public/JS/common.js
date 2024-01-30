let allLikeButton= document.querySelectorAll('.like-btn')

async function likeButton(productId,btn){
    // console.log('like button clicked');
    try {
        let response = await axios({
            method: 'post',
            url: `/product/${productId}/like`,
            headers:{'X-Requested-With':"XMLHttpRequest"}
        })
        console.log(response);
        if(btn.children[0].classList.contains('fa-regular')){
            // console.log("bina rang")
            btn.children[0].classList.remove('fa-regular')
            btn.children[0].classList.add('fa-solid')
        }else{
            // console.log("rang ke saath")
            btn.children[0].classList.remove('fa-solid')
            btn.children[0].classList.add('fa-regular')
        }
    }    
    catch (e) {
        window.location.replace('/login')
        console.log(e.message, 'error from common .js file');

    }

}

for (const btn of allLikeButton) {
    btn.addEventListener('click',()=> {
        let productId = btn.getAttribute('product-id')
        likeButton(productId , btn);
    });

    
}

















