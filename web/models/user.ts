import { Key } from "./types";

export interface UserCredential {
  readonly id?: Key;
  readonly user: Key;
  readonly name?: string;
  readonly phoneNumber?: string;
  readonly email?: string;
  readonly accountId: string;
  readonly password?: string;
}

export type CompanySizeType = 'SBO' | 'SME' | 'ME' | 'LE';

export interface CompanyInfo {
  readonly id?: Key;
  readonly user: Key;
  readonly registrationNumber?: string;
  readonly ownerName?: string;
  readonly establishmentDate?: Date;
  readonly companySize?: CompanySizeType;
}

export interface User {
  readonly id: Key;
  readonly credential?: UserCredential;
  readonly companyInfo?: CompanyInfo;
  readonly isActive?: boolean;
  readonly updatedAt?: number;
  readonly createdAt?: number;
}
