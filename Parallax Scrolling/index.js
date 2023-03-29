let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_f = document.getElementById('m_f');
let mountains_b = document.getElementById('m_b');
let btn = document.querySelector('.btn');
let text = document.getElementById('text');
let header = document.querySelector('header');

const mediaQuery = window.matchMedia('(min-width: 960px)')

const onScroll = async () => {
    let value = window.scrollY;
    // stars.style.left = value + 'px';
    function getTotalMove() {
        return value;
    }

    if(await getTotalMove() > 900) return;
    if(mediaQuery.matches) {
        stars.animate({
            left: value*0.5 + 'px'
        }, {duration: 1200, fill: 'forwards'})
        text.animate({
            marginRight: value * 2 + 'px',
            marginTop: value * 0.75 + 'px'
        }, {duration: 2000, fill: 'forwards'})
    }   else {
        stars.animate({
            top: value*0.35 + 'px'
        }, {duration: 1200, fill: 'forwards'})
        text.animate({
            marginRight: value * 0.8 + 'px',
            marginTop: value * 0.75 + 'px'
        }, {duration: 2000, fill: 'forwards'})
    }

    moon.animate({
        top: value * 0.75 + 'px'
    }, {duration: 2000, fill: 'forwards'})

    mountains_b.animate({
        top: value * 0.5 + 'px'
    }, {duration: 2000, fill: 'forwards'})

    btn.animate({
        marginTop: value * 0.5 + 'px'
    }, {duration: 2000, fill: 'forwards'})

    header.animate({
        marginTop: value * 0.5 + 'px'
    }, {duration: 2000, fill: 'forwards'})
}

window.addEventListener('scroll', onScroll);