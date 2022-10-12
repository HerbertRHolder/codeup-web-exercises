console.log("hello from external");
(function(){



    alert("Welcome to my Website!.");
    let response = prompt("What is your favorite color?");

    alert(response + " is my favorite color too!");


// Exercise 3 part 1 and 2
    let price = 3;
    let lilMermaid = Number(prompt("how many days would you like to rent The little Mermaid movie?"));
    let total = price * lilMermaid;

    let Hercules = Number(prompt("how many days would you like to rent the Hercules movie?"));
    total += price * Hercules;

    let BrotherBear = Number(prompt("how many days would you like to rent brother bear movie?"));
    total += price * BrotherBear;
    alert("Here is the total price of the movies: " +  total );


    let googlePay = prompt("What is google paying you in Dollars?");
    let googleHours = prompt("What are the hours worked for Google?");
    let googleTotalPrice = googlePay * googleHours;

    let amazonPay = prompt("What is Amazon paying you in Dollars?");
    let amazonHours = prompt("what are the hours worked for Amazon?");
    let amazonTotalPrice = amazonPay * amazonHours;

    let facebookPay = prompt("What is Facebook Paying you in Dollars?");
    let facebookHours = prompt("what are the hours worked for Facebook?");
    let facebookTotalPrice = facebookPay * facebookHours;

    let aggregate = googleTotalPrice + amazonTotalPrice + facebookTotalPrice;
    alert("This is the total amount you will get paid: " + aggregate);











})();








