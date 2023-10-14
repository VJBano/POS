
export const Currency = (rawnum: number, currency: string) => {
    const money = new Intl.NumberFormat("en-us", {
      currency: currency,
      style: "currency",
    });

    if(rawnum != undefined){
      return money.format(rawnum);
    } else {

      return `Cannot Covert to ${currency} currency.`
    }
   
  };