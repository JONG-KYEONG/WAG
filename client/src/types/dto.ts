// 닉네임 중복확인 get response
export interface INicknamePossible {
  possible: boolean;
  nickName: string;
}

// 닉네임 get
export interface IGetNickname {
  nickname: string;
}

// 코드로 방 입장
export interface IGetRoomIdCode {
  roomId?: string;
}

// 방 생성
export interface IRoomCreate {
  isPrivateRoom: boolean;
  userNickName: string;
}

// 방 정보 get response
export interface IRoomResponseInfo {
  gameStatus: boolean,
  privateRoom: boolean,
  roomEnterCode: Number,
  roomId: Number,
  userCount: Number,
  userDtos: Array<Object>,
}

//소켓으로 주고받는 채팅 객체
export interface ChatMessage {
  messageType : string
  sender: string; // 사용자 이름
  content: string; // 메시지 텍스트
  roomId : number;
  isPrivateRoom : boolean;
}