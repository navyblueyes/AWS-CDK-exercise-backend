import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "../../services/SpacesTable/Create";

const event: APIGatewayProxyEvent = {
  /*queryStringParameters: {
    spaceId: "983a6935-0df8-40df-bad1-24137f9519d5",
    //location: "London",
  },*/
  body: {
    name: "someName",
  },
} as any;

const result = handler(event, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(1123);
});
