import { useCookies } from 'vue3-cookies';

// Import the shared secret key from your backend or define it here
const JWT_SECRET = 'c8b40ad172ddc273c18f824d090a715de5f9c31b4f917486dd81bedee6032b01088366397ec8af78d774891a32934063452c236ebd01fbb2aa90c8ce2270cf8a';

function createToken(user) {
    const { cookies } = useCookies();

    // Set the user information in a cookie
    cookies.set('users', {
        email: users.email,
        password: users.password
    });

    // Generate JWT token using the shared secret key
    const token = generateToken(user);

    // Return the token or handle any other logic as needed
    return { success: true, message: 'Token created successfully', token };
}

function generateToken(user) {
    // You can use libraries like jwt-simple to generate JWT tokens
    // Import jwt-simple or any other library for JWT token generation
    // Here, we assume you have a function called 'jwt.sign' for token generation

    // Example using jwt-simple:
    // import jwt from 'jwt-simple';

    // Generate the JWT token using the shared secret key
    // const token = jwt.sign({ email: user.email, password: user.password }, SECRET_KEY);

    // Return the generated token
    // return token;
}

export { createToken };
