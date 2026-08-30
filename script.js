const header = document.querySelector('.main-header');
function adjustContentPosition() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}
window.addEventListener('load', adjustContentPosition);
window.addEventListener('resize', adjustContentPosition);

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const familyButtons = document.querySelectorAll('.family-button');
familyButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        const isVisible = window.getComputedStyle(button).opacity === '1';
        if (!isVisible) {
            e.preventDefault();
            document.querySelectorAll('.family-button').forEach(s =>{
                s.classList.remove('active-name');
            });
            button.classList.add('active-name');
            return;
        }; 

        const personId = button.id;
        const encodedId = encodeURIComponent(personId);
        if (personId !== "Cindy") {
        window.location.href = `Pages/family-page/index.html?Person=${encodedId}`;
        } else if (personId === "Cindy") {
            window.location.href = `Pages/cindys-page/index.html`
        }
    })
})

document.querySelectorAll('.content-box').forEach(box => {
    const button = box.querySelector('.expandtion-button');
    button.addEventListener('click', () => {
        const content = box.querySelector('.expandtion-content');
        content.classList.toggle('expanded');

        if (content.classList.contains('expanded')) {
            button.innerHTML = '&#11165;';
        } else {
            button.innerHTML = '&#11167;';
        }

        if (content.classList.contains('expanded')) {
            setTimeout(() => {
                box.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }

        document.querySelectorAll('.expandtion-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('expanded');
                
                const otherBox = otherContent.closest('.content-box');

                if (otherBox) {
                    const otherButton = otherBox.querySelector('.expandtion-button');
                    if (otherButton) {
                        otherButton.innerHTML = '&#11167;';
                    }
                }
            }
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('Service Worker Registered Successfully', reg.scope))
        .catch((err) => console.error('Service Worker Registration Failed', err));
    });
}

let isShowingPrompts = false;
window.addEventListener('DOMContentLoaded', () => {
    const isPWA = window.matchMedia('(display-mode: standalone)').matches 
    || window.navigator.standalone 
    || document.referrer.includes('android-app://');
    if(isPWA) return;

    if (!shouldShowPromptAgain()) return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(isIOS) {
        showIOSInstallUI();
    } else {
        setupChromiumInstallUI();
    }
});
function markedAsShown() {
    const now = new Date().getTime();
    localStorage.setItem('pwa_prompt_shown_time', now);
};
function shouldShowPromptAgain() {
    const dismissedTime = localStorage.getItem('pwa_prompt_shown_time');
    if (!dismissedTime) return true;

    const twoDaysInMilliseconds = 2 * 24 * 60 * 1000;
    const timePassed = new Date().getTime() - Number(dismissedTime);

    return timePassed > twoDaysInMilliseconds;
}

function showIOSInstallUI() {
    const promtContainer = document.getElementById('installPromtContainer');
    promtContainer.style.display = 'block';
    promtContainer.style.userSelect = 'auto';

    const IOSPromt = document.getElementById('ios-installPromt');
    IOSPromt.style.display = 'block';
    IOSPromt.style.userSelect = 'auto';

    document.body.style.overflowY = 'hidden';
};
let deferredPromt;
function setupChromiumInstallUI() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault;
        deferredPromt = e;
        showInstallButton();
    });
};
function showInstallButton() {
    const promtContainer = document.getElementById('installPromtContainer');
    promtContainer.style.display = 'block';
    promtContainer.style.userSelect = 'auto';

    const installPromt = document.getElementById('installPromt');
    installPromt.style.display = 'block';
    installPromt.style.userSelect = 'auto';

    document.body.style.overflowY = 'hidden';
};
function triggerNativeInstall() {
    if (!deferredPromt) return;
    deferredPromt.prompt();

    deferredPromt.userChoice.then((choiceResult) => {
        deferredPromt = null;
    });
}

const InstallButton = document.getElementById('installButton');
InstallButton.addEventListener('click', () => {
    triggerNativeInstall();
});

function closePrompts() {
    const promtContainer = document.getElementById('installPromtContainer');
    promtContainer.style.display = 'none';
    promtContainer.style.userSelect = 'none';

    const IOSPromt = document.getElementById('ios-installPromt');
    IOSPromt.style.display = 'none';
    IOSPromt.style.userSelect = 'none';

    const installPromt = document.getElementById('installPromt');
    installPromt.style.display = 'none';
    installPromt.style.userSelect = 'none';

    document.body.style.overflowY = 'auto'

    markedAsShown();
}

const promptClose = document.querySelectorAll('.promtCloseContainer');
promptClose.forEach(element => {
    element.addEventListener('click', () => {
        closePrompts();
    });
});

const promptClose2 = document.getElementById('declineButton');
promptClose2.addEventListener('click', () => {
    closePrompts();
});