const bcrypt = require('bcrypt');

// Function to compare a password with a hash
async function comparePassword() {
    const inputPassword = 'mypassword1'; // Replace with the password you want to compare
    const hashedPassword = '$2b$10$rVEkskbsfwiqviMDqtingusliFzsMEgBHe3BKYLPlhF7q/sjsRq5W'; // Replace with the hashed password stored in your application

    try {
      // Compare the input password with the stored hashed password
      const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

      if (isMatch) {
        console.log('Password is correct.');
      } else {
        console.log('Password is incorrect.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Call the function to compare the password
  comparePassword();
