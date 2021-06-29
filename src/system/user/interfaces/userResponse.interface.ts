import { UserResponseDto } from "../dtos/userResponse.dto";

export interface UserResponseInterface {
    user: UserResponseDto & { token: string }        
}