const testVar = {}

function testFunc() {
  // return "hi"
  console.log("jskdjsdk")
}

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return result ? result.year : result
}
