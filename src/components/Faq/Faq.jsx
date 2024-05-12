import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  // {
  //   question: "What is SHPEECH?",
  //   answer:
  //     "URJAA 2k24 is the one of biggest Technical event in the history of DYPCOE.",
  // },
  {
    question: "What is the purpose of the forum?",
    answer:
      "The forum's primary purpose is to provide a supportive environment for students to enhance their public speaking and technical skills. By offering various workshops, events, and activities, the club aims to prepare students for future career opportunities and placements.",
  },
  {
    question: "Are there any fees for participation?",
    answer:
      "No, Anyone interested in engaging and developing their skills is welcome to participate in the events.",
  },
  {
    question: "What types of events does the forum organize?",
    answer:
      "The forum organizes a variety of events to cater to the interests and needs of the studetns. These may include public speaking competitions, technical skill-building workshops, mock interview sessions, industry talks, networking events.",
  },
  {
    question: "What advantages can one gain from participating in the forum's events?",
    answer:
      "Participating in forum events offers advantages such as access to technical skill development and public speaking workshops and training sessions, networking opportunities with professionals in related fields, exposure to real-world scenarios through practice sessions and simulations, and advice and mentoring from seasoned members.",
  },
  {
    question: "How often are events held?",
    answer:
    "Consistent learning and skill development are ensured by the regular scheduling of events throughout the year. Events may take place every week, every two weeks, or every month, depending upon the forum's calendar, member availability, and available resources."
  },
  {
    question: "How can I stay updated with the events of the forum?",
    answer:
    "To stay updated with forum events, you can visit the website, follow the forum on LinkedIn, and subscribe to the forum's YouTube and Instagram accounts to receive announcements and updates about upcoming events."
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
