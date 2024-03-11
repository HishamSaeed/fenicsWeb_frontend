import { Observable, Subscription, Subject } from "rxjs"
import SocketService from './SocketService';
import { IWebSocketMessage } from '../models/WebSocketMessage';

class ApiServiceNew {

    public subscribeToObservable(eventType: string): Observable<IWebSocketMessage> {
        const subject: Subject<IWebSocketMessage> = new Subject<IWebSocketMessage>();
        SocketService.subscribeToMessages(eventType, (message: IWebSocketMessage) => {
            subject.next(message);
        })
        return subject.asObservable();
    }
}

export default new ApiServiceNew();
