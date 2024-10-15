import { user } from "../db";

export class userService {
  public static async getMyUser() {
    return user[0];
  }
}
