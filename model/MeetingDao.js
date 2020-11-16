const Meeting = require("./Meeting");

class MeetingDao {
  constructor() {}

  async create(course, instructor, time, link) {
    const meeting = await Meeting.create({ course, instructor, time, link });
    return meeting;
  }

  async readAll() {
    const meeting = await Meeting.find();
    return meeting;
  }

  async read(id) {
    const meeting = await Meeting.findById(id);
    return meeting;
  }

  async update(id, link) {
    const meeting = await Meeting.findByIdAndUpdate(
      id,
      { link },
      { new: true, runValidators: true }
    );
    return meeting;
  }

  async delete(id) {
    const meeting = await Meeting.findByIdAndDelete(id);
    return meeting;
  }
}

module.exports = MeetingDao;
