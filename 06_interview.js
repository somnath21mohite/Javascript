



var interviewEligibility = function(gradScore,hscScore,sscScore,candidateName){
    var result = "";
    if (gradScore<0||gradScore>100 && hscScore<0||hscScore>100 && sscScore<0||sscScore>100) {
        console.log(` ${radScore,hscScore,sscScore,candidateName} ==> Invalid Input...`);
        
    } else {
        if (gradScore>=70&&hscScore>=80&&sscScore>=90) {
            console.log("Congrates" ,candidateName, "you are eligible for TCS interview.");
        } else {
            console.log("Unfortunately" ,candidateName, "you are not eligible for TCS interview.");
            
        }
        console.log(result);
    }
}
interviewEligibility(80,86,90,"Somnath");
interviewEligibility(70,65,55,"Amit");
interviewEligibility(60,65,88,"Sameer");






    