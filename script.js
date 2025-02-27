function saveAnswers() {
    const answers = {};
    for (let i = 1; i <= 33; i++) {
      answers[`answer${i}`] = document.getElementById(`answer${i}`).value;
    }
    localStorage.setItem('answers', JSON.stringify(answers));
    alert('Answers saved!');
  }
  
  function loadAnswers() {
    const savedAnswers = JSON.parse(localStorage.getItem('answers')) || {};
    for (let i = 1; i <= 33; i++) {
      if (savedAnswers[`answer${i}`]) {
        document.getElementById(`answer${i}`).value = savedAnswers[`answer${i}`];
      }
    }
  }
  
  function calculateIncomeStatement() {
    const inputs = {
      salesRevenue: parseFloat(document.getElementById('salesRevenue').value) || 0,
      otherRevenue: parseFloat(document.getElementById('otherRevenue').value) || 0,
      openingInventory: parseFloat(document.getElementById('openingInventory').value) || 0,
      purchases: parseFloat(document.getElementById('purchases').value) || 0,
      closingInventory: parseFloat(document.getElementById('closingInventory').value) || 0,
      rent: parseFloat(document.getElementById('rent').value) || 0,
      wages: parseFloat(document.getElementById('wages').value) || 0,
      utilities: parseFloat(document.getElementById('utilities').value) || 0,
      depreciation: parseFloat(document.getElementById('depreciation').value) || 0,
      otherOperatingExpenses: parseFloat(document.getElementById('otherOperatingExpenses').value) || 0,
      interestIncome: parseFloat(document.getElementById('interestIncome').value) || 0,
      interestExpense: parseFloat(document.getElementById('interestExpense').value) || 0,
      otherIncome: parseFloat(document.getElementById('otherIncome').value) || 0,
      otherExpenses: parseFloat(document.getElementById('otherExpenses').value) || 0,
      taxesPaid: parseFloat(document.getElementById('taxesPaid').value) || 0,
    };
  
    const totalRevenue = inputs.salesRevenue + inputs.otherRevenue;
    document.getElementById('totalRevenue').textContent = totalRevenue.toFixed(2);
  
    const totalCOGS = inputs.openingInventory + inputs.purchases - inputs.closingInventory;
    document.getElementById('totalCOGS').textContent = totalCOGS.toFixed(2);

    const grossProfit = totalRevenue - totalCOGS;
    document.getElementById('grossProfit').textContent = grossProfit.toFixed(2);
  
    const totalOperatingExpenses =
      inputs.rent +
      inputs.wages +
      inputs.utilities +
      inputs.depreciation +
      inputs.otherOperatingExpenses;
    document.getElementById('totalOperatingExpenses').textContent = totalOperatingExpenses.toFixed(2);
  
    const operatingProfit = grossProfit - totalOperatingExpenses;
    document.getElementById('operatingProfit').textContent = operatingProfit.toFixed(2);

    const netOtherIncomeExpenses =
      inputs.interestIncome -
      inputs.interestExpense +
      inputs.otherIncome -
      inputs.otherExpenses;
    document.getElementById('netOtherIncomeExpenses').textContent = netOtherIncomeExpenses.toFixed(2);
  
    const profitBeforeTax = operatingProfit + netOtherIncomeExpenses;
    document.getElementById('profitBeforeTax').textContent = profitBeforeTax.toFixed(2);
  
    const netProfit = profitBeforeTax - inputs.taxesPaid;
    document.getElementById('netProfit').textContent = netProfit.toFixed(2);
  }
  
function calculatePPE() {
    const landBuildings = parseFloat(document.getElementById('landBuildings').value) || 0;
    const vehicles = parseFloat(document.getElementById('vehicles').value) || 0;
    const equipment = parseFloat(document.getElementById('equipment').value) || 0;
    const depreciation = parseFloat(document.getElementById('depreciation').value) || 0;
  
    const totalPPE = (landBuildings + vehicles + equipment) - depreciation;
    document.getElementById('totalPPE').textContent = totalPPE.toFixed(2);
  }
  
  function calculateInvestments() {
    const fixedDeposit = parseFloat(document.getElementById('fixedDeposit').value) || 0;
    const otherInvestments = parseFloat(document.getElementById('otherInvestments').value) || 0;
  
    const totalInvestments = fixedDeposit + otherInvestments;
    document.getElementById('totalInvestments').textContent = totalInvestments.toFixed(2);
  }
  
  function calculateInventory() {
    const tradingStock = parseFloat(document.getElementById('tradingStock').value) || 0;
    const consumableStores = parseFloat(document.getElementById('consumableStores').value) || 0;
  
    const totalInventory = tradingStock + consumableStores;
    document.getElementById('totalInventory').textContent = totalInventory.toFixed(2);
  }
  
  function calculateReceivables() {
    const tradeDebtors = parseFloat(document.getElementById('tradeDebtors').value) || 0;
    const provisionBadDebts = parseFloat(document.getElementById('provisionBadDebts').value) || 0;
    const prepaidExpenses = parseFloat(document.getElementById('prepaidExpenses').value) || 0;
    const accruedIncome = parseFloat(document.getElementById('accruedIncome').value) || 0;
  
    const netTradeDebtors = tradeDebtors - provisionBadDebts;
    const totalReceivables = netTradeDebtors + prepaidExpenses + accruedIncome;
    document.getElementById('totalReceivables').textContent = totalReceivables.toFixed(2);
  }
  
  function calculateCash() {
    const bank = parseFloat(document.getElementById('bank').value) || 0;
    const pettyCash = parseFloat(document.getElementById('pettyCash').value) || 0;
    const cashFloat = parseFloat(document.getElementById('cashFloat').value) || 0;
    const shortTermDeposit = parseFloat(document.getElementById('shortTermDeposit').value) || 0;
  
    const totalCash = bank + pettyCash + cashFloat + shortTermDeposit;
    document.getElementById('totalCash').textContent = totalCash.toFixed(2);
  }
  
  function calculatePayables() {
    const tradeCreditors = parseFloat(document.getElementById('tradeCreditors').value) || 0;
    const accruedExpenses = parseFloat(document.getElementById('accruedExpenses').value) || 0;
    const incomeAdvance = parseFloat(document.getElementById('incomeAdvance').value) || 0;
  
    const totalPayables = tradeCreditors + accruedExpenses + incomeAdvance;
    document.getElementById('totalPayables').textContent = totalPayables.toFixed(2);
  }
  
  function calculateLiabilities() {
    const mortgageBond = parseFloat(document.getElementById('mortgageBond').value) || 0;
    const loan = parseFloat(document.getElementById('loan').value) || 0;
  
    const totalLiabilities = mortgageBond + loan;
    document.getElementById('totalLiabilities').textContent = totalLiabilities.toFixed(2);
  }
  
  function calculateEquity() {
    const openingCapital = parseFloat(document.getElementById('openingCapital').value) || 0;
    const additionalCapital = parseFloat(document.getElementById('additionalCapital').value) || 0;
    const netProfit = parseFloat(document.getElementById('netProfit').value) || 0;
    const drawings = parseFloat(document.getElementById('drawings').value) || 0;
  
    const totalEquity = (openingCapital + additionalCapital + netProfit) - drawings;
    document.getElementById('totalEquity').textContent = totalEquity.toFixed(2);
  }
  
  function calculateBalanceSheet() {
    const totalPPE = parseFloat(document.getElementById('totalPPE').textContent) || 0;
    const totalInvestments = parseFloat(document.getElementById('totalInvestments').textContent) || 0;
    const totalInventory = parseFloat(document.getElementById('totalInventory').textContent) || 0;
    const totalReceivables = parseFloat(document.getElementById('totalReceivables').textContent) || 0;
    const totalCash = parseFloat(document.getElementById('totalCash').textContent) || 0;
  
    const totalPayables = parseFloat(document.getElementById('totalPayables').textContent) || 0;
    const totalLiabilities = parseFloat(document.getElementById('totalLiabilities').textContent) || 0;
    const totalEquity = parseFloat(document.getElementById('totalEquity').textContent) || 0;
  
    const totalAssets = totalPPE + totalInvestments + totalInventory + totalReceivables + totalCash;
    document.getElementById('totalAssets').textContent = totalAssets.toFixed(2);
  
    const totalEquityLiabilities = totalEquity + totalLiabilities + totalPayables;
    document.getElementById('totalEquityLiabilities').textContent = totalEquityLiabilities.toFixed(2);
  
    if (totalAssets === totalEquityLiabilities) {
      document.getElementById('balanceMessage').textContent = "✅ Balance Sheet Balances!";
    } else {
      document.getElementById('balanceMessage').textContent = "⚠️ Balance Sheet Does NOT Balance!";
    }
  }
  
  function calculateAll() {
    calculatePPE();
    calculateInvestments();
    calculateInventory();
    calculateReceivables();
    calculateCash();
    calculatePayables();
    calculateLiabilities();
    calculateEquity();
    calculateBalanceSheet();
  }
  
  function calculateCPJ() {
    const amount1 = parseFloat(document.getElementById('cpjAmount1').value) || 0;
    const amount2 = parseFloat(document.getElementById('cpjAmount2').value) || 0;
    const amount3 = parseFloat(document.getElementById('cpjAmount3').value) || 0;
    const totalPayments = amount1 + amount2 + amount3;
    document.getElementById('totalPayments').textContent = totalPayments.toFixed(2);
  }
  
  function calculateCRJ() {
    const amount1 = parseFloat(document.getElementById('crjAmount1').value) || 0;
    const amount2 = parseFloat(document.getElementById('crjAmount2').value) || 0;
    const amount3 = parseFloat(document.getElementById('crjAmount3').value) || 0;
    const totalReceipts = amount1 + amount2 + amount3;
    document.getElementById('totalReceipts').textContent = totalReceipts.toFixed(2);
  }
  
  function addTransaction() {
    const date = document.getElementById('glDate1').value;
    const account = document.getElementById('glAccount1').value;
    const debit = parseFloat(document.getElementById('glDebit1').value) || 0;
    const credit = parseFloat(document.getElementById('glCredit1').value) || 0;
  
    alert(`Transaction added:\nDate: ${date}\nAccount: ${account}\nDebit: R${debit}\nCredit: R${credit}`);
  }
  
  window.onload = loadAnswers;