import React, { useEffect, useState } from "react";
import s from "./ConnectForm.module.scss";
import { motion } from "framer-motion";
import { notification } from "antd";
import axios from "axios";

const ConnectForm = () => {
  const [post, setPost] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [changeBtn, setChangeBtn] = useState("SEND MESSAGE");

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Успешно отправлено!`,
      placement,
    });
  };

  // Состояние - сообщения ошибки для email инпута
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      post.name.length === 0 ||
      post.email.length === 0 ||
      post.message.length === 0
    ) {
      setError(true);
    } else {
      // Проверка для email инпута
      const regex = /^[A-Za-z0-9._%+-]+@(gmail\.com|mail\.ru)$/i;
      const isValidEmail = regex.test(post.email);
      if (!isValidEmail) {
        setErrorMessage("Разрешены только адреса Gmail или Mail.ru");
      } else {
        try {
          axios
            .post("https://jsonplaceholder.typicode.com/posts", post)
            .then((res) => {
              if (res.status === 200 || 201) {
                setError(false);
              } else {
                setError(true);
              }
            });
          setChangeBtn("Done");
          openNotification("rigthButton");
        } catch (err) {
          if (err) {
            setError(true);
          }
        }
      }
    }
  };
  return (
    <>
      <motion.div
    
        className={s.connect_form}
      >
        <form onSubmit={handleSubmit}>
          <motion.label
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            YOUR NAME
          </motion.label>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <input
              type="text"
              minLength={2}
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
            />
          </motion.div>
          {error && post.name.length <= 0 ? (
            <div className={s.error_message}>
              <p>Введите имя!</p>
            </div>
          ) : (
            ""
          )}
          <motion.label
            initial="hidden"
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            YOUR EMAIL
          </motion.label>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <input
              type="email"
              value={post.email}
              onChange={(e) => setPost({ ...post, email: e.target.value })}
            />
          </motion.div>
          {error && post.email.length <= 0 ? (
            <div className={s.error_message}>
              <p>Введите email!</p>
            </div>
          ) : (
            ""
          )}
          {errorMessage && (
            <div className={s.error_message}>
              <p>{errorMessage}</p>
            </div>
          )}
          <motion.label
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            YOUR MESSAGE
          </motion.label>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            className={s.textarea_block}
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <textarea
              type="message"
              value={post.message}
              onChange={(e) => setPost({ ...post, message: e.target.value })}
            />
          </motion.div>
          {error && post.message.length <= 0 ? (
            <div className={s.error_message}>
              <p>Поле YOUR MESSAGE не может быть пустым!</p>
            </div>
          ) : (
            <h1> {contextHolder} </h1>
          )}
          <motion.button
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            type="submit"
          >
            {changeBtn}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default ConnectForm;
