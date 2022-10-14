const Teacher = require("../models/Users");

exports.getTeachersService = async (filters, queries) => {
  const teachers = await Teacher.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  // const total = await Teacher.countDocuments(filters);
  // const page = Math.ceil(totalProducts / queries.limit);
  return teachers;
};
