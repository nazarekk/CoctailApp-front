export class moderInfo{
  userid: string;
  nickname: string;
  email: string;
  isActive: boolean;
  image: string;

  constructor(
    userid: string,
    nickname: string,
    email: string,
    isActive: boolean,
    image: string
  ) {
    this.userid = userid;
    this.nickname = nickname;
    this.email = email;
    this.isActive = isActive;
    this.image = image;
  }
}

