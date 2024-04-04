const generator = require("generate-password");
const handlegeneratepassword = async (req, res) => {
  const { length, numbers, symbols, uppercase, lowercase } = req.body;
  try {
    let password = generator.generate({
      excludeSimilarCharacters: true,
      length,
      numbers,
      symbols,
      uppercase,
      lowercase,
    });
    res.status(200).json({
      password: password,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { handlegeneratepassword };
