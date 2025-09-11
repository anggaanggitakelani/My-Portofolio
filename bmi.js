document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value.trim();
  const height = document.getElementById("height").value.trim();
  const errorBox = document.getElementById("error-box");
  const resultBox = document.getElementById("result");

  // Reset pesan
  errorBox.classList.add("hidden");
  errorBox.textContent = "";
  resultBox.textContent = "";

  // Validasi input angka
  if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
    errorBox.textContent = "⚠️ Harap masukan input valid (angka saja).";
    errorBox.classList.remove("hidden");
    return;
  }

  const w = parseFloat(weight);
  const h = parseFloat(height) / 100; // cm → meter

  if (w <= 0 || h <= 0) {
    errorBox.textContent = "⚠️ Berat dan tinggi harus lebih dari 0.";
    errorBox.classList.remove("hidden");
    return;
  }

  const bmi = w / (h * h);
  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi < 25) {
    kategori = "Normal";
  } else if (bmi < 30) {
    kategori = "Gemuk";
  } else {
    kategori = "Obesitas";
  }

  resultBox.textContent = `BMI Anda: ${bmi.toFixed(2)} (${kategori})`;
});
