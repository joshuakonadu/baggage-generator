const packlistFunctions = require("../utils/packlistfunctions");

exports.generatebaggagelist = async (req, res) => {
  try {
    const configureData = req.body.data;
    const stayTimeInDays = configureData.howLong.time;
    const { finalData, personinfo } =
      packlistFunctions.getFilteredResult(configureData);

    const result = {
      data: finalData,
      personinfo,
      days: stayTimeInDays,
    };

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};
