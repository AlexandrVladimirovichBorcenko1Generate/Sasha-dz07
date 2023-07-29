class Car {
    constructor(brand, speedKmPerHour) {
      this.brand = brand;
      this.speedKmPerHour = speedKmPerHour;
    }
  
    get speedUS() {
      return this.speedKmPerHour / 1.6;
    }
  
    set speedUS(speedMilesPerHour) {
      this.speedKmPerHour = speedMilesPerHour * 1.6;
    }
  
    accelerate(acceleration) {
      this.speedKmPerHour += acceleration;
      updateSpeedDisplay();
    }
  
    brake(deceleration) {
      this.speedKmPerHour -= deceleration;
      updateSpeedDisplay();
    }
  }
  
  const ford = new Car("Форд", 120);
  
  const accelerateButton = document.getElementById("accelerateButton");
  const brakeButton = document.getElementById("brakeButton");
  const currentSpeedDisplay = document.getElementById("currentSpeed");
  
  accelerateButton.addEventListener("click", () => {
    ford.accelerate(10); // Ускорить на 10 км/ч
  });
  
  brakeButton.addEventListener("click", () => {
    ford.brake(10); // Тормозить на 10 км/ч
  });
  
  function updateSpeedDisplay() {
    currentSpeedDisplay.textContent = ford.speedKmPerHour;
  }
  
  updateSpeedDisplay();
  