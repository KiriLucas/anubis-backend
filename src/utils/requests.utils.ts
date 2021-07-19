import { UserResponseDto } from "src/system/user/dtos/userResponse.dto"

export class RequestUtils {

    async getHeader(user: UserResponseDto) {
        return { headers: { 'Authorization': `Token ${user.token}` } }
    }
}