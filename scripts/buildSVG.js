function tokenURI(matic, starIcon, background, icon, words, author) {
    let svgStr =  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">'
    svgStr += '<style>.cls-1{fill:' + background + '}.cls-2{fill:rgb(241,205,146);}.cls-4,.cls-5{font-size:20px;fill:rgb(241,205,146);}.cls-4{text-anchor: middle;}.cls-5{text-anchor: end;}</style>'
    svgStr += '<rect class="cls-1" width="400" height="600"/>'
    
    //icon
    svgStr += getIcon(icon, matic);

    //star
    let starNum = matic
    if (starNum > 50) {
        starNum = 50;
    }
    for (j = 1; j <= starNum; j++) {
        svgStr += getStar(starIcon);
    }

    svgStr += '<text x="200" y="430" width="320" height="30" class="cls-4">"' + words + '"</text><text class="cls-5" x="360" y="500" width="320" height="30">--' + author + '</text></svg>';
    return svgStr
}

function getStar(starIcon) {
    let size = getRandomBetween(10, 36)
    let x = getRandomBetween(0, 400-size)
    let offY = getRandomBetween(20, 100)
    let y = getRandomBetween(size, 450-offY)
    let dur = getRandomBetween(3, 9)
    let dur2 = getRandomBetween(3, 18)
    
    let star = '<text class="cls-2" x="' + x + '" font-size="' + size + '">' + starIcon
    star += '<animate attributeName="opacity" values="0;0.5;0" dur="' + dur2 + 's" repeatCount="indefinite"/>'
    star += '<animate attributeName="y" values="' + y + ';' + (y+offY) + ';' + y + '" calcMode="paced" dur="' + dur + 's" repeatCount="indefinite"/></text>'
    return star;
}

function getIcon(icon, starNum) {
    let size
    if (starNum == 0) {
        size = 50
    } else {
        size = 99 + starNum
    }
    
    if (size > 300) {
        size = 300
    }
    let x = (400 - size) / 2
    let y = 320
    return '<text transform="translate(' + x + ' ' + y + ')" font-size="' + size + 'px">' + icon + '</text>'
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min
}

function main() {
    let svgStr = tokenURI(1, '&#10022;', 'rgb(39,112,38)', '&#128757;', '为自己的投资留一辆电动车', '外卖币哥')
    console.log(svgStr)
}
main()