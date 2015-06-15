$(document).ready(function() {
    var eventHolder= 0;
    var runFunc;
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
       var runFunc = function(){ return subtract(numberHolder.first.join(), numberHolder.second.join())}
       eventHolder += 1
    });
    
    $('#logind').click(function() {
        var runFunc = function(){ return divide(numberHolder.first.join(), numberHolder.second.join())}
       eventHolder += 1
    });
    
    $('#loginp').click(function() {
        var runFunc = function(){ return add(numberHolder.first.join(), numberHolder.second.join())}
       eventHolder += 1
    });
    
    $('#loginmt').click(function() {
        var runFunc = function(){ return multiply(numberHolder.first, numberHolder.second)}
       eventHolder += 1
    });
    
    $('#logineq').click(function() {
        runFunc();
        eventHolder = 0
    });
    
    $('#logincl').click(function() {
       numberHolder.first = [];
       numberHolder.second = [];
       eventHolder = 0;
    });
    

});