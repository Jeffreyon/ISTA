import { useEffect, useState } from "react";

export default function useVerificationCode(codeLength: number): any {
  let inputStates: any[] = [];

  for (let i = 0; i < codeLength; i++) {
    const [digit, setDigit] = useState("");
    inputStates.push({ digit, setDigit });
  }

  let [code, setCode] = useState<any>(null);

  // jumps to next empty input when code is entered in an input and jumps to previous input when code is deleted from an input
  const handleChange = (e: any, index: number): void => {
    let entry = e.target.value;

    if (entry.length <= 1 && !Number.isNaN(entry)) {
      // set and limit code per input box to 1 digit
      inputStates[index].setDigit(e.target.value);

      if (entry.length === 1) {
        // move focus to next empty input box unless it's the last one,
        if (index < codeLength - 1) {
          let nextInput = document.querySelectorAll<any>(".digit")[index + 1];
          if (nextInput.value === "") nextInput.focus();
        }
      } else if (entry.length === 0) {
        // user deleted a code, move focus to the previous input box
        let prevInput = document.querySelectorAll<any>(".digit")[index - 1];

        // focus if the element exists
        if (prevInput !== undefined) prevInput.focus();
      }
    } else return;
  };

  // prevents user from entering any of the characters below, because 'e' is seen by JS as a number
  const handleKeyDown = (e: any) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  // function below (handleFocus) automatically focuses the next input with an empty value, unfortunately this conflicts with deleting an input in `handleChange` above so I'll comment it out for now
  /*   const handleFocus = (e: any, index: number) => {
    // find the first element with an empty value and focus on it
    let closestEmptyInput = document.querySelector<any>('.digit[value=""]');

    // focus if the element exists
    if (closestEmptyInput !== null) closestEmptyInput.focus();
  }; */

  // compile the complete code anytime the inputs change
  useEffect(() => {
    let finalCode = inputStates
      .map((input) => {
        return input.digit;
      })
      .join("");

    // don't provide the code if it's not complete
    if (finalCode.length === codeLength) {
      setCode(finalCode);
    } else setCode(null);
  }, [inputStates]);

  return [code, inputStates, handleChange, handleKeyDown];
}
