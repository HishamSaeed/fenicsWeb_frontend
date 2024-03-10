
export interface IWebSocketMessage {
    value: number;
    defaultValue: number;
    maximum: number;
    minimum: number;
}

export interface IComponentValue {
    value: number;
    defaultValue: number;
    maximum: number;
    minimum: number;
    disabled?: number;
    unit: string;
    units?: Array<string>
}