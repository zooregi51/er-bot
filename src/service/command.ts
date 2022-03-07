import axios from 'axios';
import dotenv from 'dotenv';
import { ICommand } from './command.interface';
import { User, UserStats } from './user.interface';
dotenv.config();

const headers = {
  accept: 'application/json',
  'x-api-key': process.env.API_KEY!,
};

export class Command implements ICommand {
  async getUserNum(userName: string): Promise<number> {
    const res = await axios.get<User>(
      encodeURI(`${process.env.BASE_URL}/v1/user/nickname?query=${userName}`),
      {
        headers,
      },
    );

    const userNum = res.data.user.userNum;
    return userNum;
  }

  async getUserStats(userNum: number, seasonId: number): Promise<any> {
    const res = await axios.get<UserStats>(
      encodeURI(`${process.env.BASE_URL}/v1/user/stats/${userNum}/${seasonId}`),
      {
        headers,
      },
    );

    const userStatsJson = JSON.parse(JSON.stringify(res.data.userStats));
    const userStatsArr = [];
    for (const stat of userStatsJson) {
      userStatsArr.push(stat);
    }

    console.log(userStatsArr);
    return userStatsArr;
  }
}
