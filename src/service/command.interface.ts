export interface ICommand {
  getUserNum(userName: string): void;
  getUserStats(userNum: any, seasonId: string): void;
}
