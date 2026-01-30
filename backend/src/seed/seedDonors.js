const dbConnect = require('../config/db');
const User = require('../models/User');

const firstNames = ["Aarav", "Diya", "Vivaan", "Ira", "Reyansh", "Anika", "Advik", "Myra", "Krish", "Sara"];
const lastNames = ["Sharma", "Patel", "Rao", "Singh", "Khan", "Nair", "Joshi", "Kapoor", "Mehta", "Verma"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedUsers = async () => {
  try {
    await dbConnect();

    // Remove existing donors created for demo
    await User.deleteMany({ role: "DONOR", email: /user/ });

    for (let i = 1; i <= 20; i++) {

      const first = getRandom(firstNames);
      const last = getRandom(lastNames);

      await User.create({
        name: `${first} ${last}`,
        email: `user${i}@vitamatch.com`,
        password: "user123",
        role: "DONOR",   // stays within your enum
        phoneNumber: 8700000000 + i,
        address: `Area ${i}, India`
      });

      console.log(`Created user${i}`);
    }

    console.log("👤 General users seeded successfully");
    process.exit();

  } catch (error) {
    console.error("❌ ERROR:", error.message);
    process.exit(1);
  }
};

seedUsers();
