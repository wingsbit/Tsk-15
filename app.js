// N1
// for(i=0;i<50;i++){
//     console.log(i);
// }

// N2

// let a =0;
// while(a < 50){
//     console.log(a);
//     a++;
// }

// N3


// let i = 0;
// do {
//     console.log(i);
//     i = i+1;
// } while (i < 5);

// 4
// const numbers = [1,2,5,7,8,10,23,24,26];
// for (i = 0; i <= numbers.length; i++){
//     if(numbers[i] % 2 == 0){

//     console.log(numbers[i]);
//     }

// }

// 5
const currentDay = new Date().getDay(); 


switch(currentDay){
    case 0:
        console.log("Sunday") ;
        break;
    case 1:
        console.log("Monday") ;
        break;
    case 2:
        console.log("Tuesday") ;
        break;
    case 3:
        console.log("Wednesday") ;
        break;
     case 4:
        console.log("Thursday") ;
        break;
   case 5:
        console.log("Friday") ;
        break;   
    case 6:
        console.log("Saturday") ;
        break;
        
}



const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

for( i = 0; i <=currencies.length - 1; i++){
    if(currencies[i].rate > 5)
    {
        console.log(currencies[i].name , currencies[i].rate);
    }

}