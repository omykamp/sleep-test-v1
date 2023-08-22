
  function calculateScore() {
    const questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'];
    let totalScore = 0;
    let hasUnansweredQuestion = false;

    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i];
      const userAnswer = document.querySelector(`input[name="${questionId}"]:checked`);

      if (userAnswer) {
        totalScore += parseInt(userAnswer.value);
      } else {
        hasUnansweredQuestion = true;
        break;
      }
    }

    if (hasUnansweredQuestion) {
      alert("請確保每個問題都有回答後再提交測試結果。");
    } else {
      displayResult(totalScore);
    }
  }

    function displayResult(totalScore) {
      const resultElement = document.getElementById('result');
      resultElement.style.color = 'black';

      let result = '';
      let recommendation = '';
      let imageSrc = '';
      let imageAlt = '';

      if (totalScore >= 0 && totalScore <= 7) {
        result = `你的得分是：${totalScore }分，無明顯失眠困擾`;
        recommendation = '你似乎沒有太大的睡眠困擾，這真是值得開心的一件事情，因為在台灣每5人就有1人深受失眠之苦。\n\n但如果你知道如何建立正確的睡眠好習慣的方法，就能持續維持好的睡眠品質，甚至可以幫助你周遭的家人也培養出優質的睡眠習慣。\n\n通過參加我們的課程，您可以學到更多技巧，有更充足的能量面對每一天的挑戰，投資睡眠就是對健康的最佳投資喔！';
        imageSrc = 'https://omykamp.org/wp-content/uploads/2023/08/無明顯失眠困擾.jpg';
        imageAlt = '無明顯失眠困擾';
      } else if (totalScore >= 8 && totalScore <= 14) {
        result =  `你的得分是：${totalScore }分，稍有睡眠困擾`;
        recommendation = '根據測驗結果顯示，你有些微的睡眠困擾。不要忽略這些小問題，因為睡眠不足就像是「借款」，當小額借款發生時你還能快速清還，一旦慢慢累積、拖延還債，轉眼就會債臺高築，在腦、身、心爆發「睡眠破產」危機。\n\n我們的課程提供了許多實用的睡眠技巧和建議，還有專屬社群陪伴你一路健檢睡眠品質。想要擁有富足的人生，投資睡眠好習慣就對啦！';
        imageSrc = 'https://omykamp.org/wp-content/uploads/2023/08/稍有睡眠困擾.jpg';
        imageAlt = '稍有睡眠困擾';
      } else if (totalScore >= 15 && totalScore <= 21) {
        result = `你的得分是：${totalScore }分，有明顯失眠困擾`;
        recommendation = '您的測驗結果指出你有較明顯的睡眠困擾。相信你的睡眠困擾已經影響你的日常生活、工作和情緒管理。想要好好照顧自己的你，行動永遠不嫌晚！為了讓你在工作與生活中，找回自信和幸福感，邀請你一起不再為睡眠感到煩心，透過參加我們的課程與社群，逐步改善睡眠、找回你寧靜的夜晚。';
        imageSrc = 'https://omykamp.org/wp-content/uploads/2023/08/有明顯失眠困擾.jpg';
        imageAlt = '有明顯失眠困擾';
      } else if (totalScore >= 22 && totalScore <= 28) {
        result = `你的得分是：${ totalScore }分，有嚴重失眠困擾`;
        recommendation = '測驗結果顯示你的睡眠狀況非常嚴重，不知道你是否已求助專業醫療人員了呢？相信你一定知道睡眠對你的健康至關重要，但辛苦長期失眠的你一定也感到無力或無奈。無論你是否已經開始服用安眠、助眠的藥物，這門課程都能帶你嘗試建立更好的睡眠好習慣，同時透過心理師專屬社群的陪伴與教練，對於提高對自我身心狀態的覺察也有所助益，期待在課程中與你相見。';
        imageSrc = 'https://omykamp.org/wp-content/uploads/2023/08/嚴重失眠困擾.jpg';
        imageAlt = '有嚴重失眠困擾';
      }

    let resultText = `<p>您的測驗結果為：${result}</p><p>${recommendation}</p>`;

    if (imageSrc && imageAlt) {
      resultText += `
      <div class="result-image">
        <img src="${imageSrc}" alt="${imageAlt}">
      </div>
    `;
    }

    resultText += `
    <div>
      <a href="https://omykamp.tv/courses/asleep?affcode=game" target="_blank" class="result-link">查看更多資訊</a>
    </div>
  `;

    resultElement.innerHTML = resultText;
  }
