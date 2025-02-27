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
  
  function calculateBalanceSheet() {
    const currentAssets = parseFloat(document.getElementById('currentAssets').value) || 0;
    const nonCurrentAssets = parseFloat(document.getElementById('nonCurrentAssets').value) || 0;
    const currentLiabilities = parseFloat(document.getElementById('currentLiabilities').value) || 0;
    const nonCurrentLiabilities = parseFloat(document.getElementById('nonCurrentLiabilities').value) || 0;
  
    const totalAssets = currentAssets + nonCurrentAssets;
    const totalLiabilities = currentLiabilities + nonCurrentLiabilities;
    const equity = totalAssets - totalLiabilities;
  
    document.getElementById('totalAssets').textContent = totalAssets.toFixed(2);
    document.getElementById('totalLiabilities').textContent = totalLiabilities.toFixed(2);
    document.getElementById('equity').textContent = equity.toFixed(2);
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