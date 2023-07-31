import axios  from "axios";
const BASE_URL="http://localhost:2023/";
const getquiz=()=>axios.get(BASE_URL+"showques"); 
export default getquiz;

