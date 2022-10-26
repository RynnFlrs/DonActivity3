const myAsync1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async1")
    }, 3000)
  })
  
  const myAsync2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async2")
    }, 2000)
  })
  
  const myAsync3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async3")
    }, 1000)
  })
  
  const myAsync4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async4")
    }, 3000)
  })

  // const myAsync4 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     try {
  //       throw new Error("forced error")
  //     } catch (err) {
  //        reject(err)
  //     }
  //   }, 3000)
  // })
  
  // 1. Need to fix this so that we run it in the proper sequence
  // 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
  // 3. should 
  const start = () => {
    myAsync1.then(function(c) {
      console.log(c)
      return (
        myAsync2.then(function(c) {
          console.log(c)
          return (
            myAsync3.then(function(c) {
              console.log(c)
              return (
                myAsync4.then(
                  function() {
                  console.log()
                })
              )
            })
          )
        })
      )
    })
  }
  
  start()
  
  // Convert this using promises and name the file samplePromise.js
  // convert this to promise where everything is needed to be run in parallel and get all result. name the file samplePromis2.js
  // convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js