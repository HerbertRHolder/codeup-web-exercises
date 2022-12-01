const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLang = users.filter(function(el){
    return el.languages.length >= 3;
})

console.log(threeLang);

let emails = users.map(function(el){
    return el.email;
})

console.log(emails);


let yearsAverage = users.reduce(function(total, index){
    return total + index.yearsOfExperience / users.length;
},0);
console.log(yearsAverage);

let longEmail = users.reduce(function(total, index){
     if (index.email.length >= total.length)
     {
        total = index.email;
     }
    return total
},"");
console.log(longEmail);

let allEmails = users.reduce(function(total, index){
   return total + index.name + "\n";
},"");
console.log(allEmails);

let uniqueLang = users.reduce(function(total, index){
    index.languages.forEach(lan =>{
        if (!total.includes(lan)){
            total += lan + "\n";
        }
    }) 
    return total;
 },"");

 console.log(uniqueLang);




