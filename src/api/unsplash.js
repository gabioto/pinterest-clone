import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID CmDhOKTXApskTHil7xVC4RDMgcCqv9RR08vKrP4X7zY"
    }
})