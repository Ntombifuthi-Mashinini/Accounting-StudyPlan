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
    const revenue = parseFloat(document.getElementById('revenue').value) || 0;
    const costOfSales = parseFloat(document.getElementById('costOfSales').value) || 0;
    const operatingExpenses = parseFloat(document.getElementById('operatingExpenses').value) || 0;
    const financeCosts = parseFloat(document.getElementById('financeCosts').value) || 0;
  
    const grossProfit = revenue - costOfSales;
    const netProfit = grossProfit - operatingExpenses - financeCosts;
  
    document.getElementById('grossProfit').textContent = grossProfit.toFixed(2);
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