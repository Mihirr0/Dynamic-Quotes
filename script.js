// console.log('let seee come to console');
const quotes=document.getElementById('quotes');
const author=document.getElementById('author');
const newQuotes=document.getElementById('newQuotes');

let realData='';
let quotesData='';

const getNewQuotes= ()=>{
    let rnum=Math.floor(Math.random()*100);
    quotesData =realData[rnum];
    quotes.innerText=`${realData[rnum].text}`;
    quotesData.author==null
    ?( author.innerText="unKnown")
   :( author.innerText=`${quotesData.author}`);

}

const getQuotes= async() =>{
    const api= "https://type.fit/api/quotes";
    try{
        let data=await fetch(api);
        realData= await data.json();
        getNewQuotes();
    } catch (error) {}

};

newQuotes.addEventListener('click',getNewQuotes);
getQuotes();
