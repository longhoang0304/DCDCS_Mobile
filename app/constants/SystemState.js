const IDLING = 0;
const DRYING = 1;
const MOVING = 2;
const PAUSED = 3;
const DRYER_STARTED = 4;
const UNKNOWN = 5;

const getStateName = (state) => ['IDLING', 'DRYING', 'MOVING', 'PAUSED', 'DRYER ON', 'N/A'][state];

export {
  IDLING,
  DRYING,
  MOVING,
  PAUSED,
  DRYER_STARTED,
  UNKNOWN,
  getStateName,
};