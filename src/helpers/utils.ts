export function convertTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)

  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear()

  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}
