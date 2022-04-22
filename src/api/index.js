import axios from "axios";
import router from "../router/index";


async function sendRequest(method, url, params = {}) {
  try {
    let req = {
      method,
      url,
      resposeType: "json",
    };
    req.params = params;

    const res = await axios(req);
    return res;
  } catch (e) {
    await router.push({
      name: "NotFound",
    });
  }

}

export { sendRequest, sendServiceRequest };
