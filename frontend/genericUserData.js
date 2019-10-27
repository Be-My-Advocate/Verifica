const patientObject = {
  id: 2,
  username: 'patient',
  password: 'patient',
  fname: 'Taylor',
  lname: 'Smith',
  email: 'tay@gmail.com',
  role: 'patient'
}

const advocateObject = {
  id: 1,
  username: 'advocate',
  password: 'advocate',
  fname: 'Zane',
  lname: 'Jackson',
  email: 'zane@gmail.com',
  role: 'advocate',
  location: {lat: '36', lng: '-115'},
}

const vegasLocation = {
  lat: 36.114647,
  lng: -115.172813
}

const calendarData = [
  {date: 'Tuesday, November 5th', data: 'Webinar w/ Jane C. @ 3pm'},
  {date: 'Friday, November 8th', data: 'Appointment w/ Dr.Joe @ 8am'},
  {date: 'Wednesday, November 13th', data: 'Women\'s Support Group @ 7pm'},
  {date: 'Thursday, November 21st', data: 'Learn About Humira @ 5pm'},
  {date: 'Friday, November 22nd', data: 'Video Chat w/ Kelsey'},
]

const learnData = ['Women\'s Support', 'About Humira', 'IBD Facts', 'Teen Issues', 'Women 18-35', 'What Now?', 'OMG IBD', 'Crohns', 'Diabetes in Women', 'Pregnancy over 40', 'Anxiety Medication', 'Coping With Depression']

const advocateLocationArray = [
  {
    id: 3,
    username: 'adv',
    password: 'adv',
    fname: 'John',
    lname: 'Doe',
    gender: 'Male',
    email: 'john@gmail.com',
    role: 'doctor',
    photo: require('./images/manone.jpg'),
    rating: 5,
    location: {lat: 36.1162, lng: -115.1745},
  },
  {
    id: 4,
    username: 'ad',
    password: 'ad',
    fname: 'Christina',
    lname: 'Ruiz',
    gender: 'Female',
    email: 'chris@gmail.com',
    role: 'advocate',
    photo: require('./images/womanone.jpg'),
    rating: 3,
    location: {lat: 36.1279, lng: -115.1610},
  },
  {
    id: 5,
    username: 'aaa',
    password: 'aaa',
    fname: 'Samantha',
    lname: 'Lane',
    gender: 'Female',
    email: 'sam@gmail.com',
    role: 'advocate',
    photo: require('./images/womantwo.jpg'),
    rating: 4,
    location: {lat: 36.1196, lng: -115.1581},
  },
  {
    id: 6,
    username: 'bbb',
    password: 'bbb',
    fname: 'Matt',
    lname: 'Williamson',
    gender: 'Male',
    email: 'matt@gmail.com',
    role: 'doctor',
    photo: require('./images/mantwo.jpg'),
    rating: 1,
    location: {lat: 36.1136, lng: -115.1621},
  },
  {
    id: 7,
    username: 'bbb',
    password: 'bbb',
    fname: 'Angelica',
    lname: 'Thompson',
    gender: 'Female',
    email: 'ang@gmail.com',
    role: 'doctor',
    photo: require('./images/womanthree.jpg'),
    rating: 5,
    location: {lat: 36.1186, lng: -115.1571},
  },
  {
    id: 8,
    username: 'bbb',
    password: 'bbb',
    fname: 'Brandon',
    lname: 'Lampkin',
    gender: 'Male',
    email: 'brand@gmail.com',
    role: 'advocate',
    photo: require('./images/manthree.jpg'),
    rating: 3,
    location: {lat: 36.1296, lng: -115.1583},
  },
  {
    id: 9,
    username: 'bbb',
    password: 'bbb',
    fname: 'Stephanie',
    lname: 'Hall',
    gender: 'Female',
    email: 'steph@gmail.com',
    role: 'advocate',
    photo: require('./images/womanfour.jpg'),
    rating: 2,
    location: {lat: 36.1396, lng: -115.1573},
  },
]

export const genericData = {
  patientObject, advocateObject, advocateLocationArray, vegasLocation, calendarData, learnData
}
