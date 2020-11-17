const MeetingDao = require("../model/MeetingDao.js");
const express = require("express");
const { addSampleMeetings } = require("../data/meetings.js");
const router = express.Router();

const meetings = new MeetingDao();
addSampleMeetings(meetings).catch((err) => console.log(err));

router.get("/api/meetings", (req, res) => {
  meetings
    .readAll()
    .then((meetings) => res.json({ data: meetings }))
    .catch((err) => errorHandler(res, 500, err));
});

router.get("/api/meetings/:id", (req, res) => {
  const id = req.params.id;
  meetings
    .read(id)
    .then((meetings) => res.json({ data: meetings }))
    .catch((err) => errorHandler(res, 500, err));
});

router.post("/api/meetings", (req, res) => {
  const course = req.body.course;
  const instructor = req.body.instructor;
  const time = req.body.time;
  const link = req.body.link;

  meetings
    .create(course, instructor, time, link)
    .then((meeting) => res.status(201).json({ data: meeting }))
    .catch((err) => errorHandler(res, 400, err));
});

router.delete("/api/meetings/:id", (req, res) => {
  const id = req.params.id;
  meetings
    .delete(id)
    .then((meeting) =>
      meeting
        ? res.json({ data: meeting })
        : errorHandler(res, 404, "Resource not found")
    )
    .catch((err) => {
      errorHandler(res, 400, err);
    });
});

router.patch("/api/meetings/:id", (req, res) => {
  const id = req.params.id;
  const link = req.body.link;

  meetings
    .update(id, link)
    .then((meeting) =>
      meeting
        ? res.json({ data: meeting })
        : errorHandler(res, 404, "Resource not found")
    )
    .catch((err) => errorHandler(res, 400, err));
});

function errorHandler(res, status, error) {
  res.status(status).json({
    errors: [
      {
        status: status,
        detail: error.message || error,
      },
    ],
  });
}

module.exports = router;
