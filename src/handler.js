const AWS = require("aws-sdk");
const uuid = require("uuid");

module.exports.showtime = async (event) => {
  const showtimeTable = process.env.SHOWTIME_TABLE;

  const dynamoDbClientParams = {};
  if (process.env.IS_OFFLINE) {
    dynamoDbClientParams.region = "localhost";
    dynamoDbClientParams.endpoint = "http://localhost:8000";
  }

  const dynamoDbClient = new AWS.DynamoDB.DocumentClient(dynamoDbClientParams);

  let body, response;

  if (event.body) {
    body = JSON.parse(event.body);
  }

  if (event.path === "/createShowtime") {
    response = await createShowtime(dynamoDbClient, showtimeTable, body);
  } else if (event.path === "/getShowtime") {
    response = await getShowtime(
      dynamoDbClient,
      showtimeTable,
      event.queryStringParameters.title
    );
  }

  return {
    statusCode: response.statusCode,
    body: JSON.stringify(response.response, null, 2),
  };
};

const createShowtime = async (db, table, body) => {
  const uuidv4 = uuid.v4;
  let statusCode;
  const response = {};

  const params = {
    TableName: table,
    Item: {
      id: uuidv4(),
      ...body,
    },
  };

  try {
    await db.put(params).promise();
    statusCode = 200;
    response.data = params;
  } catch (error) {
    console.log(error);
    statusCode = 400;
    response.message = "Error: " + error;
  }

  return {
    statusCode,
    response,
  };
};

const getShowtime = async (db, table, title) => {
  let statusCode;
  const response = {};

  const params = {
    TableName: table,
    IndexName: "titleIndex",
    KeyConditionExpression: "title = :t",
    ExpressionAttributeValues: {
      ":t": title,
    },
  };

  try {
    const { Items } = await db.query(params).promise();

    if (Items.length) {
      console.log("Items", Items);

      statusCode = 200;
      response.data = Items;
    } else {
      statusCode = 404;
      response.data = [];
    }
  } catch (error) {
    console.log(error);
    statusCode = 400;
    response.message = "Error: " + error;
  }

  return {
    statusCode,
    response,
  };
};
