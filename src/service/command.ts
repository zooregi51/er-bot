import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const headers = {
  accept: 'application/json',
  'x-api-key': process.env.API_KEY!,
};

export class Command {
  public getUserNum(userName: string) {
    axios
      .get(
        encodeURI(`${process.env.BASE_URL}/v1/user/nickname?query=${userName}`),
        {
          headers,
        },
      )
      .then((response) => {
        console.log('getUserNum', response.data);
        return response.data;
      })
      .catch((error) => {
        console.log('getUserNum', error);
      })
      .then((data) => {
        console.log('data', data);
        this.getUserStats(data.user.userNum, '0');
      });
  }

  public getUserStats(userNum: any, seasonId: string) {
    axios
      .get(
        encodeURI(
          `${process.env.BASE_URL}/v1/user/stats/${userNum}/${seasonId}`,
        ),
        {
          headers,
        },
      )
      .then((response) => {
        console.log('getUserStats', response.data);
      })
      .catch((error) => {
        console.log('getUserStats', error);
      });
  }
}
