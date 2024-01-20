import React, { useState } from "react";

const Article = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

const Pagination = ({ articlesPerPage, articles }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mb-5">
      {currentArticles.map((article, index) => (
        <Article key={index} content={article} />
      ))}
      <ul className="pagination">
        {Array.from({
          length: Math.ceil(articles.length / articlesPerPage),
        }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Blog = () => {
  const articles = [
    // Your article content here
    ` <div className=" card p-5">
    <h2 className="mb-4">
      The Vital Beat: Understanding Heart Health and Preventing Diseases
    </h2>
    
    <p>
      The heart, our body's steadfast drummer, tirelessly pumps life through
      our veins. Yet, in today's fast-paced world, heart health often takes a
      backseat until it becomes an urgent concern. Understanding the heart,
      its vulnerabilities, and steps to maintain its well-being are paramount
      for a long, healthy life.
    </p>
    
    <h4>The Heart's Symphony</h4>
    
    <p>
      A marvel of engineering, the heart's continuous rhythm fuels our
      existence. However, it's not invincible. Heart diseases, encompassing
      various conditions affecting the heart's function, are a prevalent
      concern worldwide. From coronary artery disease and arrhythmias to heart
      attacks and heart failure, these conditions can be life-threatening.
    </p>
    
    <h4>Root Causes and Risk Factors</h4>
    
    <p>
      Multiple factors contribute to heart diseases. Unhealthy diets high in
      saturated fats and sugars, sedentary lifestyles, smoking, excessive
      alcohol consumption, and stress are common contributors. Additionally,
      genetic predispositions and underlying health conditions, like
      hypertension and diabetes, increase the risk.
    </p>
    
    <h4>Tuning into Heart Health</h4>
    
    <p>
      Prevention is the cornerstone of heart health. Adopting a heart-friendly
      lifestyle significantly reduces the risk of heart diseases. Regular
      exercise, maintaining a balanced diet rich in fruits, vegetables, whole
      grains, and lean proteins, and managing stress through meditation or
      mindfulness practices are crucial.
    </p>
    
    <h4>The Importance of Regular Check-ups</h4>
    
    <p>
      Timely screenings and health check-ups are vital. Routine blood pressure
      and cholesterol level monitoring, along with discussions with healthcare
      professionals, can detect potential issues early on, allowing for
      effective preventive measures.
    </p>
    
    <h4>Embracing Heart-Healthy Habits</h4>
    
    <p>
      Simple lifestyle adjustments can go a long way in fortifying heart
      health. Opting for stairs over elevators, incorporating short walks into
      daily routines, reducing salt intake, and avoiding processed foods are
      small yet impactful steps.
    </p>
    
    <h4>Heart Health in Every Stage of Life</h4>
    
    <p>
      Heart health isn't a concern confined to old age. It's a lifelong
      commitment. Educating children about healthy eating habits and the
      significance of physical activity lays a foundation for a
      heart-conscious future.
    </p>
    
    <h4>Conclusion</h4>
    
    <p>
      The heart, our faithful companion, deserves our attention and care. By
      prioritizing a heart-healthy lifestyle, we invest in a future free from
      the shackles of heart diseases. Let's listen to the whispers of our
      heart, nurture it with love, and dance to its steady rhythm of life.
    </p>
    </div>  `,
    ` <div className="card p-5">
    <h2>Embarking on a Heart-Healthy Journey: Keys to Maintaining Wellness</h2>

    <p>
      The heart, a tireless warrior at the center of our being, pulsates
      with the rhythm of life. In our fast-paced world, where stress and
      unhealthy habits abound, it's paramount to prioritize heart wellness.
      Let's explore the keys to nurturing a heart-healthy lifestyle for
      sustained well-being.
    </p>

    <h4>The Heart's Symphony: A Vital Organ's Tale</h4>

    <p>
      Marvelously intricate, the heart orchestrates a symphony within our
      bodies. However, this vital organ is susceptible to various
      conditions, including coronary artery disease, arrhythmias, heart
      attacks, and heart failure. Understanding the nuances of heart health
      is the first step toward proactive care.
    </p>

    <h4>Identifying Root Causes and Risk Factors</h4>

    <p>
      Unhealthy dietary choices, a sedentary lifestyle, smoking, excessive
      alcohol consumption, and chronic stress are common contributors to
      heart diseases. Genetic predispositions and underlying conditions like
      hypertension and diabetes amplify the risk. Recognizing these factors
      empowers individuals to make informed decisions for heart wellness.
    </p>

    <h4>Cultivating Heart Health: A Preventive Approach</h4>

    <p>
      Prevention lies at the core of heart wellness. Engaging in regular
      physical activity, adopting a balanced diet rich in fruits,
      vegetables, whole grains, and lean proteins, and managing stress
      through mindfulness practices are pivotal. These lifestyle choices
      contribute significantly to reducing the risk of heart diseases.
    </p>

    <h4>Regular Check-ups: A Proactive Measure</h4>

    <p>
      Routine health check-ups play a crucial role in maintaining heart
      wellness. Monitoring blood pressure and cholesterol levels, along with
      timely discussions with healthcare professionals, facilitates early
      detection of potential issues. Early intervention ensures effective
      preventive measures can be implemented.
    </p>

    <h4>Simple Habits, Profound Impact</h4>

    <p>
      Small adjustments in daily routines can have a profound impact on heart
      health. Opting for stairs instead of elevators, incorporating short
      walks into the day, reducing salt intake, and avoiding processed foods
      collectively contribute to a healthier heart.
    </p>

    <h4>Heart Wellness Across the Lifespan</h4>

    <p>
      Heart health is not a concern exclusive to the elderly; it's a lifelong
      commitment. Educating the younger generation about healthy habits,
      including balanced nutrition and regular physical activity, lays the
      groundwork for a heart-conscious future.
    </p>

    <h4>Embracing Heart-Centric Living</h4>

    <p>
      In conclusion, the heart is a resilient companion deserving of our
      care and attention. By prioritizing heart-centric living, individuals
      invest in a future free from the grip of heart diseases. Let's honor
      our hearts, cherish their steady beats, and dance to the melody of a
      life well-lived.
    </p>
  </div>`,
    `<div className="card p-5">
    <h2>The Essence of Heart-Focused Living: Nurturing a Healthy Lifestyle</h2>

    <p>
      At the core of our existence lies a resilient organ, the heart, which
      beats with the rhythm of life. In the journey of wellness, fostering a
      heart-focused lifestyle emerges as a key factor. Let's delve into the
      essentials of heart-centered living for sustained health and vitality.
    </p>

    <h2>The Heart's Resilience: A Beacon of Life</h2>

    <p>
      The heart, a symbol of resilience, tirelessly pumps life-sustaining
      blood throughout our bodies. Despite its enduring nature, the heart
      can face challenges. Understanding the dynamics of heart health is
      essential for cultivating habits that promote overall well-being.
    </p>

    <h4>Recognizing Root Causes and Mitigating Risks</h4>

    <p>
      Unhealthy habits such as poor nutrition, sedentary lifestyles, smoking,
      excessive alcohol intake, and chronic stress contribute to heart
      diseases. Acknowledging these risk factors empowers individuals to
      make mindful choices, reducing the likelihood of heart-related
      complications.
    </p>

    <h4>Cultivating Heart Wellness: A Holistic Approach</h4>

    <p>
      A holistic approach to heart wellness involves adopting a balanced
      lifestyle. Regular physical activity, a diet rich in fruits, vegetables,
      whole grains, and lean proteins, along with stress-management
      practices, collectively contribute to a heart-healthy life. Prioritizing
      these elements forms the foundation of heart-focused living.
    </p>

    <h4>Proactive Measures: Regular Check-ups and Monitoring</h4>

    <p>
      Proactive health measures, such as regular check-ups and monitoring,
      play a pivotal role in maintaining heart wellness. Routine assessments
      of blood pressure and cholesterol levels, coupled with open
      conversations with healthcare professionals, enable early detection and
      intervention, preventing potential issues from escalating.
    </p>

    <h4>Small Changes, Significant Impact</h4>

    <p>
      Small lifestyle adjustments can have a profound impact on heart health.
      Choosing stairs over elevators, incorporating short walks into daily
      routines, reducing sodium intake, and avoiding processed foods
      collectively contribute to the overall well-being of the heart.
    </p>

    <h4>Heart Health Across Generations</h4>

    <p>
      Heart health is a concern that spans generations. Educating younger
      individuals about the importance of heart-focused living establishes a
      strong foundation for a future marked by health-conscious choices and
      well-being.
    </p>

    <h4>In Conclusion: Embracing Heart-Centered Living</h4>

    <p>
      In conclusion, the heart, our steadfast companion, deserves intentional
      care. By embracing heart-centered living, individuals invest in a
      future free from the constraints of heart diseases. Let's celebrate the
      resilience of our hearts, nurture them with love, and dance to the
      melody of a life lived with purpose.
    </p>
  </div>
`,
    `<div className="card p-5">
    <h2>The Heart's Song: Navigating a Path of Heartful Living</h2>

    <p>
      In the symphony of life, the heart plays a central role, orchestrating
      the rhythm of our existence. Embracing heartful living involves
      fostering a connection with our hearts and making choices that
      prioritize overall well-being. Let's explore the melody of a life lived
      with heartful intention.
    </p>

    <h4>The Heart's Melody: A Guiding Beat</h4>

    <p>
      The heart, more than a vital organ, is a guiding beat that sustains our
      journey. It is a constant companion, and understanding its language is
      crucial for steering our lives in a direction that promotes
      healthfulness and happiness.
    </p>

    <h4>Understanding Heart-Centric Choices</h4>

    <p>
      Heartful living begins with making choices that align with the well-being
      of our hearts. This includes adopting a balanced diet, engaging in
      regular physical activity, and nurturing positive relationships. These
      choices create a harmonious environment for the heart to thrive.
    </p>

    <h4>Cultivating Compassion and Gratitude</h4>

    <p>
      Compassion and gratitude form the chorus of heartful living. Being
      compassionate towards ourselves and others creates an atmosphere of
      kindness, reducing stress and promoting emotional well-being. Expressing
      gratitude amplifies the heart's positive vibrations, fostering
      contentment.
    </p>

    <h4>Heart-Healthy Practices for Everyday Life</h4>

    <p>
      Integrating heart-healthy practices into daily life is essential for
      heartful living. Mindful activities such as meditation, deep breathing,
      and adequate sleep contribute to a calm and resilient heart. These
      practices serve as notes in the heart's soothing melody.
    </p>

    <h4>The Art of Listening to Your Heart</h4>

    <p>
      Listening to one's heart involves tuning into inner desires and
      intuition. It requires slowing down amidst life's hustle, reflecting on
      personal values, and making choices that resonate with the heart's
      wisdom. The heart becomes a guide in navigating life's intricate
      pathways.
    </p>

    <h4>Heartful Living Across Lifetimes</h4>

    <p>
      Heartful living is a timeless commitment, transcending generations. By
      instilling heart-centered values in younger individuals, we sow the seeds
      for a future where heartful choices become a natural part of life.
    </p>

    <h4>In Harmony with Heartful Living</h4>

    <p>
      In conclusion, embracing heartful living invites us to dance in harmony
      with the heart's song. By making choices that resonate with compassion,
      gratitude, and mindful practices, we create a life that echoes with the
      melody of a heartful existence. Let's celebrate the heart's enduring
      song and live each note with purpose and joy.
    </p>
  </div>`,
  ];

  const articlesPerPage = 1; // Number of articles to display per page

  return (
    <div>
      <h2 className="mb-4">Blog</h2>
      <Pagination articlesPerPage={articlesPerPage} articles={articles} />
    </div>
  );
};

export default Blog;
