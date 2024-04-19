export default function Shuffle(array){
    let currentIndex=array.length,
       randomindex;
while(currentIndex>0){
    randomindex=Math.floor(Math.random()*currentIndex);
    currentIndex--;
[array[currentIndex],array[randomindex]]=[array[randomindex],array[currentIndex],];

}
return array;
}
