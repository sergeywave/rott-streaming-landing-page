"use strict";

const body = document.body;
const header = document.querySelector('.header')
const menuBurger = document.querySelector('.header__burger')
const closeBurgerMenu = document.querySelector('.close-mobile-menu')

// Mobile menu

menuBurger.onclick = function () {
  menuBurger.classList.toggle("open");
  body.classList.toggle("mobile-menu-opened");
  body.classList.toggle("no-scroll");
};

const firstScreenSection = document.querySelector('.first-screen-section');
const fsFeatures = document.querySelector('.fs-features');

setTimeout(() => {
  firstScreenSection.classList.add('show');
}, 10);

setTimeout(() => {
  header.classList.add('show');
}, 1000);

setTimeout(() => {
  fsFeatures.classList.add('active');
}, 1300);


closeBurgerMenu.onclick = function() {
  menuBurger.classList.toggle("open");
  body.classList.toggle("mobile-menu-opened");
  body.classList.remove("no-scroll");
}

// Scroll menu

const toUpBtn = document.querySelector('.to-up-btn')

window.addEventListener('scroll', function() {

  if (window.scrollY > 50) {
    header.classList.add('header-fixed')
    toUpBtn.classList.add('to-up-btn-visible');
  } else {
    header.classList.remove('header-fixed');
    toUpBtn.classList.remove('to-up-btn-visible');

  }
});

window.addEventListener('load', function() {

  if (window.scrollY > 50) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});

// Target elements
const futureSection = document.querySelector('.future-tv-section');
const controlTVSection = document.querySelector('.control-tv-section');
const lotToSeeSection = document.querySelector('.lot-to-see-section');
const lotToSeeBottom = document.querySelector('.lot-to-see-bottom');
const profilesSection = document.querySelector('.profiles-section');
const subscriptionSection = document.querySelector('.subscription-section');
const onlineCinemasSection = document.querySelector('.online-cinemas-section');
const premiumAddSection = document.querySelector('.premium-add-section');
const selectAllSection = document.querySelector('.select-all-section');

// Configuration for Intersection Observer
const options = {
  root: null, // Use the viewport as the root element
  threshold: 0.3, // Visibility threshold (from 0 to 1)
};

// Create an observer for the futureSection element
const observerFutureSection = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      futureSection.classList.add('active');
    } else {
    }
  });
}, options);

// Create an observer for the futureControl element
const observerFutureControl = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      controlTVSection.classList.add('active');
    } else {
      // controlTVSection.classList.remove('active');
    }
  });
}, options);

const observerlotToSee = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lotToSeeSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);


const observerlotToSeeBottom = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lotToSeeBottom.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);


const profilesSectionObs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      profilesSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);

const subscriptionSectionObs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      subscriptionSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);

const onlineCinemasSectionObs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onlineCinemasSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);

const premiumAddSectionObs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      premiumAddSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);


const selectAllSectionObs = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      selectAllSection.classList.add('active');
    } else {
      // lotToSeeSection.classList.remove('active');
    }
  });
}, options);


// Start observing the target elements
observerFutureSection.observe(futureSection);
observerFutureControl.observe(controlTVSection);
observerlotToSee.observe(lotToSeeSection);
observerlotToSeeBottom.observe(lotToSeeBottom);
profilesSectionObs.observe(profilesSection);
subscriptionSectionObs.observe(subscriptionSection);
onlineCinemasSectionObs.observe(onlineCinemasSection);
premiumAddSectionObs.observe(premiumAddSection);
selectAllSectionObs.observe(selectAllSection);

// Parallax

// const section = document.querySelector('.future-tv-section');
// const parallaxElement = document.querySelector('.parallax-bg');

// function handleScroll2() {
//   const sectionRect = section.getBoundingClientRect();
//   const scrollPosition = (window.scrollY - sectionRect.top) - 900;
//   parallaxElement.style.backgroundPosition = '50%' + scrollPosition * 0.15 + 'px';
// }

// document.addEventListener('scroll', handleScroll2);

// handleScroll2();

// Sliders width 100%

  const subSlider1 = document.querySelector('.subscription-swiper');
  const section1 = document.querySelector('.subscription-wrap');

  const subSlider2 = document.querySelector('.premium-tv-swiper');
  const section2 = document.querySelector('.premium-add-section-wrap');

  window.addEventListener('load', getDistanceToEndOfScreen);
  window.addEventListener('resize', getDistanceToEndOfScreen);

  function getDistanceToEndOfScreen() {

  if (window.innerWidth > 1770) {

  const sectionRect1 = section1.getBoundingClientRect();

  const distanceToEndOfScreen = sectionRect1.left;
  const resultDistance = distanceToEndOfScreen + 90;
  subSlider1.style.left = resultDistance + 'px';
  subSlider1.style.paddingRight = (distanceToEndOfScreen * 2) + 520 + 'px';

  const sectionRect2 = section2.getBoundingClientRect();

  const distanceToEndOfScreen2 = sectionRect2.left;
  const resultDistance2 = distanceToEndOfScreen + 90;
  subSlider2.style.left = resultDistance2 + 'px';
  subSlider2.style.paddingRight = (distanceToEndOfScreen2 * 2) + 520 + 'px';

  }

}

  // Function to scroll to the top of the page
  function scrollToTop() {
    // Scroll smoothly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function updateImageSrc() {
      const teamSchemaImage = document.querySelector('.future-tv-wrap img');
      if (window.innerWidth < 620) {
        teamSchemaImage.src = './img/icons/device-mob.svg';
      } else {
        teamSchemaImage.src = './img/devices.webp';
      }

      const firstScreenBg = document.querySelector('.first-screen__bg-desc');


      if (window.innerWidth < 2100) {
        firstScreenBg.src = './img/tv-fs.webp';
      } else {
        firstScreenBg.src = './img/tv-fs-full.webp';
      }
  }

  updateImageSrc();
  window.addEventListener('resize', function() {
      updateImageSrc();
  });


// Fixed to up button
const footer = document.querySelector('.footer');

function handleScroll() {
  const footerRect = footer.getBoundingClientRect();
  const toUpBtnRect = toUpBtn.getBoundingClientRect();

  const distance = footerRect.top - toUpBtnRect.bottom;

  if (distance < -35) {
    toUpBtn.classList.add('to-up-btn_absolute');
  }
}

window.addEventListener('scroll', handleScroll);

if (window.innerWidth > 650) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toUpBtn.classList.remove('to-up-btn_absolute');
      }
    });
  }, {
    rootMargin: '0px 0px -90px 0px',
  });

  observer.observe(footer);
}

if (window.innerWidth < 650) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toUpBtn.classList.remove('to-up-btn_absolute');
      }
    });
  }, {
    rootMargin: '0px 0px 0px 0px',
  });

  observer.observe(footer);
}


// Input 4 digit code
var digits = document.getElementsByClassName('input_code')
    Array.from(digits).forEach(function(digit){
    digit.addEventListener("keyup", function(event) {
        if (event.keyCode === 13 || digit.value.length == 1) {
            digit.nextElementSibling.focus()
        }
    });
    digit.addEventListener("keyup", function(event) {
        if (event.keyCode === 8) {
            digit.previousElementSibling.focus()
        }
    });
})


// Popups
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			//const popupName = popupLink.getAttribute('href').replace('#', '');
			const popupName = popupLink.getAttribute('data-modal');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			e.preventDefault();
      body.classList.remove("no-scroll");
			popupClose(el.closest('.popup'));
		});
	}
}


const popupCloseIconOver = document.querySelectorAll('.close-popup-over');
if (popupCloseIconOver.length > 0) {
	for (let index = 0; index < popupCloseIconOver.length; index++) {
		const el = popupCloseIconOver[index];
		el.addEventListener('click', function (e) {
			e.preventDefault();
			popupClose(el.closest('.popup'));
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup-content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		// body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {

	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {

	if (!Element.prototype.matches) {

		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


// Popups
const popupDevice = document.querySelector('#popup-device');
const popupInstruction = document.querySelector('#popup-callback_4');
const popupPolitics = document.querySelector('#popup-callback_5');
const popupEnter = document.querySelector('#popup-callback');
const popupTariffs = document.querySelector('#popup-inclusive');

// Btns
const watchNowBtn = document.querySelector('.watch-now-btn');
const watchNowMobileBtn = document.querySelector('.mobile-menu__watch-now');
const sevenDaysBtn = document.querySelector('.future-tv-btn');
const deviceBtns = document.querySelectorAll('.popup-device-item');
const connectBtns = document.querySelectorAll('.connect-btn');
const onlineCinemasBtns = document.querySelectorAll('.online-cinemas-btn');
const onlineCinBtn = document.querySelector('.online-cinemas-bottom-btn');
const pachItemBtns = document.querySelectorAll('.pach-item-btn');
const selectAllBtn = document.querySelector('.select-all-btn');
const acordulBtn = document.querySelector('.acordul-link');
const politicaBtn = document.querySelector('.politica-link');
const inclusiveBtn = document.querySelector('.inclusive__btn');
const lotToSeeBtn = document.querySelector('.lot-to-see__right-add');


watchNowBtn.onclick = function() {
  popupDevice.classList.add('open');
  body.classList.add("no-scroll");
}

watchNowMobileBtn.onclick = function() {
  popupDevice.classList.add('open');
  body.classList.add("no-scroll");
}

sevenDaysBtn.onclick = function() {
  popupDevice.classList.add('open');
  body.classList.add("no-scroll");
}

onlineCinBtn.onclick = function() {
  popupDevice.classList.add('open');
  body.classList.add("no-scroll");
}

selectAllBtn.onclick = function() {
  popupTariffs.classList.add('open');
  body.classList.add("no-scroll");
}

lotToSeeBtn.onclick = function() {
  popupTariffs.classList.add('open');
  body.classList.add("no-scroll");
}

acordulBtn.onclick = function() {
  popupPolitics.classList.add('open');
  body.classList.add("no-scroll");
}

politicaBtn.onclick = function() {
  popupPolitics.classList.add('open');
  body.classList.add("no-scroll");
}

inclusiveBtn.onclick = function() {
  popupEnter.classList.add('open');
  body.classList.add("no-scroll");
}

for (let item of deviceBtns) {
  item.onclick = function() {
    popupInstruction.classList.add('open');
    body.classList.add("no-scroll");
  }
}

for (let item of connectBtns) {
  item.onclick = function() {
    popupTariffs.classList.add('open');
    body.classList.add("no-scroll");
  }
}

for (let item of pachItemBtns) {
  item.onclick = function() {
    popupTariffs.classList.add('open');
    body.classList.add("no-scroll");
  }
}

for (let item of onlineCinemasBtns) {
  item.onclick = function() {
    popupTariffs.classList.add('open');
    body.classList.add("no-scroll");
  }
}


let bg = document.querySelector('.select-all-section-move-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 12 + 'px, -' + y * 12 + 'px)';
});