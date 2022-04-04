const sortByProperty = ((property, direction) => {  
    if(direction === "asc"){
        return function(a,b){  
            if(a[property] > b[property])  
               return 1;  
            else if(a[property] < b[property])  
               return -1;  
            return 0;  
         }
    } else if(direction === "desc"){
        return function(a,b){  
            if(a[property] > b[property])  
               return -1;  
            else if(a[property] < b[property])  
               return 1;  
            return 0;  
         }
    }
 });

 module.exports = sortByProperty;