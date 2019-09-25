const generateRow = i => {
  const generateName = () => {
    const first = ['Tanner', 'Jason', 'Matt', 'Jannet', 'Lisa', 'Adam', 'Harry']
    const last = ['Jackson', 'Snout', 'Goldman']
    const rnd = (a) => a[Math.floor(Math.random() * a.length)]
    return `${rnd(first)} ${rnd(last)}`
  }
  return ({
    id: i,
    name: generateName(),
    age: 10 + Math.floor(Math.random() * 50)
  })
}

const rawData = [...Array(50).keys()].map(i => generateRow(i))

const requestData = (pageSize, page) => {
  return new Promise((resolve, reject) => {
    const res = {
      rows: rawData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(rawData.length / pageSize)
    }

    // Here we'll simulate a server response with 500ms of delay.
    setTimeout(() => resolve(res), 500)
  })
}

export default requestData
