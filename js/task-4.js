function getShippingCost(country) {
  switch (country) {
    case "China":
      const chinaPrice = 100;
      return `Shipping to ${country} will cost ${chinaPrice} credits`;
    case "Chile":
      const chilePrice = 250;
      return `Shipping to ${country} will cost ${chilePrice} credits`;
    case "Australia":
      const australiaPrice = 170;
      return `Shipping to ${country} will cost ${australiaPrice} credits`;
    case "Jamaica":
      const jamaicaPrice = 120;
      return `Shipping to ${country} will cost ${jamaicaPrice} credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

// Перевірка роботи функції
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
