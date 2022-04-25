const firstSection = document.querySelector('.first');
const secondSection = document.querySelector('.second');
const lastSection = document.querySelector('.last');

class Pages {
  firstOnly() {
    firstSection.classList.add('show');
    firstSection.classList.remove('hide');

    secondSection.classList.add('hide');
    secondSection.classList.remove('show');

    lastSection.classList.add('hide');
    lastSection.classList.remove('show');
  }

  secondOnly() {
    firstSection.classList.add('hide');
    firstSection.classList.remove('show');

    secondSection.classList.add('show');
    secondSection.classList.remove('hide');

    lastSection.classList.add('hide');
    lastSection.classList.remove('show');
  }

  lasttOnly() {
    firstSection.classList.add('hide');
    firstSection.classList.remove('show');

    secondSection.classList.add('hide');
    secondSection.classList.remove('show');

    lastSection.classList.add('show');
    lastSection.classList.remove('hide');
  }
}

export default Pages;