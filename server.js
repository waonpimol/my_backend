const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Function to check if a number is prime
function isPrime(num) {
  // Convert to integer
  num = Math.floor(num);
  
  // Numbers less than 2 are not prime
  if (num < 2) {
    return false;
  }
  
  // 2 is prime
  if (num === 2) {
    return true;
  }
  
  // Even numbers are not prime
  if (num % 2 === 0) {
    return false;
  }
  
  // Check odd divisors up to the square root of num
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Prime check endpoint
app.post('/is-prime', (req, res) => {
  const { number } = req.body;
  
  // Validate input
  if (number === undefined || number === null) {
    return res.status(400).json({
      error: 'Number is required',
      input: number
    });
  }
  
  // Check if input is a valid number
  if (isNaN(number)) {
    return res.status(400).json({
      error: 'Input must be a valid number',
      input: number
    });
  }
  
  const result = isPrime(number);
  res.json({
    input: number,
    output: result
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Prime Checker API is running on http://localhost:${PORT}`);
  console.log(`POST /is-prime - Check if a number is prime`);
  console.log(`GET /health - Health check`);
});
