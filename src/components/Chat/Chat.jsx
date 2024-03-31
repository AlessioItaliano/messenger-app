import { useEffect, useState } from 'react';
// import { Context } from 'index';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { serverTimestamp, doc, setDoc } from 'firebase/firestore';
import {
  // doc,
  // setDoc,
  addDoc,
  // getDoc,
  orderBy,
  query,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { app, auth } from '../../firebase';

import * as s from './Chat.styled';
import Button from 'components/Button';
// import { onAuthStateChanged } from 'firebase/auth';

const db = getFirestore(app);

const Chat = () => {
  const user = auth.currentUser;
  // const { auth, firestore } = useContext(Context);
  console.log(user);
  // const [user] = useAuthState(auth);
  // const [messages, loading] = useCollectionData(
  //   firestore.collection('messages').orderBy('createdAt')
  // );

  // const [inputValue, setInputValue] = useState('');
  // const [user, setUser] = useState(null);
  // console.log(user);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  // console.log(firestore);

  // const sentMessage = async () => {
  //   await addDoc(doc(db, 'messages'), {
  //     uid: user.uid,
  //     photoURL: user.photoURL,
  //     displayName: user.displayName,
  //     text: setNewMessages,
  //     timestamp: serverTimestamp(),
  //   });
  //   setNewMessages('');
  // };

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage('');
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // });

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <s.Container>
      <s.Chat>
        <div>
          {messages.map(msg => (
            <s.ChatMessage key={msg.id} $ownMessage={msg.data.uid === user.uid}>
              <s.Message $ownMessage={msg.data.uid === user.uid}>
                <img src={msg.data.photoURL} alt="avatar_of_user" />
                <p>{msg.data.displayName}</p>
                {msg.data.text}
              </s.Message>
            </s.ChatMessage>
          ))}
        </div>
      </s.Chat>
      <s.Form onSubmit={handleSubmit}>
        <s.Input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <Button name="submit" />
      </s.Form>
    </s.Container>
  );
};

export default Chat;
