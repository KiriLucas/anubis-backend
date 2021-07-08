import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueValidation implements ValidatorConstraintInterface {
    constructor(private readonly userService: UserService) { }

    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        return !!!await this.userService.getUserByEmail(email)
    }

    defaultMessage(args: ValidationArguments) {
        return `Email is already being used!`;
    }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isEmailUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUniqueValidation
        });
    };
}

