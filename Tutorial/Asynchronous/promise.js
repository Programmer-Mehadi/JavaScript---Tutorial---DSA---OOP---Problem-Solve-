const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  // do something
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google  Meet',
      time: '10:00 PM'
    }
    resolve(meetingDetails)
  }
  else {
    reject(new Error('Meeting Already Scheduled!'))
  }
})

const addToCalender = (meetingDetails) => {
  if (meetingDetails === undefined) {
    return Promise.reject(new Error('No Meeting Found!'))
  }
  const calender = `Event Name: ${meetingDetails.name}. Location: ${meetingDetails.location}. Time: ${meetingDetails.time}`
  return Promise.resolve(calender);
}


// calling promise
// meeting
//   .then(addToCalender)
//   .then((result) => {
//     console.log(result)
//   }).catch((error) => {
//     console.log(error.message)
//   })

//  ------- or -------

async function doWork() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  }
  catch (error) {
    console.log(error.message)
  }
}

doWork();


console.log('End of Program')