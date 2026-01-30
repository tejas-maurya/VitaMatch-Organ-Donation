const dbConnect = require('../config/db');
const Hospital = require("../models/Hospital");
const User = require("../models/User");

const firstNames = ["Arjun", "Meera", "Rohan", "Ananya", "Vikram", "Priya", "Kabir", "Isha"];
const lastNames = ["Sharma", "Verma", "Reddy", "Patel", "Nair", "Gupta", "Kapoor", "Menon"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const hospitalsData = [
  { name: "AIIMS Delhi", address: "New Delhi" },
  { name: "Apollo Hospitals", address: "Chennai" },
  { name: "Fortis Memorial", address: "Gurgaon" },
  { name: "Manipal Hospitals", address: "Bangalore" },
  { name: "Tata Memorial Hospital", address: "Mumbai" }
];

const seed = async () => {
  try {
    await dbConnect();

    // Clear old data
    await Hospital.deleteMany();
    await User.deleteMany({ role: "DOCTOR" });

    for (const hosp of hospitalsData) {

      const hospital = await Hospital.create({
        ...hosp,
        doctor: [],
        request: [],
        donate: []
      });

      const numDoctors = Math.floor(Math.random() * 2) + 2; // 2–3 doctors

      for (let i = 0; i < numDoctors; i++) {

        const first = getRandom(firstNames);
        const last = getRandom(lastNames);

        const doctor = await User.create({
          name: `Dr. ${first} ${last}`,
          email: `${first.toLowerCase()}${last.toLowerCase()}@vitamatch.com`,
          password: "doctor123",
          role: "DOCTOR",
          hospitalId: hospital._id,
          phoneNumber: 9000000000 + Math.floor(Math.random() * 1000),
          address: hospital.address
        });

        hospital.doctor.push(doctor._id);
      }

      await hospital.save();
    }

    console.log("🏥 Hospitals & Doctors seeded successfully");
    process.exit();

  } catch (error) {
    console.error("❌ ERROR:", error.message);
    process.exit(1);
  }
};

seed();
