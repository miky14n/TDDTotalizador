function calculateTot(a,b){
  return a*b;
}

//var cod = document.getElementById("producto").value;
function calculateSubTot(priceTot,state){
  var tax;
  switch(state){
      case "UT":
          tax = 0.0665;
          break;
      case "NV":
          tax = 0.08;
          break;
      case "TX":
          tax = 0.0625;
          break;
      case "AL":
          tax = 0.04;
          break;
      case "CA":
          tax = 0.0825;
          break;
      default:
          
          break;
  }
  return priceTot+(priceTot*tax);
}
/*
          1000            	3%
        3000            	5%
        7000	        	7%
        10000          	    10%
        30000          	    15%
*/
function calculateDiscount(total)
{
  var discount = 0;
  if(total>= 30000){
      discount = 0.15;
  }
  else if(total>= 10000){
      discount = 0.10;
  }
  else if(total>= 7000){
      discount = 0.07;
  }
  else if(total>= 3000){
      diacaunt = 0.05;
  }
  else if(total>= 1000){
      discount = 0.03;
  }
  return (total*discount);
}
function totalGlobal(cant,price,state) {
  var tot = calculateTot(cant,price);
  var subTot = calculateSubTot(tot,state);
  var discountTot = calculateDiscount(subTot);
  return  subTot- discountTot;
}
export default totalGlobal;