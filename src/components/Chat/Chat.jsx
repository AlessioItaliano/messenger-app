import { useEffect, useState, useRef } from 'react';
import {
  addDoc,
  orderBy,
  query,
  onSnapshot,
  serverTimestamp,
  collection,
  where,
} from 'firebase/firestore';
import { auth, db, storage } from '../../FirebaseConfig';
import { nanoid } from 'nanoid';
import { FaPaperclip } from 'react-icons/fa6';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

import { onAuthStateChanged } from 'firebase/auth';

import { IoMdClose } from 'react-icons/io';

import * as s from './Chat.styled';
import Button from 'components/Button';
import Section from 'components/Section';
import Container from 'components/Container';
import ImageModal from 'components/ImageModal';

const Chat = () => {
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [room, setRoom] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [uploadDoc, setUploadDoc] = useState(null);
  const [imageList, setImageList] = useState('');
  const [sendToChat, setSendToChat] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [preUploadFile, setPreUploadFile] = useState('');
  const [shownModal, setShowModal] = useState(false);
  const [modalPicture, setModalPicture] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        const storedRoom = localStorage.getItem('room');
        setRoom(storedRoom);
      } else {
        setUser(null);
        localStorage.removeItem('room');
        setRoom('');
      }
    });
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
      room,
      file: imageList,
    });

    setNewMessage('');
  };

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      where('room', '==', room),
      orderBy('timestamp')
    );
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      scrollToBottom();
    });
    return unsubscribe;
  }, [room]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (newMessage.trim() === '' && imageList === '') {
      return;
    }

    await uploadFile();
    sendMessage();
    setSendToChat(false);

    setUploadDoc(null);
    setImageList('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCreateRoom = () => {
    const newRoom = nanoid();
    setRoom(newRoom);
    localStorage.setItem('room', newRoom);
  };

  const handleCopyRoomInvitation = async () => {
    await navigator.clipboard.writeText(room);
    setCopied(true);
  };

  const goToRoom = e => {
    e.preventDefault();
    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber);
  };

  const handleGoBack = () => {
    localStorage.removeItem('room');
    setRoom('');
  };

  useEffect(() => {
    if (uploadDoc) {
      uploadFile();
    }
  }, [uploadDoc]);

  const uploadFile = async () => {
    if (uploadDoc == null) return;
    setSendToChat(true);
    setLoadingImage(true);

    const imageName = uploadDoc.name + nanoid();
    setPreUploadFile(imageName);

    const imageRef = ref(storage, `images/room/${room}/${imageName}`);

    await uploadBytes(imageRef, uploadDoc)
      .then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setImageList(url);
          setLoadingImage(false);
        });
        // setUploadDoc(null);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setLoadingImage(false);
      });

    setUploadDoc(null);
  };

  const deletePreLoadFile = () => {
    setSendToChat(false);

    setUploadDoc(null);
    setImageList('');
    deleteObject(ref(storage, `images/room/${room}/${preUploadFile}`));
  };

  const onModal = imageUrl => {
    setModalPicture(imageUrl);
    setShowModal(prevShownModal => !prevShownModal);
  };

  return (
    <Section>
      <Container>
        {!room ? (
          <s.ChoiseContainer>
            <p>Do you want create new room ?</p>
            <Button func={handleCreateRoom} name="Create room" />
            <p>Click here or you have invitation?</p>
            <s.Form onClick={goToRoom}>
              <s.Input
                type="text"
                value={roomNumber}
                onChange={e => setRoomNumber(e.target.value)}
                placeholder="Insert your invitation here..."
              />
              <Button name="Go to Room" type="submit" />
            </s.Form>
          </s.ChoiseContainer>
        ) : (
          <>
            <s.Container>
              <s.ButtonContainer>
                <Button
                  name={copied ? 'Copied!' : 'Click here to copy invitation'}
                  type="button"
                  func={handleCopyRoomInvitation}
                  // disabled={copied}
                />
                <Button func={handleGoBack} name="Return" type="button" />
              </s.ButtonContainer>

              <s.Chat>
                <div>
                  {messages.map(message => (
                    <s.ChatMessage
                      key={message.id}
                      $ownMessage={message.data.uid === user.uid}
                    >
                      <s.Message
                        $ownMessage={message.data.uid === user.uid}
                        ref={messagesEndRef}
                      >
                        <s.Box>
                          <s.Image
                            src={message.data.photoURL}
                            alt="avatar_of_user"
                          />
                          <s.UserName>{message.data.displayName}</s.UserName>
                        </s.Box>
                        <s.Description>{message.data.text}</s.Description>

                        {s.DownloadFile && message.data.file && (
                          <s.DownloadFile
                            src={message.data.file}
                            alt="document_img"
                            onClick={() => onModal(message.data.file)}
                          />
                        )}
                      </s.Message>
                    </s.ChatMessage>
                  ))}
                </div>
              </s.Chat>
              <s.Form onSubmit={handleSubmit}>
                <s.AddIconInput
                  type="file"
                  accept="image/*"
                  id="paperclip"
                  onChange={e => setUploadDoc(e.target.files[0])}
                />
                <s.AddIconLabel htmlFor="paperclip">
                  <FaPaperclip />
                </s.AddIconLabel>
                <s.Input
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  placeholder="Insert your message here..."
                />
                <Button
                  name="SENT"
                  type="submit"
                  disabled={uploadDoc !== null}
                />
              </s.Form>
              {sendToChat ? (
                loadingImage ? (
                  <p>Loading...</p>
                ) : (
                  <s.PreDownload>
                    <s.DeleteIcon type="button" onClick={deletePreLoadFile}>
                      <IoMdClose />
                    </s.DeleteIcon>
                    <s.DownloadFile src={imageList} alt="document_img" />
                  </s.PreDownload>
                )
              ) : null}
            </s.Container>
          </>
        )}
      </Container>
      {shownModal && <ImageModal onClose={onModal} picture={modalPicture} />}
    </Section>
  );
};

export default Chat;