import axios from "axios";

const baseUrl = import.meta.env.BASE_URL;

const ping = async () => {
  const res = await axios.get<string>(
    `${baseUrl}/ping`
  );
  return res.data;
}

export default {
  ping
}