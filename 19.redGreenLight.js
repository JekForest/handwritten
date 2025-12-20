const startTrafficLights = () => {
  const lights = [
    { 'color': 'red', 'duration': 3000 },
    { 'color': 'green', 'duration': 1000 },
    { 'color': 'yellow', 'duration': 2000 },
  ];

  let currentIndex = 0;

  const turnOnLights = () => {
    const { color, duration } = lights[currentIndex];

    console.log(`now is ${color} lights, the duration is ${duration} ms.`);

    currentIndex = (currentIndex + 1) % lights.length;

    setTimeout(turnOnLights, duration);
  }

  turnOnLights();
}

startTrafficLights();