/**
Articles = [
  "This is a short article.",
  "Now for a longer article. This one has a lot of text.",
  "Another article with medium length."
]

width = 55
 
 Output:
 
+-------------------------------------------------------+
|This is a short article.                               |
+-------------------------------------------------------+
|Now for a longer article. This one has a lot of text.  |
+-------------------------------------------------------+
|Another article with medium length.                    |
+-------------------------------------------------------+
 
width = 12

+------------+
|This is a   |
|short       |
|article.    |
+------------+
|Now for a   |
|longer      |
|article.    |
|This one has|
|a lot of    |
|text.       |
+------------+
|Another     |
|article with|
|medium      |
|length.     |
+------------+
 
 */

// BUGS EXIST AT CURRENT STATE
function printArticles(articles, width){
    /**
     * for each article in articles
     *      
     */
    printLineBreak(width);
    for(let article of articles){
        processArticle(article, width);
        printLineBreak(width);
    }
}

function processArticle(article, width){
    //return array of strings 
    /**
     * if width => article.length
     *  add string to "/[string][' '* width-article.length/"
     * else
     *  let words = article.split(' ');
     * ____ 
     *  */    
    let lines = [];
    if(width >= article.length){
        console.log(formatLine(article, width));
    }
    else{
        let words = article.split(" ");
        count = 0;
        let curr = "";
        while (count <= words.length){
            if(curr.length + words[count].length < width){
                curr += words[count];
                if(curr.length < width - 1){
                    curr+=' ';
                }
                count++;
            }
            else{
                console.log(formatLine(curr, width));
                curr = "";
            }
        }
    }
  
}

function formatLine(str, width){
    let out = "/" + str;
    for(let i = 0; i < width-str.length; i++){
        out += " ";
    }
    out += "/";
    return out;
}

function printLineBreak(width){
   let out = "+";
   for(let i = 0; i < width; i++){
       out+="-"
   }
   out += "+";
   console.log(out);
}




function main() {
    let articles = [
  "This is a short article.",
  "Now for a longer article. This one has a lot of text.",
  "Another article with medium length."
]
printArticles(articles, 12);
    
}

main();