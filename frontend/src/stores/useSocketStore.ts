import { io, Socket } from 'socket.io-client';
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Définition du store pour gérer la connexion WebSocket
export const useSocketStore = defineStore("socket", () => {
    // Référence pour stocker l'instance de Socket.IO
    const socket = ref<Socket | null>(null);
    const isConnected = ref(false);

    // Initialiser la connexion WebSocket
    const initSocket = () => {
        if (!socket.value) {
            socket.value = io("http://localhost:3000");

            socket.value.on("connect", () => {
                console.log("✅ Connecté au WebSocket :", socket.value?.id);
                isConnected.value = true;
            });

            socket.value.on("disconnect", () => {
                console.log("❌ Déconnecté du WebSocket");
                isConnected.value = false;
            });
        }
    };

    // Déconnexion propre
    const disconnectSocket = () => {
        if (socket.value) {
            socket.value.disconnect();
            socket.value = null;
            isConnected.value = false;
        }
    };

    // Envoyer un message via WebSocket
    const sendMessage = (event: string, data: any) => {
        if (socket.value) {
            socket.value.emit(event, data);
        } else {
            console.warn("⚠️ Socket non connecté");
        }
    };

    // Getter pour savoir si le socket est actif
    const isSocketConnected = computed(() => isConnected.value);

    return {
        socket,
        isConnected,
        initSocket,
        disconnectSocket,
        sendMessage,
        isSocketConnected,
    };
});