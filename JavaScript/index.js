//--skills javascript-----------------------------------------------------
//define  description  element
const detail = document.getElementById('skill-detail');



//skills description javascript
//HTML

const html = document.getElementById('HTML');

html.addEventListener ('mouseenter', function () {
  skill_description (
    'HTML', 
    'このサイト程度であれば制作できます。気づけばdivだらけになっている気がしますが、、、このサイトはテンプレート等一切使わず０から全部自分で記述しました。'
  );
});

html.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//CSS

const css = document.getElementById('CSS');

css.addEventListener ('mouseenter', function () {
  skill_description (
    'CSS', 
    '簡単なWebサイト程度であれば制作できます。このサイトはテンプレート等一切使わず０から全部自分で記述しました。ただしまだ未熟者の為、スパゲティコードになりかけてます。'
  );
});

css.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Bootstrap

const bootstrap = document.getElementById('Bootstrap');

bootstrap.addEventListener ('mouseenter', function () {
  skill_description (
    'Bootsrtap', 
    'CSSに恐怖心を抱いていた頃は非常にお世話になりました。後述のRailsをつかった自作アプリ全てにおいて使用しております。'
  );
});

bootstrap.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});

//JS

const js = document.getElementById('JS');

js.addEventListener ('mouseenter', function () {
  skill_description (
    'JavaScript', 
    '後述の自作アプリで、Google Map APIを使いこなす必要があったため急遽一週間で詰め込み勉強しました。見よう見まねでRailsにjQueryで簡単なAjaxを書いてControllerのアクションを叩くコードを書く経験をしました。このサイトでのJavaScriptはフレームワークに頼らず書いています。これから勉強を頑張りたい言語No.1です。ゆくゆくはTypeScriptを....'
  );
});

js.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


// git

const git = document.getElementById('GIT');

git.addEventListener ('mouseenter', function () {
  skill_description (
    'git', 
    'コミット、ブランチを切る、直前のコミットに戻す、比較する等の超基本はできます。ブランチは便利です。'
  );
});

git.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//GitHub

const github = document.getElementById('GitHub');

github.addEventListener ('mouseenter', function () {
  skill_description (
    'GitHub', 
    'ローカルからリモートにプッシュ、リモートからクローン、プルリク、マージする等の超基本はできます。毎日草生やすのを生き甲斐にしようと思っています。'
  );
});

github.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Ruby

const ruby = document.getElementById('Ruby');

ruby.addEventListener ('mouseenter', function () {
  skill_description (
    'Ruby', 
    'Railsで使用する分にはある程度書けますが、Ruby単体でみるとまだまだ未熟者です。これからもっと勉強を深めて行きたいと考えております。'
  );
});

ruby.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Rails

const rails = document.getElementById('Rails');

rails.addEventListener ('mouseenter', function () {
  skill_description (
    'Rails', 
    '一番自分の中では知っているフレームワークです。Railsのレールに乗っている分には作りやすいですが、レールから外れた瞬間自信がなくなります。後述の自作アプリぐらいのレベルなら作れます。'
  );
});

rails.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//AWS

const aws = document.getElementById('AWS');

aws.addEventListener ('mouseenter', function () {
  skill_description (
    'Amazon Web Services', 
    'Railsを勉強始めた時の開発環境としてと、RISC!!という自作アプリをデプロイする時のインフラとして使用しました。デプロイは独学でやりきりました。'
  );
});

aws.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Python

const python = document.getElementById('Python');

python.addEventListener ('mouseenter', function () {
  skill_description (
    'Python', 
    '初めて勉強した言語です。マイクラのブロック積み上げの自働化をするために勉強しました。その他にも企業分析の非常に簡単な対話形式のソフトを作りました。今後ラズパイと組み合わせて遊んでいきたいです。'
  );
});

python.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Vim

const vim = document.getElementById('Vim');

vim.addEventListener ('mouseenter', function () {
  skill_description (
    'Vim', 
    'キーボードのみで完結するのは最強です。初心者ですが、大好きなエディターです。最近ではVim以外のソフトでカーソル移動を行う時にh,j,k,lで移動しようとする、保存の際に:wを押してしまうといった病気にかかっています。'
  );
});

vim.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//MySQL

const mysql = document.getElementById('MySQL');

mysql.addEventListener ('mouseenter', function () {
  skill_description (
    'MySQL', 
    'ググりながらならSQL文を書けます。RailsではActive RecordでSQL文を弄る機会がありませんでしたが、、理解を深める為、生のSQL文をかけるように学習しています。'
  );
});

mysql.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//CAD

const autocad = document.getElementById('AutoCAD');

autocad.addEventListener ('mouseenter', function () {
  skill_description (
    'AutoCAD, 3DCAD', 
    '簡単な部品なら2D,3Dどちらでも作図できます。現在の会社で、現場の作業効率を上げる為の部品を自分で設計し、3Dプリンターで制作しました。'
  );
});

autocad.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//Lr

const lr = document.getElementById('Lr');

lr.addEventListener ('mouseenter', function () {
  skill_description (
    'Lightroom', 
    '写真が趣味で現像編集に使っています。特に星空写真や自然現象の写真を撮るのは大得意です。下の写真は雷を捉えた写真です。もちろんLightroomで現像しました。'
  );
  add_image ( 
    './images/Thunder.jpg',
    '雷'
  );
});

lr.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//XD

const xd = document.getElementById('XD');

xd.addEventListener ('mouseenter', function () {
  skill_description (
    'Xd', 
    '使い始めたばかりですが、このホームページはXdを使って大まかなデザインを設計しました。良い製品は良い設計からという言葉がよく身に染みました。'
  );
});

xd.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//House keep

const house_keeper = document.getElementById('House_Keeper');

house_keeper.addEventListener ('mouseenter', function () {
  skill_description (
    '家事スキル', 
    '多分同年代の中であれば結構上位に来る自信があります。料理から洗濯、パン作り、掃除、浴槽のカビ取りまで一通りなんでもできます。'
  );
});

house_keeper.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});

//English

const uk = document.getElementById('UK');

uk.addEventListener ('mouseenter', function () {
  skill_description (
    '英語', 
    '実は英語できます。資格としてIELTS 6.0, TOEIC 795をもっています。幼少期のブラジル、中学3年間のシンガポール滞在、大学でのドイツ留学等、海外経験は豊富です。'
  );
});

uk.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//German

const ger = document.getElementById('GER');

ger.addEventListener ('mouseenter', function () {
  skill_description (
    'ドイツ語', 
    'ドイツ語もちょっとできます。資格としてはGoethe Zertifikat B1を取得しております。人生の目標であるアルプス制覇の為に学生時代から勉強しています。'
  );
});

ger.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//port

const por = document.getElementById('POR');

por.addEventListener ('mouseenter', function () {
  skill_description (
    'ポルトガル語', 
    'ポルトガル語もちょっとできます。レベルはA2ぐらいです。実はリスニングのみに関してではドイツ語よりもポルトガル語のほうが理解できます。'
  );
});

por.addEventListener ('mouseleave', function () {
  skill_description_delete ();
});


//add skill description with DOM control
function skill_description (title, message) {
  //create  <h3> 
  var h3 = document.createElement('h3');
  h3.textContent = title
  //create  <p> 
  var paragraph = document.createElement('p');
  paragraph.textContent = message
  //add paragraph as children of div:skill-detail
  detail.appendChild(h3);
  detail.appendChild(paragraph);
}

//add image to skill description with DOM control
function add_image (address, alt) {
  //create <img>
  var image = document.createElement('img');
  image.setAttribute('src', address, 'alt', alt)
  detail.appendChild(image);
}

//delete node function
function skill_description_delete (id) {
  //remove paragraph
  detail.textContent = null;
}


//--works javascript-----------------------------------------------------

//RISC code----------
//Define 
const RISC_button = document.getElementById('RISC_button');
const RISC_detail = document.getElementById('RISC-detail');

//default hide option below
RISC_detail.style.display = 'none';


//Portfolio code----------
//Define 
const Portfolio_button = document.getElementById('Portfolio_button');
const Portfolio_detail = document.getElementById('Portfolio_detail');

//default hide option below
Portfolio_detail.style.display = 'none';

//Fehler code----------
//Define 
const Fehler_button = document.getElementById('Fehler_button');
const Fehler_detail = document.getElementById('Fehler_detail');

//default hide option below
Fehler_detail.style.display = 'none';


//Random code----------
//Define 
const Random_button = document.getElementById('Random_button');
const Random_detail = document.getElementById('Random_detail');

//default hide option below
Random_detail.style.display = 'none';

//when user click, find id by function check_id
document.addEventListener('click', function (event) {
  check_id(event.target);    
});

function check_id (id) {
  switch (id) {
    case RISC_button :
      show_detail(RISC_detail, RISC_button);
      break;
    case Portfolio_button :
      show_detail(Portfolio_detail, Portfolio_button);
      break;
    case Fehler_button :
      show_detail(Fehler_detail, Fehler_button);
      break;
    case Random_button :
      show_detail(Random_detail, Random_button);
      break;
    default :
      id.style.display = 'none;'
  };
}


function show_detail(id, button) {
  if(id.style.display == 'block') {
    // hidden
    id.style.display = 'none';
    button.textContent = '+ 詳細を表示'
  }else{
  // visible
    id.style.display = 'block';
    id.style.border = '1px solid #808080';
    id.style.background= '#fffafa';
    button.textContent = '- 詳細を閉じる'

  }
}
