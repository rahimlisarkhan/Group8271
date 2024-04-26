import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/faqs").reply(200, {
  faqs: [
    { title: "Lorem", desc: "Lorep ipsum", id: 1 },
    { title: "Lorem2", desc: "Lorep ipsum2", id: 2 },
  ],
});

export const getFaqs = async () => {
  const response = await axios({ method: "GET", url: "faqs" });
  return response;
};

// export const getFaqs = async () => {
//     const response = await instanceAxios({ method: "GET", url: "faqs" });
//     return response;
//   };
