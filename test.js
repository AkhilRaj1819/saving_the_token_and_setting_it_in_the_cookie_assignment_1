const { encrypt, decrypt } = require('./script');

// Test data
const testPayload = {
  userId: 123,
  username: 'testuser',
  role: 'user'
};

try {
  // Test encryption
  const token = encrypt(testPayload);
  console.log('Encrypted Token:', token);
  
  // Test decryption
  const decodedPayload = decrypt(token);
  console.log('Decoded Payload:', decodedPayload);
  
  // Verify the decoded payload matches the original
  const { iat, exp, ...payloadWithoutTimestamps } = decodedPayload;
  const isEqual = JSON.stringify(payloadWithoutTimestamps) === JSON.stringify(testPayload);
  
  if (isEqual) {
    console.log('Success: Encryption and decryption working correctly!');
  } else {
    console.log('Failed: Decoded payload does not match original payload');
    console.log('Original:', testPayload);
    console.log('Decoded (without timestamps):', payloadWithoutTimestamps);
  }
} catch (error) {
  console.error('Error during testing:', error.message);
}
