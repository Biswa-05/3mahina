
AOS.init({
    duration: 1200,
});

const swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

const storyText = "These three months have been amazing. It feels like we've known each other forever. You make me so happy. Your laugh is my favorite sound, and your smile brightens my day. Looking into your eyes feels like coming home. You're so kind and understanding, and I feel safe and comfortable with you. We've had so many fun times together, and even the quiet moments are special. I love how you accept me for who I am. You make me feel loved and appreciated. I'm so grateful for these past three months, and I'm excited for all the happy times to come. You are very special to me."; 
function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    document.getElementById("story-text").innerHTML = text.substring(0, i+1);
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 50);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

typeWriter(storyText, 0);