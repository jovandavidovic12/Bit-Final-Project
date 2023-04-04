export const getCandidates = () => {
  return fetch("http://localhost:3333/api/candidates")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const getAllReports = () => {
  return fetch(`http://localhost:3333/api/reports
    `)
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
      return data;
    })
    .catch((error) => console.log(error));
};
