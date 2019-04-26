import axios from 'axios';

const OK = 200;

export async function isPageAlive(url) {
  try {
    const resp = await axios.get(url, {
      timeout: 3 * 1000,
    });
    return resp.status === OK;
  } catch (ignore) {
    return false;
  }
}
