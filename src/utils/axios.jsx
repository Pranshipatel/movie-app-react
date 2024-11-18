import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTU4ZDVhNTA0M2RlMTFjZjhhMTIwYWYwMWRiZDJlMSIsIm5iZiI6MTczMTgyMDI0Ni42NTM2OTQyLCJzdWIiOiI2NzMzM2Y2NDI5YWE4ZmYyNDRjMGViOTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jUfU-Cbcpmo_PkwoQKqxj0a-oqGzdafgR6v5aNrEgZw'
      }
})

export default instance