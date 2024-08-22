import React, { useState } from 'react';
import './FAQ.css';

const FAQSection = () => {
  const [activeQuestions, setActiveQuestions] = useState({});

  const categories = [
    {
      title: 'Peddlers',
      questions: [
        { question: 'What types of scrap metal can I sell to you?', answer: 'We offer... See our materials page for a comprehensive list.', showButton: true, buttontext: "Learn More", buttonlink: "/materials"},
        { question: 'How do I get paid for the scrap metal I bring in?', answer: 'Sample answer text.', showButton: false },
        { question: 'Can I drop off scrap metal at any time?', answer: 'Our receiving hours are Monday - Friday 7:30 - 2:00', showButton: true, buttontext: "Learn More", buttonlink: "/contact"},
      ],
    },
    {
      title: 'Industrial Customers',
      questions: [
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: false },
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: true },
      ],
    },
    {
      title: 'Materials',
      questions: [
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: false },
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: true },
      ],
    },
    {
      title: 'Careers',
      questions: [
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: false },
        { question: 'Sample Question', answer: 'Sample answer text.', showButton: true },
      ],
    },
  ];

  const handleQuestionClick = (categoryIndex, questionIndex) => {
    setActiveQuestions(prev => {
      const categoryQuestions = prev[categoryIndex] || [];
      const isQuestionOpen = categoryQuestions.includes(questionIndex);

      return {
        ...prev,
        [categoryIndex]: isQuestionOpen
          ? categoryQuestions.filter(index => index !== questionIndex)
          : [...categoryQuestions, questionIndex]
      };
    });
  };

  return (
    <div className="body">
      <div className="alternate" id="faqtitle">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-section">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category">
            <h4>{category.title}</h4>
            <div className="questions">
              {category.questions.map((q, questionIndex) => (
                <div key={questionIndex} className="question-item">
                  <div
                    className="question-header"
                    onClick={() => handleQuestionClick(categoryIndex, questionIndex)}
                  >
                    <span className="question-text">{q.question}</span>
                    <span className={`toggle-icon ${activeQuestions[categoryIndex]?.includes(questionIndex) ? 'open' : 'closed'}`}>
                      <i className={`fas ${activeQuestions[categoryIndex]?.includes(questionIndex) ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </span>
                  </div>
                  {activeQuestions[categoryIndex]?.includes(questionIndex) && (
                    <div className="answer-container">
                      <p className="answer">{q.answer}</p>
                      {q.showButton && (
                        <a href={q.buttonLink}>
                          <button className="answer-button">{q.buttontext}</button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
