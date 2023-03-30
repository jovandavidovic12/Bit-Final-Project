export const getCandidates = () => {
   let candidates =  fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch(error => console.log(error))

      return candidates;
}


export const getCompanies = () => {
    let candidates =  fetch(`http://localhost:3333/api/reports`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      return data;
    })
    .catch(error => console.log(error))
   
    return candidates;
    

}

