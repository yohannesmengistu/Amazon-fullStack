// import axios from "axios";
// const instance=axios.create({
//     //THE API {CLOUD FUNCTION} URL
// baseURL:'http://127.0.0.1:5001/client-ba23e/us-central1/api'
// // baseURL:'https://amazon-only-backend.onrender.com'

// });
// export default instance;

import axios from "axios";
const instance = axios.create({
	baseURL: "http://127.0.0.1:10000",
	// baseURL: "http://127.0.0.1:5001/clone-54cab/us-central1/api",
});
export default instance;