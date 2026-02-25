import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    parentsName: string;
    childsName: string;
    message: string;
    timestamp: Time;
    phoneNumber: string;
    childsAge: bigint;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissionsSortedByTimestamp(): Promise<Array<ContactSubmission>>;
    submitContactForm(childsName: string, parentsName: string, phoneNumber: string, childsAge: bigint, message: string): Promise<void>;
}
