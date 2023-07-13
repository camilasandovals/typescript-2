interface IEmployee {
  id: number
  firstName: string
  lastName: string
  age: number
  cool?: boolean
  apps?: {appName: string, production: boolean}
}

interface IManager extends IEmployee {
  salaryTier: number
}

const employess: IEmployee[] = [{id: 12, firstName: "Idan", lastName: "fischer" , age: 35}]

let student1: IEmployee = {
  id: 35,
  firstName: 'camila',
  lastName: 'sandoval',
  age: 26,
  cool: true,
  apps: {appName: 'slack', production: true}
}

let manager1 : IManager = {
  id: 36,
  firstName: 'jonathan',
  lastName: 'sanchez',
  age: 35,
  salaryTier: 2
}