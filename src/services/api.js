import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const filter = (occorences, type) => {
  const filtered = occorences.filter(occorence => occorence.category == type)

  return filtered;
}

export const changeBar = (e) => {
  return e.replaceAll('-', ' ')
}

export const findOccurenceNumber = (occurences, number) => {
  const filtered = occurences.find(occurence => occurence.occorenceNumber == number)

  console.log(filtered)
  return filtered;
}

export const sendData = async (id, on, os) => {
  api.patch(`occurences/${id}`, { occurenceNumber: on, situation: os })

}