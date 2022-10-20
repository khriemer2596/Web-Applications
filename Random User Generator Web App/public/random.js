'use strict'

function userString(person) {

   return (`
   Name: ${person.name.first}
   ${person.name.last},
   Phone Number: ${person.phone},
   Email: ${person.email}`)

}

function personData(person) {
   const pData = document.createElement('li')
   pData.textContent = userString(person)
   const ranData = document.getElementById('resultingData')
   ranData.appendChild(pData)
}

async function getRandomData(object) {
   object.preventDefault()
   const targetID = object.target.getAttribute('id')
   const link = targetID === 'fromTheBrowser' ? "https://randomuser.me/api": "/random-person"

   try {
      const res = await fetch(link)
      const data = await res.json()

      if (res.status == 200) {
         personData(data.results[0])
      }
   }

   catch (error) {
      console.error(error)
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const broswerURL = document.getElementById('fromTheBrowser')
   broswerURL.addEventListener('click', getRandomData)

   const serverURL = document.getElementById('fromTheServer')
   serverURL.addEventListener('click', getRandomData)
})
