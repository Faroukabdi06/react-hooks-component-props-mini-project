import React from "react";

function Article({title,date=`January 1, 1970`,preview,minutes}){
    const roundedMinutes =Math.ceil(minutes/5)*5
    const coffeCups = "☕️".repeat(roundedMinutes / 5);
    const bookMinutes = Math.ceil(minutes/10)*10
    const books = "🍱".repeat(bookMinutes/10)
    function readMinutes(){
        if(minutes<30){
            return `${coffeCups} ${minutes}min read`
        }
        else{
            return `${books} ${minutes}min read`
        }
    }
   return(
   <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        {readMinutes()}

    </article>
   )
}
export default Article