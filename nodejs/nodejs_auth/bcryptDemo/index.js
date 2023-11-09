const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hashedpw) => {
  const result = await bcrypt.compare(pw, hashedpw);
  if (result) {
    console.log("successful");
  } else {
    console.log("incorrect");
  }
};

// hashPassword("monkey");
login("monkey", "$2b$10$dVhT11oUQC9m2I9MS4wSO.xKqbKTgLPC4mD9mB6ZjydiC3rFVFSWu");
