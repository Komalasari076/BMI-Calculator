function calculateBMI(weight, height) {
    return weight / Math.pow(height / 100, 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.5) {
        return 'Overweight';
    } else if (bmi >= 30){
        return 'Obesity';
    } else {
        return 'entered the input incorrectly';
    }
}

function handButtonClick() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); 

    // mengecek validasi number
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Please enter valid weight and height!';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    document.getElementById('result').innerText = `Your BMI is ${bmi} which means You are ${category}`;
}