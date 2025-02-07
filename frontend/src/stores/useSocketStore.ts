import { Socket, io } from 'socket.io-client';
import { defineStore } from "pinia";

// Définition du store pour gérer la connexion WebSocket
export const useSocketStore = defineStore("socket", {

    state: () => ({
        socket: null as Socket | null,
    }),
    actions: {
        connect() {
            this.socket = io('http://localhost:3000');
            this.socket.on('connect', () => {
                console.log('Connected to the WebSocket server');
                // this.emit('event', { message: 'Hello from the client!' });
            });
            this.socket.on('disconnect', () => {
                console.log('Disconnected from the WebSocket server');
            });
        },
        emit(event: string, data: any) {
            if (this.socket) {
                this.socket?.emit(event, data);
            } else {
                console.warn('⚠️ Socket not connected');
            }
        }
    }
});     
