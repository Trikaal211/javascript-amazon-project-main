import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import {deliveryOptions} from './delivery.js';
let inner = "";
  const deliveryOptionsContainer = document.querySelector('.delivery-options');

deliveryOptions.forEach((option) => {
   let today = dayjs();
    const deliveryDate = today.add(option.days, 'day');
    const deliveryDateFormatted = deliveryDate.format('DD/MM/YYYY');
    const deliveryPrice = option.price;

    inner+= `
      <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
    <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      ${deliveryDateFormatted}
                    </div>
                    <div class="delivery-option-price">
                      ${deliveryPrice}
                    </div>
                  </div>
                </div>
    `
  
})

deliveryOptionsContainer.innerHTML = inner;
console.log("dknkj")