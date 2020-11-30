import { Table, VerificationLevel } from "../types";

export interface User {
  id: string;
  admin: boolean;
  username: string;
  email: string;
  created_timestamp: string;
  password_hash: string;
  avatar_url: string;
  verification: VerificationLevel;
}

export const table: Table = {
  name: "users",
  cols: {
    id: {
      datatype: "TEXT",
      required: true,
      primaryKey: true,
      default: "uuid_generate_v4()",
    },
    admin: {
      datatype: "BOOLEAN",
      default: "'false'",
    },
    username: {
      datatype: "TEXT",
      required: true,
      unique: true,
    },
    email: {
      datatype: "TEXT",
      required: true,
      unique: true,
    },
    password_hash: {
      datatype: "TEXT",
      required: true,
    },
    created_timestamp: {
      datatype: "TIMESTAMPTZ",
      required: true,
      default: "CURRENT_TIMESTAMP",
    },
    avatar_url: {
      datatype: "TEXT",
      default: "'/avatars/default'",
      required: true,
    },
    verification: {
      datatype: "TEXT",
      default: "'not_sent'",
      required: true,
    },
  },
};
