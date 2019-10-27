import Axios, {AxiosInstance} from "axios";
import * as constants from "../common/constants";

/**
 * Room object from Daily.co
 */
export interface Room {
    id: string,
    name: string,
    api_created: boolean,
    privacy: string,
    url: string,
    created_at: string,
    config: any
}

export class VideoCallManager {
    private static axios: AxiosInstance = Axios.create({
        baseURL: "https://api.daily.co/v1",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + constants.DAILY_CO_API_KEY
        },
    });

    /**
     * Get all rooms on the server.
     * @returns GetRoomsResp when success, {} when bad request
     */
    public static getRooms = async () => {
        const response = await VideoCallManager.axios.get("/rooms");
        if (response.status == 400) {
            console.log("VideoCallManager: Failed to request when getting room list");
            return {};
        }

        interface GetRoomsResp {
            total_data: number,
            data: Room[]
        }

        const data: GetRoomsResp = response.data;

        console.log(`VideoCallManager: This server have ${data.total_data} rooms`);

        return data;
    }

    /**
     * Get room by name.
     * @param roomName {String} Name of the room
     * @returns Room when success, {} when bad request
     */
    public static getRoomByName = async (roomName: string) => {
        const response = await VideoCallManager.axios.get("/rooms/" + roomName);
        if (response.status == 400) {
            console.log("VideoCallManager: Failed to request when getting room by name");
            return {};
        }

        const data: Room = response.data;
        return data;
    }

    /**
     * Create room by name.
     * @params roomName {String} Name of the room
     * @returns 
     */
    public static createRoomByName = async (roomName: string) => {
        const roomCreationResponse = await VideoCallManager.axios.post("/rooms", {
            name: roomName,
            privacy: "private", // Make sure the meeting token should be present to join
            properties: {
                enable_chat: true,
            }
        });
        console.log(roomCreationResponse.data);
        if (roomCreationResponse.status !== 200) {
            console.log("VideoCallManager: Room creation failed");
            return null;
        }

        const room: Room = roomCreationResponse.data;

        const meetingTokenResponse = await VideoCallManager.axios.post("/meeting-tokens", {
            properties: { room_name: roomName },
        });
        console.log(meetingTokenResponse.data);
        if (meetingTokenResponse.status !== 200) {
            console.log("VideoCallManager: Failed to add meeting token to existing room");
            return null;
        }

        const data: { token: string } = meetingTokenResponse.data;
        const token = data.token;
        console.log(`VideoCallManager: Room ${roomName} created`);

        return token;
    }

    /**
     * Delete room by name.
     * @params roomName {String} Name of the room
     * @returns boolean
     */
    public static deleteRoomByName = async (roomName: string) => {
        const response = await VideoCallManager.axios.delete("/rooms/" + roomName);
        if (response.status === 400) {
            console.log("VideoCallManager: Failed to request when trying to delete room");
            return false;
        }

        interface DeleteRoomByNameResp {
            deleted: boolean;
            name: string;
        }

        const data: DeleteRoomByNameResp = response.data;
        console.log(`VideoCallManager: Room ${roomName} deleted`);
        return data.deleted;
    }
}