import { Key } from "./types";

export interface UserCredential {
  readonly id?: Key;
  readonly user?: Key;
  name: string;
  phoneNumber: string;
  email: string;
  accountId: string;
  password: string;
}

export interface CompanyInfo {
  readonly id?: Key;
  readonly user?: Key;
  readonly registrationNumber: string;
  ownerName: string;
  readonly establishmentDate: Date;
  companySize: 'SBO' | 'SME' | 'ME' | 'LE';
}

export enum UserTypeEnum {
  Company=1,
  Person=2
}

export interface User {
  readonly id?: Key;
  readonly credential?: UserCredential;
  readonly companyInfo?: CompanyInfo;
  isActive: boolean;
  readonly updatedAt: number;
  readonly createdAt: number;
  userType: UserTypeEnum;
}
