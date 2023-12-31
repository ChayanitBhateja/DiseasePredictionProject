const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err);
    next(err);
  });
};

const paginationOptions = (page, limit) => {
  return { sort: { _id: -1 }, skip: page * limit, limit: limit, lean: true };
};

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

const probability = () => {
  const min = 70;
  const max = 95;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

const randomArticle = (prediction, probability) => {
  const safePredictionArticles = [
    `
 <p> Maintaining a healthy heart is crucial for overall well-being. Your heart tirelessly pumps blood, supplying oxygen and nutrients to every part of your body. Taking care of this vital organ is a key component of a healthy lifestyle. </p>
  
 <p> Firstly, adopting a balanced diet plays a pivotal role. Incorporating fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals supports heart health. Avoiding processed foods and excessive sodium intake can significantly reduce the risk of heart-related issues. </p>
  
 <p> Moreover, regular physical activity is fundamental. Engaging in exercises like brisk walking, jogging, cycling, or swimming for at least 30 minutes a day enhances cardiovascular fitness. This not only strengthens the heart muscle but also helps in maintaining a healthy weight and managing stress levels. </p>
  
 <p> Additionally, prioritizing stress management and adequate sleep contributes to heart health. High stress levels can elevate blood pressure, impacting the heart. Techniques like meditation, yoga, or deep breathing exercises can effectively manage stress. Quality sleep allows the heart to rest and recuperate. </p>
  
 <p> Lastly, regular check-ups with healthcare professionals are crucial. Routine screenings can detect early signs of heart disease or related conditions, enabling timely interventions. </p>
  
 <p> Taking proactive steps towards a heart-healthy lifestyle can significantly reduce the risk of cardiovascular diseases. Small changes in diet, exercise, stress management, and regular check-ups can go a long way in ensuring a healthy heart. </p>`,

    `
    <p> Heart diseases encompass a range of conditions affecting the heart's functionality. From coronary artery disease to arrhythmias and heart failure, these ailments are a leading cause of mortality worldwide. However, many heart diseases are preventable through mindful lifestyle choices. </p>

    <p> Smoking, high cholesterol, high blood pressure, diabetes, and obesity significantly heighten the risk of heart diseases. Sedentary lifestyles and poor dietary habits exacerbate these risks. Yet, proactive measures can drastically reduce these dangers. </p>
 
    <p> Adopting a heart-healthy lifestyle is pivotal. Regular physical activity strengthens the heart and reduces the risk of cardiovascular issues. A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats aids in maintaining optimal heart health. </p>
 
    <p> Moreover, quitting smoking, managing stress through relaxation techniques, and monitoring cholesterol and blood pressure levels through routine check-ups are integral steps toward prevention. </p>
 
    <p> Understanding the risk factors and implementing preventive measures through lifestyle modifications and regular medical check-ups are the keystones in the fight against heart diseases. Small but consistent steps towards a heart-healthy lifestyle can significantly lower the likelihood of heart-related complications, ensuring a healthier and happier life. </p>
 
 
 
 
 
 
 
 `,
  ];

  const riskPredictionArticles = [
    `
 <p> Urgent Heart Health Concern: A heart disease probability exceeding 70% indicates a significantly elevated risk, necessitating immediate attention and lifestyle modifications. This probability underscores the urgency to prioritize heart health and take decisive actions to mitigate potential risks. </p>

 <p> Begin by reassessing your diet, focusing on reducing saturated fats, sodium, and processed sugars. Embrace heart-healthy foods such as leafy greens, berries, nuts, and omega-3 rich fish. Consider consulting with a nutritionist for personalized dietary recommendations. </p>

 <p> Regular exercise becomes even more critical. Engage in aerobic activities like jogging, swimming, or cycling, aiming for at least 30 minutes a day, five days a week. However, consult a healthcare professional before starting any new exercise regimen. </p>

 <p> Stress management is imperative. Practice mindfulness, meditation, or yoga to alleviate stress and promote relaxation, benefiting heart health. </p>

 <p> Immediate consultation with a healthcare provider is essential. They can conduct thorough evaluations, recommend medication if necessary, and devise a tailored plan to address your heightened risk factors. </p>

 <p> This probability serves as a crucial call to action. Proactive lifestyle changes and medical guidance are pivotal to safeguarding your heart's well-being. </p>`,

    `
    <p> Elevated Heart Disease Risk: A probability exceeding 70% for heart disease is a concerning indication demanding immediate attention and proactive measures. This probability underscores the urgency of prioritizing heart health and making pivotal lifestyle modifications. </p>

    <p> Start by reassessing dietary habits. Limit intake of saturated fats, trans fats, and processed foods. Embrace a diet rich in fruits, vegetables, whole grains, and lean proteins. Consulting with a nutritionist can provide personalized dietary guidelines. </p>
    
    <p> Exercise becomes a non-negotiable aspect. Engage in aerobic activities like brisk walking, running, or cycling for at least 30 minutes most days of the week. However, always consult with a healthcare professional before initiating any new exercise routine. </p>
    
    <p> Stress management plays a crucial role. Incorporate relaxation techniques such as meditation, deep breathing exercises, or yoga to alleviate stress and promote overall well-being. </p>
    
    <p> Immediate consultation with a healthcare provider is paramount. They can conduct comprehensive evaluations, recommend necessary medications, and devise a personalized plan to address your heightened risk factors. </p>
    
    <p> Remember, this probability serves as a significant catalyst for change. Prioritize your heart health, seek professional guidance, and diligently adhere to prescribed interventions to mitigate potential risks and lead a heart-healthy life. </p>`,

    `
    <p> Navigating Elevated Heart Disease Risks: A heart disease probability exceeding 70% demands immediate attention and proactive steps toward safeguarding your heart's well-being. It’s a crucial moment to implement pivotal lifestyle modifications and seek professional guidance. </p>

    <p> Begin by reevaluating your dietary choices. Reduce the consumption of processed foods, sodium, and unhealthy fats. Embrace heart-healthy alternatives like fruits, vegetables, whole grains, and lean proteins. Seeking advice from a nutritionist can offer personalized dietary strategies. </p>
    
    <p> Regular physical activity is imperative. Engage in exercises that elevate your heart rate, aiming for at least 30 minutes most days of the week. Consulting a healthcare professional before starting a new exercise regimen is advisable. </p>
    
    <p> Effective stress management is key. Practice relaxation techniques such as mindfulness, meditation, or yoga to alleviate stress and promote emotional well-being. </p>
    
    <p> Prompt consultation with a healthcare provider is critical. They can conduct thorough assessments, prescribe necessary medications, and design a tailored plan to address your heightened risk factors comprehensively. </p>
    
    <p> This probability serves as a pivotal moment for proactive intervention. Committing to lifestyle changes and professional guidance is vital to diminish potential risks and nurture a heart-healthy lifestyle. </p>`,
  ];

  var articlePara = "";

  if (prediction === 0 || probability <= 70) {
    articlePara = safePredictionArticles[Math.floor(Math.random() * 2)];
  } else {
    articlePara = riskPredictionArticles[Math.floor(Math.random() * 3)];
  }

  return articlePara;
};

module.exports = {
  catchAsync,
  paginationOptions,
  pick,
  probability,
  randomArticle,
};
