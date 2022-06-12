import PhonePrefixList from './phone.json'
import CountryNameList from './names.json'

type PrefixObject = {
  [key: string]: string
}

const pPrefixList = () => {
  const countryCode = Object.keys(PhonePrefixList)
  return countryCode.map( (phoneKey: string) => {
    let phonePrefix = PhonePrefixList[phoneKey as keyof typeof PhonePrefixList]
    let countryName = CountryNameList[phoneKey as keyof typeof CountryNameList]
    
    return {
        prefix: phonePrefix,
        name: countryName
      }
  })
}

const tPrefixList = () => {
  const countryCode = Object.keys(CountryNameList)
  return countryCode.map( (ctKey: string) => {
    return CountryNameList[ctKey as keyof typeof CountryNameList]
  })
}

export {
  pPrefixList,
  tPrefixList
}