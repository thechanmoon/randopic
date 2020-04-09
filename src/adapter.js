class Adapter
{
    static getData(url, id = '')
    {
        url = id =='' ? url : `${url}/${id}`
        return fetch(url).then(res=>res.json())
    }

    static createData(url,data)
    {
        const option = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        return fetch(url,option).then(res=>res.json())
    }

    static deleteData(url,id)
    {
        url = `${url}/${id}`

        const option = {
            method: "DELETE"
        }
        return fetch(url,option).then(res=>res.json())
    }
}

/*
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
*/