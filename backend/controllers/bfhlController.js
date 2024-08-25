const processData = (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Data must be an array' });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');

    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
    const highestLowercaseAlphabet = lowercaseAlphabets
        .sort()
        .reverse()[0] || null;

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",  // Replace with dynamic user ID if needed
        email: "john@xyz.com",          // Replace with the actual email if needed
        roll_number: "ABCD123",         // Replace with the actual roll number if needed
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
};

const getOperationCode = (req, res) => {
    res.json({
        operation_code: 1
    });
};

module.exports = { processData, getOperationCode };
