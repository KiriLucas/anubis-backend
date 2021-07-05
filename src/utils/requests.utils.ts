import { UserResponseDto } from "src/system/user/dtos/userResponse.dto"

export class RequestUtils {

    async requestObjectGet(service: string, path: number, user: UserResponseDto) {
        const requestUrl = {
            url:
                process.env.URL + service + path,
            header: { headers: { 'Authorization': `Token ${user.token}` } }
        }

        return requestUrl
    }

    async requestObjectPost(service: string, user: UserResponseDto) {
        const requestUrl = {
            url:
                process.env.URL + service,
            header: { headers: { 'Authorization': `Token ${user.token}` } }
        }

        return requestUrl
    }
}