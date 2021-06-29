import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserResponseDto {
        @Expose()
        username: string;
        
        @Expose()
        realName: string;
        
        @Expose()
        email: string;
        
        @Expose()
        bio: string;

        @Expose()
        image: string;

        @Expose()
        token: string;
}