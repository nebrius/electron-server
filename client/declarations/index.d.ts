import { IMessage } from './common/common.js';
export declare type MessageListener = (msg: IMessage) => void;
export declare function init(port: number): Promise<void>;
export declare function sendMessage(msg: IMessage): void;
export declare function addMessageListener(listener: MessageListener): void;