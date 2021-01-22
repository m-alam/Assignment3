//problem number 1.
function kilometerToMeter(num){
    if(num<0)
        return "Invalid Kilometer";
    var meter = num/1000;
    return meter;
}

//problem number 2. 

function budgetCalculator(watch, mobile, laptop) {
    if(watch<0||mobile<0||laptop<0){
        return "invalid your product quantity";
    }
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalBudget = (watch*watchPrice)+(mobile*mobilePrice)+(laptop*laptopPrice);
    return totalBudget;
}

//problem number 3

function hotelCost(day) {
    var totalCost = 0;
    if(day<11){
        totalCost = (day*100);
        return totalCost;
    }
    if(day<21){
        totalCost = (day-10)*80+(10*100);
        return totalCost;
    }
    if(day>20){
        totalCost =(day-20)*50+(10*80)+(10*100);
        return totalCost;
    }
}

//problem number 4

function megaFriend (name) {
    var max=names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if(element.length>max.length){
            max=element;
        }
    }
    return max;
}
