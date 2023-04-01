export const getCandidates = () => {
  return fetch("http://localhost:3333/api/candidates")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const getReports = (id) => {
  return fetch(`http://localhost:3333/api/reports?candidateId=${id}
    `)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};
