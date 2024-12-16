function calculateBMI(weight, height) {
  return weight / Math.pow(height / 100, 2);
  //menghitung pangkat Math.pow(angka, exponent);
}

function categoryBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.5) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obesity";
  } else {
    return "entered the input incorrectly";
  }
}

function buttonCalculate() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  // validasi number
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerText =
      "please enter valid weight and height";
    return;
  }

  const bmi = calculateBMI(weight, height);
  const categori = categoryBMI(bmi);

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(
    1
  )} wich means you are ${categori}`;
}
