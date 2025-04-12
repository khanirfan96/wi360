// import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
// import io from 'socket.io-client';

// interface SocketContextType {
//   isConnected: boolean;
//   sendMessage: (event: string, message: any) => void;
//   connect: (sid?: string) => void;
//   disconnect: () => void;
// }

// const SocketContext = createContext<SocketContextType>({
//   isConnected: false,
//   sendMessage: () => {},
//   connect: () => {},
//   disconnect: () => {},
// });

// export const useSocket = () => useContext(SocketContext);

// export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [currentSid, setCurrentSid] = useState<string | undefined>();

//   const connect = (sid?: string) => {
//     // if (socketRef.current?.connected) {
//     //   console.log('Socket already connected with SID:', socketRef.current.id);
//     //   return;
//     // }

//     // console.log('Initializing socket connection...');
//     // const queryParams: any = {
//     //   EIO: '3',
//     // };

//     // // Add SID to query params if provided
//     // if (sid) {
//     //   queryParams.sid = sid;
//     //   setCurrentSid(sid);
//     // }

//     const socket = io('https://io.wi360.net:10000', {
//       transports: ['websocket', 'polling'],
//       reconnection: true,
//       reconnectionAttempts: 5,
//       reconnectionDelay: 1000,
//       query: queryParams,
//       timeout: 10000,
//       forceNew: true,
//       autoConnect: false
//     });

//     socket.on('transport', (transport:any) => {
//       console.log('Transport changed to:', transport);
//     });

//     socket.on('connecting', () => {
//       console.log('Attempting to connect...');
//     });

//     socket.on('connect', () => {
//       console.log('Socket.IO Connected with ID:', socket.id);
//       // Store the new SID if we didn't provide one
//       if (!sid) {
//         setCurrentSid(socket.id);
//       }
//       try {
//         const transport = (socket as any).io?.engine?.transport;
//         if (transport) {
//           console.log('Current transport:', transport.name);
//           console.log('Current SID:', socket.id);
//         }
//       } catch (error) {
//         console.log('Could not access transport info:', error);
//       }
//       setIsConnected(true);
//     });

//     socket.on('connect_error', (error:any) => {
//       console.error('Connection Error:', error.message);
//       console.error('Error details:', error);
      
//       socket.disconnect().connect();
//     });

//     socket.on('24e124535e337821', () => {
//       console.error('data');
//     });

//     socket.on('error', (error:any) => {
//       console.error('Socket error:', error);
//     });

//     socket.on('disconnect', (reason:any) => {
//       console.log('Socket.IO Disconnected. Reason:', reason);
//       try {
//         const transport = (socket as any).io?.engine?.transport;
//         if (transport) {
//           console.log('Last transport used:', transport.name);
//         }
//       } catch (error) {
//         console.log('Could not access transport info:', error);
//       }
//       setIsConnected(false);
//     });

//     socket.onAny((eventName:any, ...args:any) => {
//       console.log('Received event:', eventName, 'with data:', args);
//       console.log('Current SID:', socket.id);
//       try {
//         const transport = (socket as any).io?.engine?.transport;
//         if (transport) {
//           console.log('Current transport:', transport.name);
//         }
//       } catch (error) {
//         console.log('Could not access transport info:', error);
//       }
//     });

//     socketRef.current = socket;
//     socket.connect();
//   };

//   const disconnect = () => {
//     if (socketRef.current) {
//       console.log('Disconnecting socket...');
//       console.log('Last SID:', socketRef.current.id);
//       socketRef.current.disconnect();
//       socketRef.current = null;
//       setIsConnected(false);
//     }
//   };

//   const reconnectWithSid = () => {
//     if (currentSid) {
//       console.log('Reconnecting with SID:', currentSid);
//       connect(currentSid);
//     } else {
//       console.log('No SID available, connecting fresh');
//       connect();
//     }
//   };

//   const sendMessage = (event: string, message: any) => {
//     if (socketRef.current?.connected) {
//       const payload = {
//         ...message,
//         sid: currentSid // Include SID in payload
//       };
      
//       console.log('Sending message:', event, payload);
//       try {
//         const transport = (socketRef.current as any).io?.engine?.transport;
//         if (transport) {
//           console.log('Current transport:', transport.name);
//         }
//       } catch (error) {
//         console.log('Could not access transport info:', error);
//       }
//       console.log('Current SID:', socketRef.current.id);
//       socketRef.current.emit(event, payload);
//     } else {
//       console.warn('Socket is not connected');
//       reconnectWithSid();
//     }
//   };

//   useEffect(() => {
//     return () => {
//       disconnect();
//     };
//   }, []);

//   return (
//     <SocketContext.Provider
//       value={{
//         socket: socketRef.current,
//         isConnected,
//         sendMessage,
//         connect,
//         disconnect,
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// }; 

import io from 'socket.io-client';

// Replace with your server URL
// const SOCKET_URL = ; 


const socket = io('https://io.wi360.net:10000', {
  transports: ['websocket'], // Ensures WebSocket transport is used
  Eio:3,
  jsonp: false,
  reconnection: true, // Reconnect on disconnection
  reconnectionAttempts: 10, // Number of times to retry reconnection
  reconnectionDelay: 5000, // Delay between reconnection attempts
});

export default socket;