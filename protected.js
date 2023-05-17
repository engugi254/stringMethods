// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
function protectEmail(email) {
    const [username, domain] = email.split('@');
    const usernameLength = username.length;
    const protectedUsername = `${username.slice(0, Math.floor(usernameLength / 2))}...`;
    return `${protectedUsername}@${domain}`;
  }
  
  console.log(protectEmail('robin_singh@example.com'));