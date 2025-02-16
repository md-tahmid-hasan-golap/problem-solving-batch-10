function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
      return "Invalid Number";
    }
    let priceOfTicket = 120;
    let salaryOfGuard = 500;
    let lunchMoneyOfStaff = 8 * 50;
    const ticketSold = priceOfTicket * ticketSale;
    const expenses = salaryOfGuard + lunchMoneyOfStaff;
    const totalMoney = ticketSold - expenses;
    return totalMoney;
  }
  console.log(calculateMoney(20));
  console.log(calculateMoney(-20));


function calculateMoney(ticketSale, priceOfTicket, salaryOfGuard, lunchMoneyOfStaff) {
    if (ticketSale < 0) {
      return "Invalid Number";
    }
   
    const ticketSold = priceOfTicket * ticketSale;
    const expenses = salaryOfGuard + lunchMoneyOfStaff;
    const totalMoney = ticketSold - expenses;
    return totalMoney;
  }

  const priceOfTicket = 120;
  const salaryOfGuard = 500;
  const lunchMoneyOfStaff = 8 * 50;
  console.log(calculateMoney(20, priceOfTicket, salaryOfGuard, lunchMoneyOfStaff));
  console.log(calculateMoney(-20));




  console.log(calculateMoney(20));

  console.log(calculateMoney(20, 200, 68, 80));
