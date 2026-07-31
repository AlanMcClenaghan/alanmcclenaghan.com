// Select loader and results div
const loader = document.getElementById('loading');
const results = document.getElementById('results');

// Listen for submit
const loanForm = document.getElementById('loan-form');
loanForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Hide results 
  results.style.display = 'none';

  // Show loader
  loader.style.display = 'block';

  setTimeout(calculateResults, 1000);

});

// Calculate Results
function calculateResults() {
  // UI Varibles
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    // Show results
    results.style.display = 'block';
    // Hide loader
    loader.style.display = 'none';
  } else {
    showError('Please check your figures')
  }
}

function showError(error) {

  // Hide results
  results.style.display = 'none';

  // Hide loader
  loader.style.display = 'none';

  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('h1');

  // Create div
  const errorDiv = document.createElement('div');
  // Add classes
  errorDiv.classList = "alert alert-danger"
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(function () {
    errorDiv.remove();
  }, 3000);
}