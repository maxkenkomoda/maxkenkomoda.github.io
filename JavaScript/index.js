//--skills javascript-----------------------------------------------------
//define  skill card element
const mysql = document.getElementById('MySQL');
const autocad = document.getElementById('AutoCAD');
const lr = document.getElementById('Lr');
const xd = document.getElementById('XD');
const house_keeper = document.getElementById('House_Keeper');
const uk = document.getElementById('UK');
const ger = document.getElementById('GER');
const por = document.getElementById('POR');
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

bootstrap.addEventListener ('mouseenter', function (event) {
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

js.addEventListener ('mouseenter', function (event) {
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

git.addEventListener ('mouseenter', function (event) {
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

github.addEventListener ('mouseenter', function (event) {
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

ruby.addEventListener ('mouseenter', function (event) {
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

rails.addEventListener ('mouseenter', function (event) {
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

aws.addEventListener ('mouseenter', function (event) {
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

python.addEventListener ('mouseenter', function (event) {
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

vim.addEventListener ('mouseenter', function (event) {
  skill_description (
    'Vim', 
    'キーボードのみで完結するのは最強です。初心者ですが、大好きなエディターです。最近ではVim以外のソフトでカーソル移動を行う時にh,j,k,lで移動しようとする、保存の際に:wを押してしまうといった病気にかかっています。'
  );
});

vim.addEventListener ('mouseleave', function () {
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

//delete node function
function skill_description_delete (id) {
  //remove paragraph
  detail.textContent = null;
}


//--works javascript-----------------------------------------------------

//RISC code----------
//Define 
const RISC_h4 = document.getElementById('RISC_h4');
const RISC_detail = document.getElementById('RISC-detail');

//default hide option below
RISC_detail.style.display = 'none';


//Portfolio code----------
//Define 
const Portfolio_h4 = document.getElementById('Portfolio_h4');
const Portfolio_detail = document.getElementById('Portfolio_detail');

//default hide option below
Portfolio_detail.style.display = 'none';

//Fehler code----------
//Define 
const Fehler_h4 = document.getElementById('Fehler_h4');
const Fehler_detail = document.getElementById('Fehler_detail');

//default hide option below
Fehler_detail.style.display = 'none';


//Random code----------
//Define 
const Random_h4 = document.getElementById('Random_h4');
const Random_detail = document.getElementById('Random_detail');

//default hide option below
Random_detail.style.display = 'none';

//when user click, find id by function check_id
document.addEventListener('click', function (event) {
  check_id(event.target);    
});

function check_id (id) {
  switch (id) {
    case RISC_h4 :
      show_detail(RISC_detail, RISC_h4);
      break;
    case Portfolio_h4 :
      show_detail(Portfolio_detail, Portfolio_h4);
      break;
    case Fehler_h4 :
      show_detail(Fehler_detail, Fehler_h4);
      break;
    case Random_h4 :
      show_detail(Random_detail, Random_h4);
      break;
    default :
      id.style.display = 'none;'
  };
}


function show_detail(id, h4) {
  if(id.style.display == 'block') {
    // hidden
    id.style.display = 'none';
    h4.textContent = '+ 詳細を表示'
  }else{
  // visible
    id.style.display = 'block';
    id.style.border = '1px solid #808080';
    id.style.background= '#fffafa';
    h4.textContent = '- 詳細を閉じる'

  }
}
