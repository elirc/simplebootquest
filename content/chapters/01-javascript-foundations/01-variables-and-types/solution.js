function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function describeTemperature(celsius) {
  return `${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`;
}
