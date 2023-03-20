import { useEffect, useState } from "react";

export default function useVerificationCode(codeLength: number): any {
  let inputStates: any[] = [];

  for (let i = 0; i < codeLength; i++) {
    const [code, setCode] = useState("");
    inputStates.push({ code, setCode });
  }

  let [code, setCode] = useState("");

  const handleChange = (e: any, index: number): void => {
    let entry = e.target.value;

    if (entry.length <= 1 && !Number.isNaN(entry)) {
      // set and limit code per input box to 1 digit
      inputStates[index].setCode(e.target.value);

      // move focus to next empty input box unless it's the last one,
      if (index < codeLength - 1) {
        let nextInput = document.querySelectorAll<any>(".digit")[index + 1];
        if (nextInput.value === "") nextInput.focus();
      }
    } else return;
  };

  const handleFocus = (e: any, index: number) => {
    // find the first element with an empty value and focus on it
    let closestEmptyInput = document.querySelector<any>('.digit[value=""]');

    // focus if the element exists
    if (closestEmptyInput !== null) closestEmptyInput.focus();
  };

  // compile the complete code anytime the inputs change
  useEffect(() => {
    setCode((old) => {
      return inputStates
        .map((digit) => {
          return digit.code;
        })
        .join("");
    });
  }, [inputStates]);

  return [code, inputStates, handleChange, handleFocus];
}
