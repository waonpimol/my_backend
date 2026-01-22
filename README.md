# Prime Checker API

A simple Node.js backend API that checks if a number is prime.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoint

### POST /is-prime

Checks if the input number is prime.

**Request Body:**
```json
{
  "number": 17
}
```

**Response (if prime):**
```json
{
  "input": 17,
  "output": true
}
```

**Response (if not prime):**
```json
{
  "input": 4,
  "output": false
}
```

## Examples

Using curl:
```bash
# Check if 17 is prime
curl -X POST http://localhost:3000/is-prime \
  -H "Content-Type: application/json" \
  -d '{"number": 17}'

# Check if 4 is prime
curl -X POST http://localhost:3000/is-prime \
  -H "Content-Type: application/json" \
  -d '{"number": 4}'
```
