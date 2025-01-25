  const main = document.querySelector('.main');
    const about = document.querySelector('.popo');
    const popup2 = document.querySelector('.popup2');
    const ok = document.querySelector('.info-ok-btn');

    about.onclick=()=>{
        popup2.classList.add('active');
        main.classList.add('active');
    };
    ok.onclick=()=>{
        popup2.classList.remove('active');
        main.classList.remove('active');
    };
