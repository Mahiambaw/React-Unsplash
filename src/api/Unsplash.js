import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: "Client-ID gMZLaJzbV1_6Y4ZXSyiFs_v415flQiF9RYF9C4rnKfI"
  }
})