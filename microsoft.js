console.log("This is a Microsoft clone created by Vishal");

let i = 0;
function gototop() {
    if (scrollY >= 475 && scrollY <= 2330) {
        document.getElementById('returnbutton').classList.add('lg:fixed', 'lg:right-0', 'lg:bottom-0');
        document.getElementById('returnbutton').classList.remove('lg:relative', 'lg:left-[3rem]');
    }
    if (scrollY < 475 || scrollY > 2330) {
        document.getElementById('returnbutton').classList.remove('lg:fixed', 'lg:right-0', 'lg:bottom-0');
        document.getElementById('returnbutton').classList.add('lg:relative', 'lg:left-[3rem]');
    }
}

let hamIcon = document.getElementById('hamburger_icon');
let crossIcon = document.getElementById('cross_icon');
let menu = document.getElementById('expand_menu');
function toggle() {
    if (hamIcon.classList.contains('hidden')) {
        hamIcon.classList.remove('hidden');
        crossIcon.classList.add('hidden');
        menu.style.top = '-18860px';
        let arr = document.getElementsByClassName('submenu');
        arr = Array.from(arr);
        arr.forEach(function (element) {
            if (element.classList.contains('hidden')) { }
            else {
                element.classList.add('hidden');
                element.previousElementSibling.lastElementChild.classList.remove('rotate-180');
            }
        });
    }
    else {
        hamIcon.classList.add('hidden');
        crossIcon.classList.remove('hidden');
        menu.style.top = '55px';
    }
}

function dropdown_togggle(event) {
    let targetDivId = event.target.id;
    let targetDivLastChild = document.getElementById(targetDivId).lastElementChild;
    let dropdown = document.getElementById(targetDivId).nextElementSibling;
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        targetDivLastChild.classList.add('rotate-180');
    }
    else {
        dropdown.classList.add('hidden');
        targetDivLastChild.classList.remove('rotate-180');
    }
}

let firstAd = document.getElementById('advertisement1');
let secondAd = document.getElementById('advertisement2');
let firstDot = document.getElementById('dot1');
let secondDot = document.getElementById('dot2');
function nextSlideshow() {
    if (firstAd.classList.contains('absolute')) {
        firstAd.classList.remove('absolute', 'left-[-7000px]');
        secondAd.classList.add('absolute', 'right-[-7000px]');
        firstDot.classList.add('bg-black');
        secondDot.classList.remove('bg-black');
        secondAd.classList.add('hidden');
    }
    else {
        firstAd.classList.add('absolute', 'left-[-7000px]');
        secondAd.classList.remove('absolute', 'right-[-7000px]');
        secondAd.classList.remove('hidden');
        firstDot.classList.remove('bg-black');
        secondDot.classList.add('bg-black');
    }
}
let showDropdown = document.getElementById('ms_dropdown');
let dropdownExpands = document.getElementById('ms_expands');
function showdropdown() {
    if (dropdownExpands.classList.contains('hidden')) {
        dropdownExpands.classList.remove('hidden');
        dropdownExpands.classList.add('flex');
        showDropdown.classList.add('bg-[#f2f2f2]');
    }
    else {
        dropdownExpands.classList.add('hidden');
        dropdownExpands.classList.remove('flex');
        showDropdown.classList.remove('bg-[#f2f2f2]');
    }
}
function expandsearch() {
    document.getElementById('box2').classList.add('hidden');
    document.getElementById('box3').classList.add('hidden');
    document.getElementById('box4').classList.remove('hidden');
    document.getElementById('large_nav').classList.add('w-full');
}
function restoresearch() {
    document.getElementById('box2').classList.remove('hidden');
    document.getElementById('box3').classList.remove('hidden');
    document.getElementById('box4').classList.add('hidden');
}
function mobileSearchExpand() {
    document.getElementById('sbox1').classList.add('hidden')
    document.getElementById('sbox2').classList.add('hidden')
    document.getElementById('sbox3').classList.add('hidden')
    document.getElementById('mobile_search').classList.add('flex')
    document.getElementById('mobile_search').classList.remove('hidden')
}
function mobileSearchCollapse() {
    document.getElementById('sbox1').classList.remove('hidden')
    document.getElementById('sbox2').classList.remove('hidden')
    document.getElementById('sbox3').classList.remove('hidden')
    document.getElementById('mobile_search').classList.add('hidden')
}
document.getElementById('toggle_hamburger').addEventListener('click', toggle);
document.getElementById('dropdown1').addEventListener('click', dropdown_togggle);
document.getElementById('dropdown2').addEventListener('click', dropdown_togggle);
document.getElementById('dropdown3').addEventListener('click', dropdown_togggle);
document.getElementById('dropdown4').addEventListener('click', dropdown_togggle);
document.getElementById('dropdown5').addEventListener('click', dropdown_togggle);
document.getElementById('dropdown6').addEventListener('click', dropdown_togggle);
document.getElementById('left_button').addEventListener('click', nextSlideshow);
document.getElementById('right_button').addEventListener('click', nextSlideshow);
document.getElementById('ms_dropdown').addEventListener('click', showdropdown);
document.getElementById('searchIcon').addEventListener('click', expandsearch);
document.getElementById('cancel').addEventListener('click', restoresearch);
document.getElementById('mobile_searchIcon').addEventListener('click', mobileSearchExpand);
document.getElementById('goback').addEventListener('click', mobileSearchCollapse);
document.addEventListener('scroll', gototop);