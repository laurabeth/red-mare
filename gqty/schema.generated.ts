/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface CreateUserInput {
  email: Scalars["String"];
  fName: Scalars["String"];
  lName: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
}

export interface GetUserInput {
  id: Scalars["ID"];
}

export interface LoginInput {
  email: Scalars["String"];
  password: Scalars["String"];
}

export interface SignupInput {
  email: Scalars["String"];
  fName?: InputMaybe<Scalars["String"]>;
  lName?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
}

export interface UpdateUserInput {
  address1?: InputMaybe<Scalars["String"]>;
  address2?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  fName?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  lName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  zip?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  ID: true,
  String: true,
};
export const generatedSchema = {
  Auth: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    token: { __type: "String!" },
    user: { __type: "User!" },
  },
  CreateUserInput: {
    email: { __type: "String!" },
    fName: { __type: "String!" },
    lName: { __type: "String!" },
    password: { __type: "String!" },
    phone: { __type: "String!" },
  },
  Error: { __typename: { __type: "String!" }, message: { __type: "String!" } },
  FeatureFlag: {
    __typename: { __type: "String!" },
    active: { __type: "Boolean!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
  },
  GetUserInput: { id: { __type: "ID!" } },
  LoginInput: { email: { __type: "String!" }, password: { __type: "String!" } },
  MutationLoginResult: {
    __typename: { __type: "String!" },
    $on: { __type: "$MutationLoginResult!" },
  },
  MutationLoginSuccess: {
    __typename: { __type: "String!" },
    data: { __type: "User!" },
  },
  MutationSignupResult: {
    __typename: { __type: "String!" },
    $on: { __type: "$MutationSignupResult!" },
  },
  MutationSignupSuccess: {
    __typename: { __type: "String!" },
    data: { __type: "User!" },
  },
  Posting: {
    __typename: { __type: "String!" },
    content: { __type: "[String!]!" },
    figures: { __type: "[String!]!" },
    id: { __type: "ID!" },
    published: { __type: "Boolean!" },
    title: { __type: "String!" },
  },
  Role: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
  },
  SignupInput: {
    email: { __type: "String!" },
    fName: { __type: "String" },
    lName: { __type: "String" },
    password: { __type: "String!" },
    phone: { __type: "String" },
  },
  UpdateUserInput: {
    address1: { __type: "String" },
    address2: { __type: "String" },
    city: { __type: "String" },
    email: { __type: "String" },
    fName: { __type: "String" },
    id: { __type: "ID!" },
    lName: { __type: "String" },
    password: { __type: "String" },
    phone: { __type: "String" },
    state: { __type: "String" },
    zip: { __type: "String" },
  },
  User: {
    __typename: { __type: "String!" },
    auth: { __type: "Auth!" },
    email: { __type: "String!" },
    fName: { __type: "String" },
    id: { __type: "ID!" },
    lName: { __type: "String" },
    phone: { __type: "String" },
    role: { __type: "Role!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    login: { __type: "MutationLoginResult", __args: { input: "LoginInput!" } },
    signup: {
      __type: "MutationSignupResult",
      __args: { input: "SignupInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    featureFlag: { __type: "FeatureFlag", __args: { name: "String!" } },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    MutationLoginResult: ["Error", "MutationLoginSuccess"],
    MutationSignupResult: ["Error", "MutationSignupSuccess"],
  },
} as const;

export interface Auth {
  __typename?: "Auth";
  id: ScalarsEnums["ID"];
  token: ScalarsEnums["String"];
  user: User;
}

export interface Error {
  __typename?: "Error";
  message: ScalarsEnums["String"];
}

export interface FeatureFlag {
  __typename?: "FeatureFlag";
  active: ScalarsEnums["Boolean"];
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
}

export interface MutationLoginResult {
  __typename?: "Error" | "MutationLoginSuccess";
  $on: $MutationLoginResult;
}

export interface MutationLoginSuccess {
  __typename?: "MutationLoginSuccess";
  data: User;
}

export interface MutationSignupResult {
  __typename?: "Error" | "MutationSignupSuccess";
  $on: $MutationSignupResult;
}

export interface MutationSignupSuccess {
  __typename?: "MutationSignupSuccess";
  data: User;
}

export interface Posting {
  __typename?: "Posting";
  content: Array<ScalarsEnums["String"]>;
  figures: Array<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  published: ScalarsEnums["Boolean"];
  title: ScalarsEnums["String"];
}

export interface Role {
  __typename?: "Role";
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
}

export interface User {
  __typename?: "User";
  auth: Auth;
  email: ScalarsEnums["String"];
  fName?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["ID"];
  lName?: Maybe<ScalarsEnums["String"]>;
  phone?: Maybe<ScalarsEnums["String"]>;
  role: Role;
}

export interface Mutation {
  __typename?: "Mutation";
  login: (args: { input: LoginInput }) => Maybe<MutationLoginResult>;
  signup: (args: { input: SignupInput }) => Maybe<MutationSignupResult>;
}

/**
 * The root query type.
 */
export interface Query {
  __typename?: "Query";
  featureFlag: (args: { name: Scalars["String"] }) => Maybe<FeatureFlag>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface $MutationLoginResult {
  Error?: Error;
  MutationLoginSuccess?: MutationLoginSuccess;
}

export interface $MutationSignupResult {
  Error?: Error;
  MutationSignupSuccess?: MutationSignupSuccess;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
