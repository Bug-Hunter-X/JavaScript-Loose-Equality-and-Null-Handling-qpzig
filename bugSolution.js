function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  // ... rest of your code, safe to proceed now that a and b are not null
}