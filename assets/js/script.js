// When the user clicks navbar bars (hamburger icon) in mobile, open navbar section
function openNavbar() {
  document.getElementById('nav-list').classList.toggle('show');
  document.getElementById('nav-icon').classList.toggle('fa-times');
  document.getElementById('nav-icon').classList.toggle('fa-bars');
}

function enableAllExp() {
  document.getElementById('all-experiences-button').classList.remove('button-active');
  document.getElementById('work-experiences-button').classList.remove('button-active');
  document.getElementById('org-experiences-button').classList.remove('button-active');
  document.getElementById('all-experiences-button').classList.toggle('button-active');

  const allExp = document.getElementsByClassName('experience');

  for (let i = 0; i < allExp.length; i++) {
    allExp[i].classList.remove('hide');
  }
}

function enableWorkExp() {
  document.getElementById('all-experiences-button').classList.remove('button-active');
  document.getElementById('work-experiences-button').classList.remove('button-active');
  document.getElementById('org-experiences-button').classList.remove('button-active');
  document.getElementById('work-experiences-button').classList.toggle('button-active');

  const allExp = document.getElementsByClassName('experience');

  for (let i = 0; i < allExp.length; i++) {
    allExp[i].classList.add('hide');
  }

  const workExp = document.getElementsByClassName('work-experiences');

  for (let i = 0; i < workExp.length; i++) {
    workExp[i].classList.remove('hide');
  }
}

function enableOrgExp() {
  document.getElementById('all-experiences-button').classList.remove('button-active');
  document.getElementById('work-experiences-button').classList.remove('button-active');
  document.getElementById('org-experiences-button').classList.remove('button-active');
  document.getElementById('org-experiences-button').classList.toggle('button-active');

  const allExp = document.getElementsByClassName('experience');

  for (let i = 0; i < allExp.length; i++) {
    allExp[i].classList.add('hide');
  }

  const orgExp = document.getElementsByClassName('org-experiences');

  for (let i = 0; i < orgExp.length; i++) {
    orgExp[i].classList.remove('hide');
  }
}
