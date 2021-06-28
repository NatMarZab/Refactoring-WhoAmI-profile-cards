const apiData = (data) => {
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
export default apiData;
