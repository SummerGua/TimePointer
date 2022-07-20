export const checkStorage = (...storageNames: string[]): boolean => {
  for (let i of storageNames) {
    if (!localStorage.getItem(i)) {
      return false
    }
  }
  return true
}

interface iStorageTime {
  startTime: string,
  endTime: string
}

export const getLocalStorage = (...storageNames: string[]): iStorageTime => {
  let result: iStorageTime = {
    startTime: '',
    endTime: ''
  }
  for (let i of storageNames) {
    Object.assign(result, { i: localStorage.getItem(i)})
  }
  return result
}