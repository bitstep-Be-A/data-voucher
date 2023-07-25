import { Key } from "@/models/types";
import {
  CompanySizeType
} from "@/models/user";

export interface UserData {
  isActive?: boolean;
}

export interface UserCredentialData {
  userId: Key;
  email: string;
  password: string;
  phoneNumber: string;
  name: string;
}

export interface CompanyInfoData {
  userId: Key;
  registrationNumber: string;
  ownerName: string;
  establishmentDate: Date;
  companySize: CompanySizeType
}
