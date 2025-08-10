const image = [
    {
        link:"https://images.unsplash.com/photo-1501261942928-5f1a1aec5fda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        text:"Beees"
    },
    {
        link:"https://images.unsplash.com/photo-1652874241901-a9c1060e3222?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"ARS"
    },
    { 
        link: "https://images.unsplash.com/photo-1512614521719-2806f69d406b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Lion"
    }
]
let currentIndex = 0;

function change(direction){
    
    if(direction == "left"){
        currentIndex = (currentIndex - 1 + image.length) % image.length;
    }else{
        currentIndex = (currentIndex + 1) % image.length;
    }
    const imageElement = document.getElementById("scroller-image");
    imageElement.style.backgroundImage = `url(${image[currentIndex].link})`;
    const heading = document.getElementById("image-heading");
    heading.innerText = image[currentIndex].text;
    
}

window.onload = function() {
  document.getElementById("scroller-image").style.backgroundImage = `url(${image[currentIndex].link})`;
  document.getElementById("image-heading").innerText = image[currentIndex].text
};