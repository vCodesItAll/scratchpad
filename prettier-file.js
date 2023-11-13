
function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    let months = 0;
    let savings = 0;
    let oldCarValue = startPriceOld;
    let newCarValue = startPriceNew;
    let percentLoss = percentLossByMonth / 100;

    while (savings + oldCarValue < newCarValue) {
        months++;
        if (months % 2 === 0) {
            percentLoss += 0.005;
        }
        oldCarValue *= (1 - percentLoss);
        newCarValue *= (1 - percentLoss);
        savings += savingPerMonth;
    }

    const leftOver = Math.round(savings + oldCarValue - newCarValue);
    return [months, leftOver];
}

/* 
Parameters: 
- (positive int or float, guaranteed) start_price_old (Old car price)
- (positive int or float, guaranteed) start_price_new (New car price)
- (positive int or float, guaranteed) saving_per_month 
- (positive float or int, guaranteed) percent_loss_by_month
Return: 
  - two positive integers for months and leftoverMoney
Example: 
  - nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
Code Defensively: 
  - using math.round and not math.floor
  - parameter types are guaranteed
Explain: 
  - With every passing month I will depreciate the new and old car by
    1.5 percent each month. I will add 1000 to the saved money. Every 2 months I will depreciate both cars by
    an additional 0.5 percent.  When the amount of saved money is equal to or greater than the new car's worth
    minus the old car's worth I will calculate how many months have passed since I started and I will calculate
    how much saved money we have after subtracted the old and new cars.
Positive Self Talk: 
  - I have solved similar problems before, so I know I can figure this out :)
  I have the tools in my toolbox.
Translate: 
  - Going to translate this to code
  */