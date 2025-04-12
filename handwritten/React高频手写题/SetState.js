// 基础的SetState
let globalState = {};
let globalSubscribers = {};
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;
  stateIndex++;
  if(!(currentIndex in globalState)) {
    globalState[currentIndex] = initialValue;
    globalSubscribers[currentIndex] = new Set();
  }
  const setState = (newState) => {
    if(typeof newState === 'function') {
      newState = newState(globalState[currentIndex]);
    }
    globalState[currentIndex] = newState;
    // 触发所有的订阅者，进行数据的更新
    for(const subscriber of globalSubscribers[currentIndex]) {
      subscriber(newState);
    }
  };
  const subscribe = (subscriber) => {
    globalSubscribers[currentIndex].add(subscriber);

    return () => {
      globalSubscribers[currentIndex].delete(subscriber);
    };
  };
  return [globalState[currentIndex], setState, subscribe];
}

// example
const [count, setCount, subscribeCount] = useState(0);
subscribeCount((newValue) => {
  console.log("count changed: ", newValue);
});
console.log("count: ", count);
setCount(1);

const [count1, setCount1, subscribeCount1] = useState(1);
subscribeCount1((newValue) => {
  console.log("count changed 1: ", newValue);
});
console.log("count1: ", count1);
setCount1((count1) => count + 2);