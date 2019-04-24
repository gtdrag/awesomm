import axios from 'axios';
import { API_URL, HEADERS } from '../config';
import { parseResponse } from './response';

export default class API {
  // eslint-disable-next-line consistent-return
  static login = async (user, pass, token) => {
    try {
      const response = await axios.post(
        `${API_URL}Guide/Login`,
        {
          LoginName: user,
          Password: pass,
          DeviceToken: token,
        },
        { headers: HEADERS }
      );
      return parseResponse(response);
    } catch (error) {
      return { message: 'failed', payload: error };
    }
  };
}
