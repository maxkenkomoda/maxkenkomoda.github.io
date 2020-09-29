//--skills javascript-----------------------------------------------------
//define  description  element
const detail = document.getElementById('skill-detail');



//skills description javascript

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

function add_event_to_skill (skill) {
  const elem = document.getElementById(skill.id);

  elem.addEventListener ('mouseenter', function () {
    skill_description (
      skill.title,
      skill.message
    );

    if (skill.image) {
      add_image(
        skill.image.address,
        skill.image.alt
      );
    }
  });

  elem.addEventListener ('mouseleave', function () {
    skill_description_delete ();
  });
}

const skills = [
  {
    id: 'HTML',
    title: 'HTML',
    message: 'このサイト程度であれば制作できます。気づけばdivだらけになっている気がしますが、、、このサイトはテンプレート等一切使わず０から全部自分で記述しました。'
  },
  {
    id: 'CSS',
    title: 'CSS',
    message: '簡単なWebサイト程度であれば制作できます。このサイトはテンプレート等一切使わず０から全部自分で記述しました。ただしまだ未熟者の為、スパゲティコードになりかけてます。',
  },
  {
    id: 'Bootstrap',
    title: 'Bootstrap',
    message: 'CSSに恐怖心を抱いていた頃は非常にお世話になりました。後述のRailsをつかった自作アプリ全てにおいて使用しております。',
  },
  {
    id: 'JS',
    title: 'JavaScript',
    message: '後述の自作アプリで、Google Map APIを使いこなす必要があったため急遽一週間で詰め込み勉強しました。見よう見まねでRailsにjQueryで簡単なAjaxを書いてControllerのアクションを叩くコードを書く経験をしました。このサイトでのJavaScriptはフレームワークに頼らず書いています。これから勉強を頑張りたい言語No.1です。ゆくゆくはTypeScriptを....',
  },
  {
    id: 'GIT',
    title: 'git',
    message: 'コミット、ブランチを切る、直前のコミットに戻す、比較する等の超基本はできます。ブランチは便利です。',
  },
  {
    id: 'GitHub',
    title: 'GitHub',
    message: 'ローカルからリモートにプッシュ、リモートからクローン、プルリク、マージする等の超基本はできます。毎日草生やすのを生き甲斐にしようと思っています。',
  },
  {
    id: 'Ruby',
    title: 'Ruby',
    message: 'Railsで使用する分にはある程度書けますが、Ruby単体でみるとまだまだ未熟者です。これからもっと勉強を深めて行きたいと考えております。',
  },
  {
    id: 'Rails',
    title: 'Rails',
    message: '一番自分の中では知っているフレームワークです。Railsのレールに乗っている分には作りやすいですが、レールから外れた瞬間自信がなくなります。後述の自作アプリぐらいのレベルなら作れます。',
  },
  {
    id: 'AWS',
    title: 'Amazon Web Services',
    message: 'Railsを勉強始めた時の開発環境としてと、RISC!!という自作アプリをデプロイする時のインフラとして使用しました。デプロイは独学でやりきりました。',
  },
  {
    id: 'Python',
    title: 'Python', 
    message: '初めて勉強した言語です。マイクラのブロック積み上げの自働化をするために勉強しました。その他にも企業分析の非常に簡単な対話形式のソフトを作りました。今後ラズパイと組み合わせて遊んでいきたいです。',
  },
  {
    id: 'Vim',
    title: 'Vim',
    message: 'キーボードのみで完結するのは最強です。初心者ですが、大好きなエディターです。最近ではVim以外のソフトでカーソル移動を行う時にh,j,k,lで移動しようとする、保存の際に:wを押してしまうといった病気にかかっています。',
  },
  {
    id: 'MySQL',
    title: 'MySQL',
    message: 'ググりながらならSQL文を書けます。RailsではActive RecordでSQL文を弄る機会がありませんでしたが、、理解を深める為、生のSQL文をかけるように学習しています。',
  },
  {
    id: 'Excel',
    title: 'Excel',
    message: 'VBAを用い、Microsoft Accessと連携させてデータの入出力・参照する業務効率化 アプリを作りました。これにて現在の会社で約1ヶ月ほどかかっていた仕事を3日ほどで終わらすことができるように業務改善しました。ちなみに結合されたセルは大嫌いです。',
  },
  {
    id: 'AutoCAD',
    title: 'AutoCAD, 3DCAD',
    message: '簡単な部品なら2D,3Dどちらでも作図できます。現在の会社で、現場の作業効率を上げる為の部品を自分で設計し、3Dプリンターで制作しました。',
  },
  {
    id: 'Lr',
    title: 'Lightroom',
    message: '写真が趣味で現像編集に使っています。特に星空写真や自然現象の写真を撮るのは大得意です。下の写真は雷を捉えた写真です。もちろんLightroomで現像しました。',
    image: {
      address: './images/Thunder.jpg',
      alt: '雷',
    }
  },
  {
    id: 'XD',
    title: 'Xd',
    message: '使い始めたばかりですが、このホームページはXdを使って大まかなデザインを設計しました。良い製品は良い設計からという言葉がよく身に染みました。',
  },
  {
    id: 'House_Keeper',
    title: '家事スキル',
    message: '多分同年代の中であれば結構上位に来る自信があります。料理から洗濯、パン作り、掃除、浴槽のカビ取りまで一通りなんでもできます。',
  },
  {
    id: 'UK',
    title: '英語',
    message: '実は英語できます。資格としてIELTS 6.0, TOEIC 795をもっています。幼少期のブラジル、中学3年間のシンガポール滞在、大学でのドイツ留学等、海外経験は豊富です。',
  },
  {
    id: 'GER',
    title: 'ドイツ語',
    message: 'ドイツ語もちょっとできます。資格としてはGoethe Zertifikat B1を取得しております。人生の目標であるアルプス制覇の為に学生時代から勉強しています。',
  },
  {
    id: 'POR',
    title: 'ポルトガル語',
    message: 'ポルトガル語もちょっとできます。レベルはA2ぐらいです。実はリスニングのみに関してではドイツ語よりもポルトガル語のほうが理解できます。',
  },
];

skills.forEach(add_event_to_skill);

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
