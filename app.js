$(document).ready(function() {
    var eventHolder= 0;
    var funcHolder = '';
    var first = '';
    var second = '';
       
    
    
    $('#login0').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });

    
    $('#login1').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
    $('#login2').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login3').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login4').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login5').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login6').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login7').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
     $('#login8').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
    $('#login9').click(function() {
        if (first.length === 0){
            first = first + $(this).attr("value")} 
        else if (eventHolder === 0){
            first = first + $(this).attr("value")}
        else {
            second = second + $(this).attr("value")}
        console.log(first)
        console.log(second)
    });
    
    //click event for the six operators 
   
    $('#loginm').click(function() {
       funcHolder = 'subtract'
       eventHolder += 1
    });
    
    $('#logind').click(function() {
        funcHolder = 'divide'
        eventHolder += 1
    });
    
    $('#loginp').click(function() {
        funcHolder = 'add'
        eventHolder += 1
    });
    
    $('#loginmt').click(function() {
        funcHolder = 'multiply'
        eventHolder += 1
    });
    
    $('#logineq').click(function() {
        var total = 0
        eventHolder = 0;
        switch(funcHolder) {
            case 'subtract':
                total = subtract(first, second)
                break;
            case 'divide':
                total = divide(first, second)
                break;
            case 'add':
                total = add(first, second)
                break;
            case 'multiply':
                total = multiply(first, second)
                break;
        };
        first = '';
        second = '';
        console.log(total);
    });
    
    $('#logincl').click(function() {
        first = '';
        second = '';
        eventHolder = 0;
        console.log(first, second);
        
    });
    

});