const sample = [
  {
    course: "EN.601.226 Data Structure",
    instructor: "Ali Madooei",
    time: "MWF 12:00 - 1:15 PM",
    link: "https://wse.zoom.us/j/91907049828",
  },
  {
    course: "EN.601.226 Data Structure",
    instructor: "Ali Madooei",
    time: "MWF 1:30 - 2:45 PM",
    link: "https://wse.zoom.us/j/99066784665",
  },
  {
    course: "EN.601.280 Full-Stack JavaScript",
    instructor: "Ali Madooei",
    time: "TuTh 12:00 - 1:15 PM",
    link: "https://wse.zoom.us/j/93926139464",
  },
  {
    course: "EN.601.280 Full-Stack JavaScript",
    instructor: "Ali Madooei",
    time: "TuTh 1:30 - 2:45 PM",
    link: "https://wse.zoom.us/j/91022779135",
  },
];

async function addSampleMeetings(meetings) {
  const data = await meetings.readAll();
  if (data.length === 0) {
    for (let i = 0; i < sample.length; i++) {
      await meetings.create(
        sample[i].course,
        sample[i].instructor,
        sample[i].time,
        sample[i].link
      );
    }
  }
}

module.exports = { addSampleMeetings };
