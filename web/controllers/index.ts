import { Key } from "@/models/types"

export interface ControllerInterface<T> {
    get: (key?: Key, token?: string) => Promise<T>;
}
