function toCelsius() {
    let f = document.getElementById('fahrenheit').value;
    let c = (5/9) * (f-32);
      document.getElementById('fahrenheit').value = c;
    }
  