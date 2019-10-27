import { VideoCallManager } from './../manager/videocall';

export const startVideoRoom = async (req, res) => {
  const { roomName } = req.body;

  const token = await VideoCallManager.createRoomByName(roomName);

  token !== null 
    ? res.status(200).json({ url: `https://harryhong.daily.co/${roomName}?t=${token}` }) 
    : res.status(400).send("error starting video room");  
};