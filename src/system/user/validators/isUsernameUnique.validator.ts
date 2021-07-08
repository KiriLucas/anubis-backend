import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUsernameUniqueValidation implements ValidatorConstraintInterface {
    constructor(private readonly userService: UserService) { }

    async validate(username: string, validationArguments?: ValidationArguments): Promise<boolean> {
        return !!!await this.userService.getUserByUsername(username)
    }

    defaultMessage(args: ValidationArguments) {
        return `Username is already taken!`;
    }
}

export function IsUsernameUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isUsernameUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUsernameUniqueValidation
        });
    };
}

