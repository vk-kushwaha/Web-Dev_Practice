

let imgElement = document.querySelector('img');

let arr =  [
    'https://images.unsplash.com/photo-1695653421421-28f3816b424a?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' ,
    'https://images.unsplash.com/photo-1697799759368-2853eed5af65?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8' ,
    'https://images.unsplash.com/photo-1695653420013-47c8e156e0af?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' ,
    'https://plus.unsplash.com/premium_photo-1696863126826-4ca2b011b2a7?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697895648538-0117b2383a03?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
]

let num = 0;

 let stopId = setInterval(function(){

    imgElement.setAttribute('src' , arr[num]);

    num = (num+1)% arr.length;
    
}, 3000);


    

setTimeout(() => {
    clearInterval(stopId) ;
}, 30000 );