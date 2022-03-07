import { UserStats } from './user.interface';

export interface ICommand {
  getUserNum(userName: string): Promise<number>;
  getUserStats(userNum: number, seasonId: number): Promise<any>;
}
