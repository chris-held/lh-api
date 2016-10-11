/**
 * Created by chris.held on 10/11/16.
 */
//TODO - should create mock data and store it in memory somewhere else,
//where the server can get at it and we can modify with rest routes
const mockData = [
  {
    id: 1,
    name: "Test Data",
    imageUrl: null,
    description: "This is mock data"
  }
];

module.exports = {
  get: (req, res) => {
    res.json(mockData[0]);
  },

  find: (req, res) => {
    res.json(mockData);
  },

  create: (req, res) => {
    res.status(201).json({id: 2})
  },

  update: (req, res) => {
    mockData[0].description = "Updated description";
    res.json(mockData[0]);
  },

  delete: (req, res) => {
    res.status(200).send();
  },

  users: (req, res) => {

  }
};
