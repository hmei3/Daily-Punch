import { UserStatus } from './UserStatus.modal';

export interface StatusList {
    currentStatus: UserStatus[];
    totalUserNum: number;
    uncompletedUserNum: number;
}
