// Code your solution in this file

function distanceFromHqInBlocks(start) {
    const hq = 42;
    return Math.abs(start - hq);
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice( start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}
