import React, { useState } from "react";
import "./BlogPage.css";

const BlogPage = () => {
  // State to manage "Read More" functionality
  const [showMoreChristianLife, setShowMoreChristianLife] = useState(false);
  const [showMoreLoveOfGod, setShowMoreLoveOfGod] = useState(false);

  return (
    <div className="blog-page">
      {/* Blog 1: How To Live As Christian */}
      <div className="blog-section">
        <h1 className="blog-title-christian">How To Live As Christian</h1>
        <p className="blog-paragraph">
          As Christians, we are called to live by the teachings of Jesus Christ.
          The Bible tells us, “Love the Lord your God with all your heart and
          with all your soul and with all your mind” (Matthew 22:37). This means
          living a life dedicated to God's will and teachings.
        </p>
        {!showMoreChristianLife && (
          <button
            className="read-more-btn"
            onClick={() => setShowMoreChristianLife(true)}
          >
            Read More
          </button>
        )}
        {showMoreChristianLife && (
          <>
            <p className="blog-paragraph">
              It is important to love your neighbor as yourself (Mark 12:31).
              Showing kindness, compassion, and understanding to others reflects
              God's love for all people.
            </p>
            <p className="blog-paragraph">
              Living with humility is another key trait. "God opposes the proud
              but shows favor to the humble" (James 4:6). Humility allows us to
              serve others and glorify God in all that we do.
            </p>
            <p className="blog-paragraph">
              Be patient in trials, knowing that “the testing of your faith
              produces perseverance” (James 1:3). Through patience, we grow in
              faith and become more like Christ.
            </p>
            <p className="blog-paragraph">
              Finally, trust in God’s plan for your life. "For I know the plans
              I have for you, declares the Lord, plans for welfare and not for
              evil, to give you a future and a hope" (Jeremiah 29:11).
            </p>
          </>
        )}
      </div>

      {/* Blog 2: Testimony of Healing */}
      <div className="blog-section">
        <h1 className="blog-title-testimony">Testimony of How God Healed Me</h1>
        <div className="testimony-content">
          <div className="testimony-left">
            <p className="blog-paragraph">
              One day, I fell seriously ill and was admitted to the hospital. My
              condition worsened, and doctors were uncertain about my recovery.
              I felt hopeless and scared. But my pastor and fellow church
              members came to visit me in the hospital.
            </p>
            <p className="blog-paragraph">
              They brought with them the comfort of God’s Word and prayed for
              healing. The Bible says, “Is anyone among you sick? Let them call
              the elders of the church to pray over them and anoint them with
              oil in the name of the Lord” (James 5:14).
            </p>
            <p className="blog-paragraph">
              That day, they anointed me and prayed with faith that God would
              restore my health. I could feel the presence of the Holy Spirit,
              and my faith was reignited.
            </p>
            <p className="blog-paragraph">
              Over the next few days, my health miraculously began to improve.
              Doctors were astonished at the speed of my recovery, but I knew it
              was God’s healing power at work.
            </p>
            <p className="blog-paragraph">
              I was soon discharged from the hospital, fully healed and
              restored. I am forever grateful for the prayers and support of my
              church family, and I give all glory to God for His healing power.
            </p>
          </div>
          <div className="testimony-right">
            <img
              src="/images/docmachine.jpg" /* Replace with your actual image path */
              alt="Man in hospital bed"
              className="testimony-image"
            />
          </div>
        </div>
      </div>

      {/* Blog 3: Love of God */}
      <div className="blog-section">
        <h1 className="blog-title-love">Love of God</h1>
        <p className="blog-paragraph">
          God's love is infinite and eternal. “For God so loved the world that
          He gave His one and only Son, that whoever believes in Him shall not
          perish but have eternal life” (John 3:16). His love is evident in
          every aspect of our lives.
        </p>
        {!showMoreLoveOfGod && (
          <button
            className="read-more-btn"
            onClick={() => setShowMoreLoveOfGod(true)}
          >
            Read More
          </button>
        )}
        {showMoreLoveOfGod && (
          <>
            <p className="blog-paragraph">
              The Bible tells us that nothing can separate us from the love of
              God that is in Christ Jesus (Romans 8:39). His love remains with
              us through all circumstances.
            </p>
            <p className="blog-paragraph">
              God’s love is unconditional, and He shows it through the grace and
              mercy extended to us. “But God demonstrates His own love for us in
              this: While we were still sinners, Christ died for us” (Romans
              5:8).
            </p>
            <p className="blog-paragraph">
              His love teaches us to love one another. Jesus said, “A new
              command I give you: Love one another. As I have loved you, so you
              must love one another” (John 13:34).
            </p>
            <p className="blog-paragraph">
              No matter what challenges we face, we can always rely on God’s
              love to carry us through. “The Lord is compassionate and gracious,
              slow to anger, abounding in love” (Psalm 103:8).
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
