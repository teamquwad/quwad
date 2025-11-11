let url = import.meta.env.VITE_BackEnd_URL
// let url = 'http://localhost:8000'

async function joinWaitingList(payload) {
  // console.log(payload)

  try {
    let res = await fetch(`${url}/waitinglist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    let data = res.json()
    return data
  } catch (error) {
    // console.log(error);
    return { code: 0, msg: 'Something went wrong.', error }
  }
}

export { joinWaitingList }
