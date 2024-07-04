const input = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");
let resultHTML = "";

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const noCharacterStr = str.replace(/[^a-zA-Z0-9]/g, "");
  const lowStrStr = noCharacterStr.toLowerCase();
  const reversedStr = lowStrStr.split("").reverse().join("");
  return lowStrStr === reversedStr;
}

// Alert + Result update when no value in input when clicking on submit button
checkBtn.addEventListener("click", () => {
  const inputValue = input.value;

  if (inputValue === "") {
    alert("Please input a value");
    console.log("Please input a value");
    return;
  }

  const isPalindromeValue = isPalindrome(inputValue);

  if (isPalindromeValue) {
    resultHTML = `${inputValue} is a palindrome.`;
    result.innerHTML = resultHTML;
    console.log(resultHTML);
  } else {
    resultHTML = `${inputValue} is not a palindrome.`;
    result.innerHTML = resultHTML;
    console.log(resultHTML);
  }
});
