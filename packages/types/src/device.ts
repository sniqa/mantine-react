import { WithId } from "./common";

export interface UsbKeyInfo {
  number: string;
  state: string;
  user: string;
  enable_timestamp: number;
  collection_timsetamp: number;
  return_timestamp: number;
  remark: string;
  create_timestamp: number;
  last_modify_timestamp: number;
}

export type UsbKeyInfoWithId = UsbKeyInfo & WithId;
