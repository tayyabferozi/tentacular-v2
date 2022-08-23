import React from "react";
import $ from "jquery";

const FaqItem = ({ question, answer, link }) => {
  const toggleAnswer = (e) => {
    let $this = $(e.target);

    $this.parents(".faq-item").toggleClass("open");
    $this.parents(".faq-item").children(".faq-answer").slideToggle();
  };

  return (
    <>
    {link 

    ?
  <div className="faq-item">
    <div onClick={toggleAnswer} className="faq-question">
      {question}
    </div>
    <div style={{ display: "none" }} className="faq-answer">
    Farming your Tentacular will yield you daily $BY (berry token) rewards. It is essentially the same mechanism as staking, however your token will not leave your wallet (non-custodial), unlike traditional staking methods. For more information see our Medium article <a href="https://tentacular.medium.com/berry-farming-tokenomics-4ba978b12893" target="_blank" rel="noreferrer" className="faq-answer" style={{background: 'none',padding: '0px',color: 'white', borderBottom: "2px solid white", textDecorationColor: "white"}}>here</a>.
    </div>
  </div>

  :

  <div className="faq-item">
  <div onClick={toggleAnswer} className="faq-question">
    {question}
  </div>
  <div style={{ display: "none" }} className="faq-answer">
    {answer}
  </div>
</div>
  }
    </>
  );
};

export default FaqItem;
