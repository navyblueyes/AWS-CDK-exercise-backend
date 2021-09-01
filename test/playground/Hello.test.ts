import { handler } from "../../services/SpacesTable/Create";

const event = {
  body: {
    location: "Paris",
  },
};

const result = handler({} as any, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(1123);
});
