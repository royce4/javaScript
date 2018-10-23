function validAnagram(str1, str2){
    //assume that these are 2 anagrams until proven wrong
    var valid = true;
    if(str1.length !== str2.length){
        valid=false;
    }
    if(str1.length == 0 && str2.length == 0){
        valid = true;
    }
    let stringAna1 = {};
    let stringAna2 = {};
    //count the number of characters in each string and store in object
    for(i=0;i<str1.length;i++){        
        var chr=str1.charAt(i);
        stringAna1[chr] = (stringAna1[chr] || 0) + 1;
    }
    for(i=0;i<str1.length;i++){        
        var chr=str2.charAt(i);
        stringAna2[chr] = (stringAna2[chr] || 0) + 1;
    }
    //compare character counts between objects to determine if not anagram
    for (val in stringAna2){
        if (stringAna1[val] != stringAna2[val]){
            valid = false;
        }
    }
    return valid;
}

//main function to read from and output result to html object
$(document).ready(function(){
    $("#test").click(function(){
        $(".output").hide();
        var string1 = $("#str1").val()
        var string2 = $("#str2").val()
        var validOn = validAnagram(string1,string2);
        if (validOn) { $("#anagram").show();}
        else {$("#notAnagram").show();}
    });
    $("#reset").click(function(){
        $("#str1").val("") 
        $("#str2").val("") 
        $(".output").hide();
    }); 
});







