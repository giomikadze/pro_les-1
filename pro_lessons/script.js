


const images = document.querySelectorAll('img');
const arrey = [
  {
      alt: "lion",
    src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
  },
  {
      alt: "elephant",
    src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
  },
  {
      alt: "dog",
    src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
  },
  ]
 
for(let i =0;i <arrey.length;i++){

  images[i].src = arrey[i].src;
  images[i].alt = arrey[i].alt;

}



const Items = ['Item 1', 'Item 2', 'Item 3'];

const arrOfList = document.querySelectorAll('p');
for(let i = 0; i < Items.length; i++ ){
  arrOfList[i].innerText = Items[i];
}






