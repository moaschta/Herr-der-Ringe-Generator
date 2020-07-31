var meineLinks = [
  "https://static.kino.de/wp-content/uploads/2017/09/58-rcm600x0u.jpg",
  "https://assets.cdn.moviepilot.de/files/30a06f13b41377ae5597b3051c9fd514df18e94e4d0c4ce80ed8555fe02d/fill/992/477/herr-der-ringe.jpg",
  "https://www.watson.de/imgdb/a421/Qx,A,37,37,2225,1550,1150,812,187,187/2501689674176568",
  "https://www.watson.de/imgdb/a421/Qx,A,37,37,2225,1550,1150,812,187,187/2501689674176568",
  "https://img.welt.de/img/kultur/literarischewelt/mobile163718818/7192509317-ci102l-w1024/Neu-im-Kino-Der-Herr-der-Ringe-Die-Gefaehrten.jpg",
  "https://images.gutefrage.net/media/fragen/bilder/frisur-fuer-schule-legolas/0_big.jpg?v=1447878392000",
  "https://i.pinimg.com/originals/b3/57/77/b3577708b358930dc50bcf6539886952.jpg",
  "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-01-07-13-44/in-lord-of-the-rings-gollum-seht-ihr-ringgeister-und-legolas-vater-1578404662017.jpg/EG11/thumbnail/750x422/format/jpg/quality/60",
  "https://wallpaperaccess.com/full/827576.jpg",
  "https://media.playcentral.de/wp-content/uploads/2018/05/29234547/newspic-74351-652x367.jpg",
  "https://www.testedich.de/quiz28/picture/pic_1290347516_1.jpg",
  "https://vignette.wikia.nocookie.net/lotr/images/c/c0/Legolas.jpg/revision/latest/scale-to-width-down/340?cb=20080218173450&path-prefix=de",
  "https://www.testedich.de/quiz13/picture/pic_1112019387_1.jpg",
  "https://assets.cdn.moviepilot.de/files/4ce39c8f3773be10b89f2c0c348017d8e8f26ef7fa3169c25fe2ffb2301c/fill/992/477/gollu%2C.jpg",
  "https://aisvip-a.akamaihd.net/masters/1247244/3000x1688/ganz-schoen-wenig-orlando-bloom-verraet-die-hoehe-seiner-der-herr-der-ringe-gage.jpg",
  "https://i3-img.sat1.de/pis/ezone/62fdqgELB38wdEB-ZftIYFPQSp-HxjRVj8ghGONpO6WKv5HeAFxz5y20xG5ag7v4W5IE3-VVkBewMttC0VDzz16kB6xuJsETRCYH4pTARA/profile:mag-996x562",
  "https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2019/02/19124442/gandalfderweisseherrderringe-640x360.jpg",
  "https://static.kino.de/wp-content/uploads/2018/09/2afd5f01f979a0d3689c04dc8e9c3a47-rcm600x0u.jpg",
  "https://serienfuchs.de/wp-content/uploads/2019/10/herr-der-ringe-knechten-lord-of-ring-1228268.jpg",
  "https://www.handelsblatt.com/images/hugo-bildid-34163441this-image-released-by-warner-bros-pictures-shows-evangeline-lilly-left-and-orlando-bloom-in-a-scene-from-undquotthe-hobbit-/10276230/2-format2020.jpg",
  "https://i.pinimg.com/originals/64/e3/43/64e34339fce2612de987606eda1b36f9.jpg",
];

function linkGenerieren() {
  var zufallsZahl = Math.random() * meineLinks.length;
  var Index = Math.floor( zufallsZahl );
  document.getElementById("meinBild").src = meineLinks[Index];
}