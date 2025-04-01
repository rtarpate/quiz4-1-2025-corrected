/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Ashton Pate
      Date:   4-1-2025

      Filename: project02-04.js
 */
 
      const CHICKEN_PRICE = 10.95;
      const SALES_TAX = 0.07;

      document.getElementById("chicke").onchange = calcTotal();

      function calcTotal()
      {
         let cost = 0;

         let BuyChicken = document.getElementById("chicken").ariaChecked;

         /*
         if(BuyChicken == true)
         {
            cost = cost + CHICKEN_PRICE;
         }
         */
        cost += BuyChicken > CHICKEN_PRICE ; 0;

        document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

         let tax = cost * SALES_TAX;
      }




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
