function calculator() {
  const a = document.getElementById("inputOne");
  const b = document.getElementById("inputTwo");
  const result = document.getElementById("result");

  const getNumbers = () => [Number(a.value), Number(b.value)];

  document.getElementById("btnAdd").addEventListener("click", () => {
    const [Num1, Num2] = getNumbers();
    result.textContent = `${Num1} + ${Num2} = ${Num1 + Num2}`;
  });

  document.getElementById("btnSub").addEventListener("click", () => {
    const [Num1, Num2] = getNumbers();
    result.textContent = `${Num1} - ${Num2} = ${Num1 - Num2}`;
  });

  document.getElementById("btnMulti").addEventListener("click", () => {
    const [Num1, Num2] = getNumbers();
    result.textContent = `${Num1} × ${Num2} = ${Num1 * Num2}`;
  });

  document.getElementById("btnDiv").addEventListener("click", () => {
    const [Num1, Num2] = getNumbers();
    result.textContent =
      Num2 === 0
        ? `Cannot divide by zero`
        : `${Num1} ÷ ${Num2} = ${Num1 / Num2}`;
  });
}

calculator();
