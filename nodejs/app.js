const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  console.log(`started at ${Date.now()}`)
  await wait(100) // ms
  console.log(`ended at ${Date.now()}`)
}

if (require.main === module) {
  main()
}

export default main
