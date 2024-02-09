const formatDate = (date: string = "", includeDay: boolean = false, includeMonth: boolean = false) => {
  if(date !== "") {
    const dateSplit: string[] = date.split("-")
    const newDate: Date = new Date(parseInt(dateSplit[0]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[2]))
  
    const day: number = newDate.getDate()
    const month: number = newDate.getMonth() + 1
    const year: number = newDate.getFullYear()
  
    const formatedDay: string = includeDay ? (day < 10 ? '0' + day : day.toString()) : ''
    const formatedMonth: string = includeMonth ? (month < 10 ? '0' + month : month.toString()) : ''
    const monthName: string = includeMonth ? getMonthName(month) : ''

  
    const dateParsed: string = `${ includeDay ? formatedDay + ' de ' : '' }${ includeMonth ? monthName + ' del ' : '' }${ year }`
  
    return dateParsed
  } else return "Actualidad"
}

const getMonthName = (month: Number) => {
    const months: string[] = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]
    
    return months[parseInt(month.toString()) - 1]
}

const UUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export { formatDate, UUID }