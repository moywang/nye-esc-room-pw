import React, { useState } from 'react';
import { Button, Form, Image } from "react-bootstrap";

import styles from './PasswordAnswer.module.css';

const PasswordAnswer = ({ imgSrc, correctAnswer, hint, initShow }) => {
  const [answer, setAnswer] = useState('');
  const [showImg, setShowImg] = useState(initShow);

  const checkAnswer = () => {
    if(answer === correctAnswer) {
      setShowImg(true);
    } else {
      alert('Your answer is incorrect. Please try again');
    }
  }

  const imageContainerClass = showImg
    ? `${styles.answerImageContainer} ${styles.show}`
    : `${styles.answerImageContainer} ${styles.hide}`;
  const placeHolder = hint ? hint : "Enter Answer Here";

  return (
    <div className={styles.container}>
      <div className={imageContainerClass}>
        <Image src={imgSrc} fluid/>
      </div>
      <Form.Group>
        <Form.Control type="text" placeholder={placeHolder} onChange={e => setAnswer(e.target.value)} value={answer}/>
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button variant="primary" type="button" onClick={checkAnswer}>
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}

export default PasswordAnswer;
