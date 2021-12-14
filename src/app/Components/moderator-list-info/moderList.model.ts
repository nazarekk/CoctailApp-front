export class moderInfo{
  userid: string;
  nickname: string;
  email: string;
  isActive: boolean;

  constructor(
    userid: string,
    nickname: string,
    email: string,
    isActive: boolean
  ) {
    this.userid = userid;
    this.nickname = nickname;
    this.email = email;
    this.isActive = isActive;
  }
}

