import { io, Socket } from 'socket.io-client';
import { IWebSocketMessage } from '../models/WebSocketMessage';

class SocketService {
  private socket: Socket;
  private apiBaseUrl = 'http://127.0.0.1:5000'

  constructor() {
    this.socket = io(this.apiBaseUrl); // Replace with your server URL
  }

  public connect(): void {
    this.socket.connect();
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  public subscribeToMessages(eventType: string, callback: (message: IWebSocketMessage) => void): void {
    this.socket.on(eventType, callback);
  }

  public unsubscribeFromMessages(eventType: string, callback: (message: IWebSocketMessage) => void): void {
    this.socket.off(eventType, callback);
  }
}

export default new SocketService();