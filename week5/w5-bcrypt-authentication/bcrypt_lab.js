const bcrypt = require('bcrypt');

async function hashPassword() {
    const password = 'mypassword1';

    try {
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('Password:', password);
        console.log('Salt:', salt);
        console.log('Hashed Password:', hashedPassword);
    } catch {
        console.error('Error: ', error);
    }
}

hashPassword();



