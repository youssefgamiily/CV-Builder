import { personalFieldTitles } from './data.js'
import { educationalFieldTitles } from './data.js'
import { experience} from './data.js'

export const returnInitData = ()=> {
  const initialPersonalData = {}
  personalFieldTitles.forEach(elem => {
    initialPersonalData[elem.content] = elem.defaultValue
  })
  const initialEduData = {}
  educationalFieldTitles.forEach(elem => {
    initialEduData[elem.content] = elem.defaultValue
  })
  const initialProfessionalData = {}
  experience.forEach(elem => {
    initialProfessionalData[elem.content] = elem.defaultValue
  })
  return [initialPersonalData, initialEduData, initialProfessionalData]
}
