const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

const startTrafficLights = async () => {
  const lights = [
    { 'color': 'red', 'duration': 3000 },
    { 'color': 'green', 'duration': 1000 },
    { 'color': 'yellow', 'duration': 2000 }
  ];

  let index = 0;

  while (true) {
    const { color, duration } = lights[index];

    console.log(`now is ${color}, the duration is ${duration}`);

    await sleep(duration);

    index = (index + 1) % lights.length;
  }
}

startTrafficLights();