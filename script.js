// Global sampleObject
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Function to check if the key exists in sampleObject
function hasKey(key) {
  return sampleObject.hasOwnProperty(key);
}

// Function to handle button click
function checkKey() {
  const inputKey = document.getElementById("keyInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (inputKey.length === 0) {
    resultDiv.textContent = "Please enter a key.";
    return;
  }

  const exists = hasKey(inputKey);
  resultDiv.textContent = exists 
    ? `✅ The key "${inputKey}" exists in sampleObject.` 
    : `❌ The key "${inputKey}" does NOT exist in sampleObject.`;
}
